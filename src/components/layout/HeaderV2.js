import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import FooterSocial from '../layout/partials/FooterSocial';
import { useLocation } from 'react-router-dom';

const headersData = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Calendar",
        href: "/calendar",
    },
    {
        label: "Trainer",
        href: "/KnowYourTrainer",
    },
    {
        label: "Testimonials",
        href: "/Testimonial",
    }
];

const headersDataMobile = [
    {
        label: "Home",
        href: "/",
        target: "_self"
    },
    {
        label: "Calendar",
        href: "/calendar",
        target: "_self"
    },
    {
        label: "Trainer",
        href: "/KnowYourTrainer",
        target: "_self"
    },
    {
        label: "Testimonials",
        href: "/Testimonial",
        target: "_self"
    },
    {
        label:"Blog",
        href : "https://thevikasagarwal.github.io/Portfolio/#/",
        target : "_blank"
    }
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#6163ff",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
        position: 'fixed',
        zIndex: 1,
        boxShadow: "1px 3px 3px 3px #6163ff"
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600,
        size: "18px",
        marginLeft: "18px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        flex: 1,
        backgroundColor: "#6163ff",
        padding: "20px 30px",
    },
}));

export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();
    const location = useLocation();
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const [copied, setCopied] = useState(false);

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 24,
                    paddingRight: 24,
                    backgroundColor: '#fff',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5
                }}>
                <div style={{color: '#6163ff', display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>

                    <div style={{ color: '#6163ff', verticalAlign: 'center' }}>
                        vikas@booyah.training
                    </div>

                    <i class="fa fa-solid fa-grip-lines-vertical" style={{marginLeft:15}}>                      
                    </i>
                    <a href="https://thevikasagarwal.github.io/Portfolio/#/" target="_blank" style={{color:'#ffffff', transition:'fill 0.15s ease', marginLeft:15, backgroundColor:'#6163ff', borderRadius:5, paddingLeft:5, paddingRight:5}} title="Blog">
                    <i class="fa fa-duotone fa-blog"style={{color:'#ffffff'}}></i>
                    {" "}Blog
          </a>
                </div>
                    <FooterSocial showPhoneNumber={true} style={{}} />
                </div>
                <Toolbar className={toolbar}>
                    {femmecubatorLogo}
                    <div>{getMenuButtons()}</div>
                </Toolbar>
            </>

        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div>{femmecubatorLogo}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersDataMobile.map(({ label, href, target }) => {
            const bgColor = location.pathname == href ? {   
                backgroundColor: '#fff', 
                color: '#6163ff', 
                borderRadius: 10,
            } : {}
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: {  pathname: href },
                        color: "inherit",
                        style: { textDecoration: "none" },
                        key: label,
                        target: target
                    }}
                >
                    <MenuItem style={bgColor}>{label}</MenuItem>
                </Link>
            );
        });
    };

    const femmecubatorLogo = (
            <Typography variant="h6" component="h1" className={logo}>
                BooYah Training 
            </Typography>

    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            const bgColor = location.pathname == href ? {backgroundColor: '#fff', color: '#6163ff'} : {}
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton,
                    }}
                    style={bgColor}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <header>
            <AppBar className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}
