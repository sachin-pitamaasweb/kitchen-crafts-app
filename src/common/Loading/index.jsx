import React from 'react';
import { CircularProgress, Typography, Box, useTheme, useMediaQuery } from '@mui/material';

const Loading = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh" // Full viewport height for centering
      bgcolor={theme.palette.background.default} // Match the background color
    >
      <CircularProgress size={isMobile ? 40 : 60} /> {/* Responsive size */}
      <Typography variant={isMobile ? 'body2' : 'h6'} mt={2}>
        Loading, please wait...
      </Typography>
    </Box>
  );
};

export default Loading;
