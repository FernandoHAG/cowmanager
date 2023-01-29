// import { Button } from "@mui/material";
import { Box } from "@mui/material";
import React /*, { useState }*/ from "react";
import CreateChecklist from "../../components/CreateChecklist/CreateChecklist";
import HeaderAppBar from "../../components/HeaderAppBar/HeaderAppBar";
import ListChecklist from "../../components/ListChecklist/ListChecklist";
// import {
// useSelector,
// useDispatch,
// } from "react-redux";
// import styled from "styled-components";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from "../../features/counter/counterSlice";
// import styles from "./Counter.module.css";

export function Home() {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState("2");

  // const incrementValue = Number(incrementAmount) || 0;
  // {/* <div>
  //   <button aria-label="registration" onClick={() => dispatch(decrement())}>
  //     Cadastrar
  //   </button>
  // </div> */}

  return (
    <Box
      sx={{
        position: "absolute",
        height: "100%",
        width: "100%",
        bgcolor: "gray",
      }}
    >
      <HeaderAppBar />
      <CreateChecklist />
      <ListChecklist />
    </Box>
  );
}
