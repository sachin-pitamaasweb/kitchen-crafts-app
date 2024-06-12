import React from 'react';
import { Grid, Card, CardContent } from '@mui/material';

const ExploreButton = ({ handleNavigateDomestic }) => {

    return (
        <>
            <Grid item xs={12} sm={12} md={5} lg={5} className="commercial-products-Grid" >
                <Card className="commercial-products-card">
                    <CardContent className="commercial-products-card-content-explore">
                        <div className="commercial-products-card-content-div"  >
                            <h4 className="commercial-products-card-h4">Explore <br />Domestic Range</h4>
                            <img
                                src={require("../../assets/Products/CommercialRange/arrow.png")}
                                alt="arrow"
                                className="commercial-products-arrow"
                                onClick={handleNavigateDomestic}
                            />
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
export default ExploreButton;