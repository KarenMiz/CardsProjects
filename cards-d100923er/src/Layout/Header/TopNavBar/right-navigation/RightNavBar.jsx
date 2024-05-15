import { Box, IconButton } from "@mui/material";
import React from "react";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useUser } from "../../../../users/providers/UserProvider";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchBar from "./SearchBar";

export default function RightNavBar() {
  const { user } = useUser();
  const {isDark, toggleDarkMode} = useTheme();
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <SearchBar/>
        <IconButton sx={{ml: 1}} onClick={toggleDarkMode}>
        {isDark? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
    </>
  );
}

