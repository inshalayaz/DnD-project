import { Divider, Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";

import React, { useContext } from "react";
import Item from "../dndForm/Item";
import { DndContext } from "../../context/dndContext/DndContext";
import { FieldList } from "../../pages/dndFrom/Fields";
import "./style.css";

const drawerWidth = 340;
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: "#f4f6fa",
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const FieldItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: 0,
  margin: "30px 10px",
  boxShadow: "none",
  cursor: "pointer",
}));

const mdTheme = createTheme();

const Sidebar = () => {
  // const { fields } = useContext(DndContext);

  const [open] = React.useState(true);

  return (
    <ThemeProvider theme={mdTheme}>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        ></Toolbar>
        <Divider />
        <Grid container spacing={1} classname="hello">
          {FieldList?.map((item) => (
            <Grid item xs={6} classname="box">
              <FieldItem>
                <Item type={item.type} id={item.id} />
              </FieldItem>
            </Grid>
          ))}
        </Grid>
      </Drawer>
    </ThemeProvider>
  );
};

export default Sidebar;
