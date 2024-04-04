import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


export default function Spinner() {
    const Spinner = ({ color= "primary", size=40, height="50vh" }) => {
        console.log("SPINNER");
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              minHeight: { height },
            }}
          >
            <CircularProgress
              color={color}
              size={size}
              sx={{ alignSelf: "center" }}
            />
          </Box>
        );
      };
    }
   