import React from 'react';
import { Grid } from '@mui/material';

import Title from '../Title';

//Styles
import './style.css'

const FeatureGrid = ({title, items}) => {
    return(
        <>
          <Grid container className="domestic-features-container" spacing={2} >
                <Grid item xs={12} className="domestic-features-grid">
                    <Title title={title} />
                </Grid>
                {
                    items.map((item, index) => (
                         <Grid 
                         key={index} item xs={12} lg={4} md={4} sm={4} 
                         className="domestic-features-grid-images" 
                         sx={{
                            transition: '0.3s',
                            '&:hover': {
                              transform: 'scale(1.03)',
                              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                            },
                         }}
                         >
                            <div className="domestic-features-images-text" data-aos="zoom-in" data-aos-duration="500">
                                <div className="domestic-features-bg-round"></div>
                                <div className="domestic-features">
                                    <img src={item.image} alt="round" className="domestic-features-round" />
                                    <h5 className="domestic-features-h5">{item.text}</h5>
                                </div>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>

        </>

    )
}
export default FeatureGrid;