import React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import CustomListItem from "./CustomListItem";
import CssBaseline from '@mui/material/CssBaseline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { AppBar, Avatar, ListItem, ListItemAvatar, ListItemIcon, ListItemText, ThemeProvider, createTheme } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Grid } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import './Nav.css';
import { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Logout } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import Cookies from "js-cookie"

const drawerWidth = 288;

const theme = createTheme();

const Main = ({ open, children }) => (
    <Box
        component="main"
        sx={{
            flexGrow: 1,
            padding: 3,
            transition: 'margin 225ms cubic-bezier(0.4, 0.0, 0.6, 1) 0ms',
            marginLeft: `0px`,
            ...(open && {
                transition: 'margin 225ms cubic-bezier(0.0, 0.0, 0.2, 1) 0ms',
                marginLeft: `${drawerWidth}px`,
            }),
        }}
    >
        {children}
    </Box>
);

export default function NavBar({ children }) {
    
    const [ user, setUser ] = useState([]);
    const [ profile, setProfile ] = useState(null);
    const [cookiesLoaded, setCookiesLoaded] = useState(false); 
   
    /*const sendGoogleAuth=function(auth){
        const url = "/weatherforecast";
        const data = auth;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((responseData) => {
            alert(JSON.stringify(responseData));
            console.log(responseData); // This will log the server's response
        })
        .catch((error) => {
            alert("Error:", error);
            console.error("Error:", error);
        });
    }*/

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            localStorage.setItem("googleToken",codeResponse.access_token);
            Cookies.set("googleToken",codeResponse.access_token,{expires:codeResponse.expires_in});
            setUser(codeResponse);
            console.log("code response",codeResponse);
            console.log("Successful Google Login");
            console.log("access token",user.access_token);
        },
        onError: (error) => console.log('Login Failed:', error)
    });
    const logOut = () => {
        Cookies.remove("googleToken");
        googleLogout();
        setProfile(null);
    };
    useEffect(
        () => {
            if (user) {
                axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        cookiesLoaded=true;
                    })
                    .catch((err) => console.log(err));
            }
        },[ user ]
    );

    useEffect(() => {
        var gt = localStorage.getItem('googleToken');
        gt=Cookies.get("googleToken");
        if (gt != null && gt !== "undefined" && gt !== "null" && !cookiesLoaded) {
          setUser({
            "access_token": gt
          });
          setCookiesLoaded(true);
        }
      }, [cookiesLoaded]);


    const AppName = "Cover Convo";
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Hello
                    </Typography>
                    
                    
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent" anchor="left" open={open}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '100%',
                    }} >
                    <div>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', ...theme.mixins.toolbar }}>
                            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                                <Grid item xs>
                                    <h4 style={{ marginTop: "6px", marginLeft: "20px" }}>{AppName}</h4>
                                </Grid>
                                <Grid item xs="auto">
                                    <IconButton onClick={handleDrawerClose}>
                                        <ChevronLeftIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />
                        <List>
                            <CustomListItem path="/create" text="Create">
                                <AddBoxIcon />
                            </CustomListItem>
                            <CustomListItem path="/counter" text="Templates">
                                <DescriptionIcon />
                            </CustomListItem>
                            <CustomListItem path="/user-info" text="User Info">
                                <AccountCircleIcon />
                            </CustomListItem>

                            <Divider />
                            <CustomListItem text="Premium" path="/fetch-data">
                                <PaidIcon />
                            </CustomListItem>
                        </List>
                    </div>
                    <div>
                        <Divider />
                       
                                               
                        {profile!=null ? (
                            <div>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar src={profile.picture}/>
                                </ListItemAvatar>
                                <ListItemText>{profile.name}</ListItemText>
                            </ListItem>
                            <CustomListItem text="Sign Out" click={logOut}>
                                <LogoutIcon />
                            </CustomListItem>
                            </div>
                        ):(
                            <CustomListItem text="Sign In With Google" click={login}>
                                <GoogleIcon/>
                            </CustomListItem>
                        )}
                        
                        <CustomListItem text="Settings">
                            <SettingsIcon />
                        </CustomListItem>
                    </div>
                </Box>
            </Drawer>
            <Main open={open}>
                <div className="main">
                    {children}
                </div>
            </Main>
        </ThemeProvider>
    );
}
