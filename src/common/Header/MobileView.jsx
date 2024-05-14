import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemText } from '@mui/material';

// Styles
import './MobileView.css';

const navData = [
    { path: '/', label: 'Home' },
    { path: '/commercial', label: 'Commercial Range' },
    { path: '/domestic', label: 'Domestic Range' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
];

const MobileView = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: 'auto', height: '50px' }} className='app-bar-mobile'>
                <div className='mobile-view'>
                    <div className='menu-icon' onClick={toggleMobileMenu}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                <Box sx={{ flexGrow: 1 }} />
                <div className='logo-div-mobile'>
                    <img src={require('../../assets/logo/logo.png')} alt='logo' className='logo-mobile' />
                </div>
            </AppBar>

            <Drawer
                anchor="top"
                open={isMobileMenuOpen}
                onClose={toggleMobileMenu}
                className='drawer-mobile'
            >
                <List className="drawer-content">
                    {navData.map((link, index) => (
                        <ListItem button component={Link} to={link.path} onClick={toggleMobileMenu} key={index}>
                            <ListItemText primary={link.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default MobileView;
