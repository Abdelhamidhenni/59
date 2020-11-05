import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function IndicatorsGlobal({ city, population, globalScore }) {
  return (
    <Grid container spacing={10} alignItems="center">
      <Grid item xs={12} sm={6} md={6}>
        <Typography component="h2" variant="h6" color="textPrimary">
          {city.name} - {city.zipCode}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
        <Typography component="h2" variant="h6" color="textPrimary">
          Population
        </Typography>
        <Typography component="p" variant="h4" color="textSecondary">
          {population}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
        <Typography component="h2" variant="h6" color="textPrimary">
          Score global
        </Typography>
        <Typography component="p" variant="h4" color="textSecondary">
          {globalScore}
        </Typography>
      </Grid>
    </Grid>
  );
}
