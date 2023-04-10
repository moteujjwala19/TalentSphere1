import  React, { Component } from "react";
import {Routes, Route, useNavigate, BrowserRouter, Link, redirect, NavLink} from 'react-router-dom';

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Talent from "./Services/Talent.js";
import Login from "./Components/Login";
import * as ReactDOM from 'react-dom';
import App from "./App";

export default function Header() {
    const container = document.getElementById('app');


// During an update, React would access
// the root of the DOM element.


    const handleButtonClick = () => {
        import('./Components/Login.js')
            .then(module => {
                alert('hi');
            })
            .catch(error => {
                // Handle any errors that occurred during import
            });
    }

    return (

        <AppBar position="static">
            <Toolbar>
                {}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                {}

                <Typography variant="h6"
                            component="div" sx={{ flexGrow: 1 }}>
                    TalentSphere
                </Typography>

                <NavLink to="/login" color="white">
                    <Button color="inherit">Login</Button>
                </NavLink>
            </Toolbar>

        </AppBar>

    );
}
