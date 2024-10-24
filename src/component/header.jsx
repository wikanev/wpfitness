import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Avatar} from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="open drawer">
                    <FitnessCenterIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    Fitness Center
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
