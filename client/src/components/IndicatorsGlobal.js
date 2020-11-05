import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function IndicatorsGlobal({ city, population, globalScore }) {
  return (
    <Grid container spacing={10} alignItems="center">
      <Grid item xs={12} sm={12} md={12}>
        <Typography component="h4" variant="h6" color="textPrimary">
          La ville {city.name} - {city.zipCode} à une population de {population}{" "}
          habitants.
        </Typography>
        <Typography component="h4" variant="h6" color="textPrimary">
          Son indice de fragilité est {globalScore}
        </Typography>
        <Typography component="h4" variant="h6" color="textPrimary">
          Son département est {city.department.name} et sa region est{" "}
          {city.department.region.name}
        </Typography>
      </Grid>
    </Grid>
  );
}
