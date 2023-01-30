import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from "@mui/material";
import axios from "axios";
import * as React from "react";

const baseURL = "http://challenge-front-end.bovcontrol.com/v1/checkList";
const dadosCadastraisDefault = {
  farmerName: "",
  farmeName: "",
  farmCity: "",
  superviserName: "",
  checklistType: "",
  milkAmount: 0,
  cowAmount: 0,
  haveSupervisor: false,
  latitude: 0,
  longitude: 0,
};
const defaultData = {
  checklists: [
    {
      _id: "1",
      type: "BPA",
      amount_of_milk_produced: 300,
      number_of_cows_head: 17,
      had_supervision: true,
      farmer: {
        name: "Fazenda São Rock",
        city: "São Rock",
      },
      from: {
        name: "Luciano Camargo",
      },
      to: {
        name: "Fernando Siqueira",
      },
      location: {
        latitude: -23.5,
        longitude: -46.6,
      },
      created_at: "2022-02-01T10:10:21.748Z",
      updated_at: "2022-02-01T10:10:21.748Z",
    },
  ],
};

export default function CreateChecklist() {
  const [openCreateChecklist, openCreateChecklistSet] = React.useState(false);
  const [dadosCadastrais, dadosCadastraisSet] = React.useState(defaultData.checklists[0]);

  let cadastro = () => {
    console.log("cadastrando");
    console.log(dadosCadastrais);

    dadosCadastrais._id = Math.floor(Math.random() * 101);
    let dataToBeSend = defaultData;
    dataToBeSend.checklists[0] = dadosCadastrais;

    axios.post(baseURL, dataToBeSend).then(() => {
      console.log("cadastrado");
    });

    dadosCadastraisSet(dadosCadastraisDefault);
    openCreateChecklistSet(false);
  };

  let openMap = (event) => {
    dadosCadastrais.location.latitude = 123;
    dadosCadastrais.location.longitude = -321;
  };

  let createChecklistData = () => {
    return (
      <FormControl>
        <Grid container spacing={2} sx={{ paddingRight: "10px" }}>
          <Grid item xs={4}>
            <Box elevation={5} sx={{ minHeight: "90px" }}>
              <TextField
                id="farmer-name"
                label="Nome do fazendeiro"
                variant="filled"
                sx={{ width: "100%" }}
                onChange={(event) => (dadosCadastrais.to.name = event.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box elevation={5} sx={{ minHeight: "90px" }}>
              <TextField
                id="farm-name"
                label="nome da fazenda"
                variant="filled"
                sx={{ width: "100%" }}
                onChange={(event) => (dadosCadastrais.farmer.name = event.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box elevation={5} sx={{ minHeight: "90px" }}>
              <TextField
                id="farm-city"
                label="cidade da fazenda"
                variant="filled"
                sx={{ width: "100%" }}
                onChange={(event) => (dadosCadastrais.farmer.city = event.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box elevation={5} sx={{ minHeight: "90px" }}>
              <TextField
                id="superviser-name"
                label="nome do supervisor"
                variant="filled"
                sx={{ width: "100%" }}
                onChange={(event) => (dadosCadastrais.from.name = event.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box elevation={5} sx={{ minHeight: "90px" }}>
              <FormLabel id="checklistType">tipo do checklist</FormLabel>
              <RadioGroup
                row
                aria-labelledby="checklistType"
                name="checklistType"
                onChange={(event) => (dadosCadastrais.type = event.target.value)}
              >
                <FormControlLabel value="BPA" control={<Radio />} label="BPA" />
                <FormControlLabel value="Antibiótico" control={<Radio />} label="Antibiótico" />
                <FormControlLabel value="BPF" control={<Radio />} label="BPF" />
              </RadioGroup>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box elevation={5} sx={{ minHeight: "90px" }}>
              <TextField
                id="milk-amount"
                label="quantidade de leite produzida no mês"
                variant="filled"
                sx={{ width: "100%" }}
                type="number"
                onChange={(event) => (dadosCadastrais.amount_of_milk_produced = +event.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box elevation={5} sx={{ minHeight: "90px" }}>
              <TextField
                id="cow-amount"
                label="quantidade de cabeça de gado"
                variant="filled"
                sx={{ width: "100%" }}
                type="number"
                onChange={(event) => (dadosCadastrais.number_of_cows_head = +event.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box elevation={5} sx={{ minHeight: "90px" }}>
              <FormControlLabel
                control={<Switch onChange={(event) => (dadosCadastrais.had_supervision = event.target.checked)} />}
                label="teve supervisão no mês em curso"
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box elevation={5} sx={{ minHeight: "90px" }}>
              <FormLabel id="latitude-longitude">latitude e longitude da fazenda</FormLabel>
              <br />
              <Button onClick={(event) => openMap(event)}>Abrir Mapa</Button>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" sx={{ margin: "5px" }} onClick={() => cadastro()}>
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    );
  };

  return (
    <Paper elevation={3}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Button
            variant="contained"
            sx={{ margin: "5px" }}
            onClick={() => {
              dadosCadastraisSet(dadosCadastraisDefault);
              openCreateChecklistSet(!openCreateChecklist);
            }}
          >
            Criar Checklist
          </Button>
        </Grid>
        <Grid item xs={10}>
          {openCreateChecklist && createChecklistData()}
        </Grid>
      </Grid>
    </Paper>
  );
}
