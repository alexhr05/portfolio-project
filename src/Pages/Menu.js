import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;
const navItems = [
  {
    title: "Начало",
    path: "/",
  },
  {
    title: "Проекти",
    path: "/projects",
  },
];

function Menu() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const closeDrawer = () => setMobileOpen(false);

  return (
    <Box component="header">
      <CssBaseline />
      <AppBar component="nav" aria-label="Main navigation" sx={{background: "#1457e8"}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            Alex Hristov
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={NavLink}
                to={item.path}
                end={item.path === "/"}
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: 18,
                  textTransform: "none",
                  "&.active": {
                    backgroundColor: "rgba(255, 255, 255, 0.16)",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            edge="end"
            aria-label="Open navigation menu"
            aria-controls="mobile-navigation-drawer"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: "inline-flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={closeDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Box
          component="nav"
          id="mobile-navigation-drawer"
          
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1,
            }}
          >
            <Typography variant="h6" component="h2">
              Menu
            </Typography>
            <IconButton aria-label="Close navigation menu" onClick={closeDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.path}>
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeDrawer}
                  sx={{
                    color: "text.primary",
                    "&.active": {
                      backgroundColor: "action.selected",
                    },
                  }}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Menu;
