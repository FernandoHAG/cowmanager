// import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../../features/counter/counterSlice";
import styles from "./Counter.module.css";

const DivRow = styled("div")({
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
});
const StyledButton = styled("button")({
  appearance: "none",
  background: "none",
  "font-size": "32px",
  "padding-left": "12px",
  "padding-right": "12px",
  outline: "none",
  border: "2px solid transparent",
  color: "rgb(112, 76, 182)",
  "padding-bottom": "4px",
  cursor: "pointer",
  "background-color": "rgba(112, 76, 182, 0.1)",
  "border-radius": "2px",
  transition: "all 0.15s",
  "&:focus": {
    border: "2px solid rgba(112, 76, 182, 0.4)",
  },
  "&:hover": {
    border: "2px solid rgba(112, 76, 182, 0.4)",
  },
  "&:active": {
    "background-color": "rgba(112, 76, 182, 0.2)",
  },
});

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <DivRow>
        <StyledButton aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </StyledButton>
        <span className={styles.value}>{count}</span>
        <StyledButton aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </StyledButton>
      </DivRow>
      <DivRow>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <StyledButton onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</StyledButton>
        <button className={styles.asyncButton} onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <StyledButton onClick={() => dispatch(incrementIfOdd(incrementValue))}>Add If Odd</StyledButton>
      </DivRow>
    </div>
  );
}
