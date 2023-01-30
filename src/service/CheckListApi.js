import { DeleteForever, Edit, Visibility } from "@mui/icons-material";
import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import axios from "axios";
import React from "react";

const baseURL = "http://challenge-front-end.bovcontrol.com/v1/checkList";
const defaultFarm = {
  _id: 0,
  type: "",
  amount_of_milk_produced: 0,
  number_of_cows_head: 0,
  had_supervision: false,
  farmer: {
    name: "",
    city: "",
  },
  from: {
    name: "",
  },
  to: {
    name: "",
  },
  location: {
    latitude: 0,
    longitude: 0,
  },
  created_at: "",
  updated_at: "",
};

export default function FetchList() {
  const [post, setPost] = React.useState(null);
  const [openModal, openModalSet] = React.useState(false);
  const [farmData, farmDataSet] = React.useState(defaultFarm);
  const handleOpenModal = (data) => {
    console.log("handleOpenModal");
    farmDataSet(data);
    console.log(data);
    openModalSet(true);
  };
  const handleCloseModal = () => openModalSet(false);

  function fetchData() {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  function removeData(id) {
    axios.delete(baseURL + "/" + id).then(() => {
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
                key={checklist._id + "-" + randonKey + "-button-Deletar"}
              >
                Deletar
              </Button>
              <Button
                variant="outlined"
                startIcon={<Edit />}
                style={{ margin: "10px" }}
                onClick={() => console.log("Editar fazenda " + checklist._id)}
                key={checklist._id + "-" + randonKey + "-button-Editar"}
              >
                Editar
              </Button>
              <Button
                variant="outlined"
                startIcon={<Visibility />}
                style={{ margin: "10px" }}
                onClick={() => handleOpenModal(checklist)}
                key={checklist._id + "-" + randonKey + "-button-Visualizar"}
              >
                Visualizar
              </Button>
            </div>
          </Paper>
        </Grid>
      );
    })
  );

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  retorno.push(
    <Modal
      open={openModal}
      onClose={() => handleCloseModal()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Fazendeiro: {farmData.to.name}
        </Typography>
        <Typography variant="h6" component="h2">
          Antigo dono: {farmData.from.name}
        </Typography>
        <Typography variant="h6" component="h2">
          Nome da fazenda: {farmData.farmer.name}
        </Typography>
        <Typography variant="h6" component="h2">
          Cidade: {farmData.farmer.city}
        </Typography>
        <Typography variant="h6" component="h2">
          Quantidade de leite: {farmData.amount_of_milk_produced}L
        </Typography>
        <Typography variant="h6" component="h2">
          Teve supervisor: {farmData.had_supervision ? "Sim" : "Não"}
        </Typography>
        <Typography variant="h6" component="h2">
          N° de cabeças de gado: {farmData.number_of_cows_head}
        </Typography>
        <Typography variant="h6" component="h2">
          Tipo de fazenda: {farmData.type}
        </Typography>
        <Typography variant="h6" component="h2">
          Localização: lat={farmData.location.latitude} lon={farmData.location.longitude}
        </Typography>
      </Box>
    </Modal>
  );

  return retorno;
}
