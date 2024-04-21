import { Box } from "@mui/material";
import React from "react";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useUser } from "../../../../users/providers/UserProvider";

export default function RightNavBar() {
  const { user } = useUser();
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
    </>
  );
}