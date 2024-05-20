import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// MUI
import {
    AppBar,
    Box,
    CssBaseline,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import MobileView from './MobileView';

import './style.css';

// Define the navigation data
const navData = [
    { path: '/', label: 'Home' },
    { path: '/commercial', label: 'Commercial Range' },
    { path: '/domestic', label: 'Domestic Range' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
];

const Header = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate('/');
    };

    return (
        <>
            {matches ? (
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar component="nav" className='app-bar'>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='app-bar-inner'>
                            <div className='inner-div'>
                                <div className='logo-div' onClick={handleLogoClick}>
                                    <img
                                        src={require('../../assets/logo/logo.png')}
                                        alt='logo'
                                        className='logo'
                                    />
                                </div>
                                <div className='text-div'>
                                    <nav>
                                        <ul className='nav-links'>
                                            {navData.map((navItem, index) => (
                                                <li key={index} className='nav-item'>
                                                    <Link to={navItem.path} className='active' onClick={handleClick}>
                                                        {navItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Box>
                    </AppBar>
                </Box>
            ) : (
                <MobileView />
            )}
        </>
    );
};

export default Header;
