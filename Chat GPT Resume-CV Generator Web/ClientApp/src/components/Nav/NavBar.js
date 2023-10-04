import React from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'; // Added
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import CustomListItem from "./CustomListItem";
import CssBaseline from '@mui/material/CssBaseline';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, ThemeProvider, createTheme } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Nav.css';
const drawerWidth = 240;

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
    const AppName = "Cover Convo";
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const navigate = useNavigate();
    const navigateTo = (a) => {
       // navigate(a.target.getAttribute("path"));
        //useHistory().push();
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
                        Howdy
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
                            <CustomListItem path="/" text="Create">
                                <AddBoxIcon />
                            </CustomListItem>
                            <CustomListItem path="/counter" text="Templates">
                                <DescriptionIcon />
                            </CustomListItem>
                            <CustomListItem path="/fetch-data" text="User Info">
                                <AccountCircleIcon />
                            </CustomListItem>

                            <Divider />
                            <CustomListItem text="Premium">
                                <PaidIcon />
                            </CustomListItem>
                        </List>
                    </div>
                    <div>
                        <Divider />
                        <CustomListItem text="Sign Out">
                                <LogoutIcon />
                        </CustomListItem>
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
