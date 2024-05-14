import React from 'react';
import { Grid, Box } from '@mui/material';

import Title from '../Title';

import './style.css'; 

const BestSellersGridMobileView = ({ title, items }) => {
  const gridBackgroundStyle = {
    background: 'linear-gradient(to right, #E67940 0%, #FE5656 50%, #D4642A 100%)',
    padding: '16px',
  };

  const itemStyle = {
    backgroundColor: '#fff',
    border: '2px dashed black', // Changed borderStyle here
    padding: '16px',
    textAlign: 'center',
    borderRadius: '50%',
    width: '221px',
    height: '221px',
  };

  const buttonStyle = {
    width: '95px',
    height: '30px',
    borderRadius: '30px',
    fontSize: '12px',
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #E67940',
    cursor: 'pointer',
    marginTop: '16px',
  };

  const renderItems = (title, index, item) => {
    if (title === 'Domestic Best Seller') {
      return (
        <img
          src={item.image}
          alt={item.alt}
          style={{ width: title === 'Domestic Best Seller' && index === 1 ? '74%' : '100%' }}
        />
      )
    } else if (title === 'Commercial Best Seller') {
      return (
        <img
          src={item.image}
          alt={item.alt}
          style={{ width: title === 'Commercial Best Seller' && index === 2 ? '100%' : '74%' }}
        />
      )
    } else {
      return null;
    }

  }

  return (
    <>
      <Title title={title} />

      <div className='best-seller-bg-top'>
        <img
          src={require('../../assets/BestSellersGrid/best-2.png')}
          alt="Stove"
          className='images-mobile-view-top'
        />
      </div>

      <div style={gridBackgroundStyle}>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid
              item xs={12}
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px',
                marginTop: '20px'
              }}
              sx={{
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }
              }}
              className='grid-item-mobile-view'
               
            >
              <Box style={itemStyle} data-aos="zoom-in" data-aos-duration="500">
                {renderItems(title, index, item)}
                <button style={buttonStyle}>
                  {item.buttonText}
                </button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>

      <div className='best-seller-bg'>
        <img
          src={require('../../assets/BestSellersGrid/best-2.png')}
          alt="Stove"
          className='images-mobile-view'
        />
      </div>
    </>
  );
};

export default BestSellersGridMobileView;
