import * as React from 'react';
import { Link } from 'react-router-dom';
//MUI
import {
    AppBar,
    Box,
    CssBaseline,
    useMediaQuery,
    useTheme,
    Menu,
    MenuItem,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import MobileView from './MobileView';

import './style.css';

// Define the navigation data
const navData = [
    { path: '/', label: 'Home' },
    {
        label: 'Products',
        isDropdown: true,
        menuItems: [
            { path: '/products/domestic', label: 'Domestic Range' },
            { path: '/products/commercial', label: 'Commercial Range' },
        ],
    },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' },
];

const Header = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    // State to control the dropdown menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            {matches ? (
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar component="nav" className='app-bar'>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='app-bar-inner'>
                            <div className='inner-div'>
                                <div className='logo-div'>
                                    <img
                                        src={require('../../assets/logo/logo.png')}
                                        alt='logo'
                                        className='logo'
                                        loading="lazy"
                                    />
                                </div>
                                <div className='text-div'>
                                    <nav>
                                        <ul className='nav-links'>
                                            {navData.map((navItem, index) => (
                                                <li key={index}>
                                                    {navItem.isDropdown ? (
                                                        <>
                                                            <span
                                                                onClick={handleMenuClick}
                                                                aria-controls={open ? 'dropdown-menu' : undefined}
                                                                aria-haspopup="true"
                                                                aria-expanded={open ? 'true' : undefined}
                                                                className="active"
                                                                style={{ cursor: 'pointer' }}
                                                            >
                                                                {navItem.label} <ArrowDropDownIcon />
                                                            </span>

                                                            <Menu
                                                                id="dropdown-menu"
                                                                anchorEl={anchorEl}
                                                                open={open}
                                                                onClose={handleMenuClose}
                                                                MenuListProps={{
                                                                    'aria-labelledby': 'basic-button',
                                                                }}
                                                            // className='dropdown-menu-class'
                                                            >
                                                                {navItem.menuItems.map((menuItem, menuIndex) => (
                                                                    <MenuItem key={menuIndex} onClick={handleMenuClose}>
                                                                        <Link to={menuItem.path} className='active-menu'>
                                                                            {menuItem.label}
                                                                        </Link>
                                                                    </MenuItem>
                                                                ))}
                                                            </Menu>
                                                        </>
                                                    ) : (
                                                        <Link to={navItem.path} className='active' key={index} onClick={handleClick}>
                                                            {navItem.label}
                                                        </Link>
                                                    )}
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

