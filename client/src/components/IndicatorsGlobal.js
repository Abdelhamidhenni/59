import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function IndicatorsGlobal({ city, population, globalScore }) {
  const {
    name,
    zipCode,
    department: {
      name: departmentName,
      region: { name: regionName }
    }
  } = city;
  return (
    <Grid container spacing={10} alignItems="center">
      <Grid item xs={12} sm={12} md={12}>
        <Typography component="h5" variant="h5" color="textPrimary">
          L' indice de fragilité est {globalScore}
        </Typography>
        <Typography component="p" variant="p" color="textPrimary">
          La ville {name} - {zipCode} à une population de {population}{" "}
          habitants.
        </Typography>
        <Typography component="p" variant="p" color="textPrimary">
          Son département est {departmentName} et sa region est {regionName}.
        </Typography>
      </Grid>
    </Grid>
  );
}
