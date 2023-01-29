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
import * as React from "react";

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

export default function CreateChecklist() {
  const [openCreateChecklist, openCreateChecklistSet] = React.useState(false);
  const [dadosCadastrais, dadosCadastraisSet] = React.useState(dadosCadastraisDefault);

  let cadastro = () => {
    console.log(dadosCadastrais);
    dadosCadastraisSet(dadosCadastraisDefault);
    openCreateChecklistSet(false);
  };

  let openMap = (event) => {
    dadosCadastrais.latitude = 123;
    dadosCadastrais.longitude = -321;
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
                onChange={(event) => (dadosCadastrais.farmerName = event.target.value)}
                defaultValue={dadosCadastrais.farmerName}
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
                onChange={(event) => (dadosCadastrais.farmeName = event.target.value)}
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
                onChange={(event) => (dadosCadastrais.farmCity = event.target.value)}
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
                onChange={(event) => (dadosCadastrais.superviserName = event.target.value)}
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
                onChange={(event) => (dadosCadastrais.checklistType = event.target.value)}
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
                onChange={(event) => (dadosCadastrais.milkAmount = +event.target.value)}
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
                onChange={(event) => (dadosCadastrais.cowAmount = +event.target.value)}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box elevation={5} sx={{ minHeight: "90px" }}>
              <FormControlLabel
                control={<Switch onChange={(event) => (dadosCadastrais.haveSupervisor = event.target.checked)} />}
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
