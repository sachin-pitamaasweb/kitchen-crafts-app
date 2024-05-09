import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// MUI
import { AppBar, Box, CssBaseline, Drawer, Collapse, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// Helper
import { navLinks } from '../../helpers';

// Styles
import './MobileView.css';

const MobileView = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isProductsOpen, setProductsOpen] = useState(false); // State to track the dropdown status

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            // Reset the dropdown state when opening the menu
            setProductsOpen(false);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const toggleProductsDropdown = () => {
        setProductsOpen(!isProductsOpen);
    };

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: 'auto', height: '50px' }} className='app-bar-mobile'>
                <div className='mobile-view'>
                    <div
                        className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}
                        onClick={toggleMobileMenu}
                    >
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
                    {navLinks.map((link, index) => (
                        <React.Fragment key={index}>
                            {link.name === "Products" ? (
                                <>
                                    <ListItem button onClick={toggleProductsDropdown}>
                                        <ListItemText primary={link.name} />
                                        <IconButton edge="end" style={{ color: '#fff' }}>
                                            {isProductsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                        </IconButton>
                                    </ListItem>
                                    <Collapse in={isProductsOpen} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItem button component={Link} to="/products/domestic" onClick={toggleMobileMenu}>
                                                <ListItemText primary="Domestic Products" />
                                            </ListItem>
                                            <Divider sx={{ backgroundColor: '#fff' }} />
                                            <ListItem button component={Link} to="/products/commercial" onClick={toggleMobileMenu}>
                                                <ListItemText primary="Commercial Products" />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                </>
                            ) : (
                                <>
                                    <ListItem button component={Link} to={link.to} onClick={toggleMobileMenu}>
                                        <ListItemText primary={link.name} />
                                    </ListItem>
                                </>

                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default MobileView;
