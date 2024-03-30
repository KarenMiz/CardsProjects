import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
   
    if  (counter % 7 === 0 || counter.toString().includes("7")) {
      console.log("BOOM");
    }
    
    return () => {
      console.log("count has unmounted");
    };
  }, [counter]);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        height={200}
        width={200}
        my={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        p={2}
        sx={{ border: "2px solid grey" }}
      >
        <Typography variant="h3">{counter}</Typography>
      </Box>
      <Box>
        <Button variant="contained" sx={{ mr: 4 }} onClick={increment}>
          +
        </Button>
        <Button variant="contained" onClick={decrement}>
          -
        </Button>
      </Box>
      <Button variant="contained" sx={{ mt: 2 }} onClick={resetCounter}>
        Reset
      </Button>
    </Box>
  );
}
