import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import Login from "./Login";
import {Drawer, List, ListItem, ListItemText} from "@mui/material";
import { createTheme, Theme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import ReactDOM from 'react-dom/client';
import {createRoot} from "react-dom";

const drawerWidth = 340;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


function Navigation(props: Props) {

    this.formEmail = "";

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
      alert('in renderlink');
  };
    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);
    function Comp() {
        return(
            <div className="employee form">
                <h1>Add Emoployee Form</h1>

                <input type="email" placeholder=" Email" onChange={this.formEmail.bind(this)}></input>
                <br></br>
            </div>
            
        );
    }
  function renderLink() {
      alert('in render');
      root.render(<Comp/>);
  }

    function addEmployeeForm() {

        return (
            <div className="employee form">
                <h1>Add Emoployee Form</h1>

                <input type="email" placeholder=" Email" onChange={this.formEmail.bind(this)}></input>
                <br></br>
                <input type="text" placeholder="Name" onChange={this.formName.bind(this)}></input>
                <br></br>
                <input type="text" placeholder="Address" onChange={this.formAddress.bind(this)}></input>
                <br></br>
                <input type="text" placeholder="Position" onChange={this.formPosition.bind(this)}></input>
                <button onClick={this.addEmployees.bind(this)}>Add Employee</button>

            </div>
        )

    }
    const RenderLink =()=>{
        const [components, setComponents] = useState(["TalentComp"]);
        setComponents([...components, "TalentComp"])
        alert('in renderlink');
        useEffect(() => {
            console.log('hello world');
        }, []);

    };

    const drawer = (
      <div>
        <Toolbar />
        <Divider />


          <ListItem divider>
              <ListItemButton onClick={renderLink} >
                  <ListItemIcon
                      sx={{ color: "green" }}>
                      <PersonAddIcon />
                  </ListItemIcon>
                  <ListItemText
                      primary="Add Employee" />
              </ListItemButton>
          </ListItem>

          <ListItem divider>
              <ListItemButton>
                  <ListItemIcon
                      sx={{ color: "orange" }}>
                      <EditIcon />
                  </ListItemIcon>
                  <ListItemText
                      primary="Edit Employee" />
              </ListItemButton>
          </ListItem>
          <ListItem divider>
              <ListItemButton>
                  <ListItemIcon
                      sx={{ color: "red" }}>
                      <PersonRemoveIcon />
                  </ListItemIcon>
                  <ListItemText
                      primary="Delete Employee" />
              </ListItemButton>
          </ListItem>
                  <Divider />

      </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (

          <Box sx={{ display: 'flex' }}>

            <AppBar
                position="fixed"
                sx={{
                  width: { sm: `calc(100% - ${drawerWidth}px)` },
                  ml: { sm: `${drawerWidth}px` },
                }}
            >
              <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  TalentSphere
                </Typography>

              </Toolbar>

            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
              >
                {drawer}
              </Drawer>
              <Drawer
                  variant="permanent"
                  sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
                  open
              >
                {drawer}
              </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
              <Toolbar />


            </Box>
          </Box>

  );
}

export default Navigation;
