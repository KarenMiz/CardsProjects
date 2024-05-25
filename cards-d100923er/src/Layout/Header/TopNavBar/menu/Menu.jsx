import React, { useState } from "react";
import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import MenuLink from "../../../../routes/components/MenuLink";
import ROUTES from "../../../../routes/routesModel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import SearchBar from "../right-navigation/SearchBar";
import Tooltip from "@mui/material/Tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import { useNavigate } from "react-router-dom";

export default function Menu({ isOpen, anchorEl, onClose }) {
  const { user } = useUser();
  const { handleLogout } = useUsers();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleDarkMode } = useTheme();
  const navigate = useNavigate();
  const handleMobileToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onLogout = () => {
    handleLogout();
    onClose();
    if (isMobile) {
      handleMobileToggle();
    }
  };

  const renderMenuItems = () => (
    <Box>
      {isMobile && <SearchBar />}
      <MenuLink text="About" navigateTo={ROUTES.ABOUT} onClick={onClose} />
      {!user ? (
        <>
          <MenuLink text="Login" navigateTo={ROUTES.LOGIN} onClick={onClose} sx={{ color: "blue" }} />
          <MenuLink text="Signup" navigateTo={ROUTES.SIGNUP} onClick={onClose} />
        </>
      ) : (
        <>
          <MenuLink text="Profile" navigateTo={ROUTES.USER_PROFILE} onClick={onClose} />
          <MenuItem onClick={() => {
            navigate(ROUTES.EDIT_USER);
          }}>Edit Account</MenuItem>
          <MenuLink text="Edit Account" navigateTo={ROUTES.EDIT_USER} onClick={onClose} />
          <MenuLink text="Favorites Cards" navigateTo={ROUTES.FAV_CARDS} onClick={onClose} />
          {user && (user.isAdmin || user.isBusiness) ? (
            <MenuLink text="My Cards" navigateTo={ROUTES.MY_CARDS} onClick={onClose} />
          ) : null}
          <MenuItem onClick={onLogout}>Logout</MenuItem>
        </>
      )}
      {isMobile && (
        <MenuItem>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Dark/Light Mode">
              <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
            <Box component="span" ml={1}>Dark/Light Mode</Box>
          </Box>
        </MenuItem>
      )}
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleMobileToggle}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleMobileToggle}
            sx={{ '& .MuiDrawer-paper': { width: 'auto', height: 'auto', maxHeight: '100%' } }}
          >
            {renderMenuItems()}
          </Drawer>
        </Box>
      ) : (
        <MuiMenu
          open={isOpen}
          onClose={onClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {renderMenuItems()}
        </MuiMenu>
      )}
    </>
  );
}
