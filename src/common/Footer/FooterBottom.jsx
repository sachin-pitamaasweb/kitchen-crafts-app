import React from 'react';
import { Grid, Typography } from '@mui/material';
import './FooterBottom.css';
const FooterBottom = () => {
  return (
    <>
      <footer className="footer-bottom">
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="body2" className='footer-bottom-left-text'>
              ©2024-25 MRMC Foods. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className='footer-bottom-right-text'>
              Designed & developed by: <a href="https://www.pitamaas.com/" target="_blank" rel="noopener noreferrer" className='company-link'>Pitamaas</a>
            </Typography>
          </Grid>
        </Grid>
      </footer>
     
    </>
  );
};

export default FooterBottom;
