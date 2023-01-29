import { Grid } from "@mui/material";
import * as React from "react";
import FetchList from "../../service/CheckListApi";

export default function ListChecklist() {
  return (
    <Grid container spacing={2} sx={{ marginTop: "1px" }}>
      {FetchList()}
    </Grid>
  );
}
