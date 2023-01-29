import { DeleteForever, Edit, Visibility } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

const baseURL = "http://challenge-front-end.bovcontrol.com/v1/checkList";

export default function FetchList() {
  const [post, setPost] = React.useState(null);

  function fetchData() {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  function removeData(id) {
    axios
      .delete(baseURL + "/" + id)
      .then((response) => {
        console.log("removendo " + id);
        console.log(response);
      })
      .then(() => {
        fetchData();
      });
  }

  if (!post) return null;

  let retorno = [];
  let randonKey = Math.floor(Math.random() * 101);
  retorno.push(
    post.map((checklist) => {
      return (
        <Grid item xs={4} key={checklist._id + "-" + randonKey + "-paper"}>
          <Paper
            key={checklist._id + "-" + randonKey + "-paper"}
            sx={{ marginLeft: "10px", marginRight: "10px", paddingLeft: "10px" }}
          >
            <Typography style={{ textAlign: "left" }} key={checklist._id + "-" + randonKey + "-Fazendeiro"}>
              Fazendeiro: {checklist.from.name}
            </Typography>
            <Typography style={{ textAlign: "left" }} key={checklist._id + "-" + randonKey + "-Fazenda"}>
              Fazenda: {checklist.farmer.name}
            </Typography>
            <Typography style={{ textAlign: "left" }} key={checklist._id + "-" + randonKey + "-Cidade"}>
              Cidade: {checklist.farmer.city}
            </Typography>
            <Typography style={{ textAlign: "left" }} key={checklist._id + "-" + randonKey + "-Data"}>
              Data: {checklist.created_at}
            </Typography>
            <div key={checklist._id + "-" + randonKey + "-buttons"}>
              <Button
                variant="outlined"
                startIcon={<DeleteForever />}
                style={{ margin: "10px" }}
                onClick={() => removeData(checklist._id)}
              >
                Deletar
              </Button>
              <Button
                variant="outlined"
                startIcon={<Edit />}
                style={{ margin: "10px" }}
                onClick={() => console.log("Editar fazenda " + checklist._id)}
              >
                Editar
              </Button>
              <Button
                variant="outlined"
                startIcon={<Visibility />}
                style={{ margin: "10px" }}
                onClick={() => console.log("Visualizar fazenda " + checklist._id)}
              >
                Visualizar
              </Button>
            </div>
          </Paper>
        </Grid>
      );
    })
  );
  return retorno;
}
