import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function IndicatorsGlobal({ city, population, globalScore }) {
  return (
    <Grid container spacing={10} alignItems="center">
      <Grid item xs={12} sm={4} md={4}>
        <Typography component="h2" variant="h6" color="textPrimary">
          Ville - Code postal
        </Typography>
        <Typography component="p" variant="h4" color="textSecondary">
          {city.name}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Typography component="h2" variant="h6" color="textPrimary">
          Population
        </Typography>
        <Typography component="p" variant="h4" color="textSecondary">
          {population}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
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
