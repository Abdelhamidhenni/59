import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

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
        <h2>L' indice de fragilité est {globalScore}</h2>
        <p>
          La ville {name} - {zipCode} à une population de {population}{" "}
          habitants.
        </p>
        <p>
          Son département est {departmentName} et sa region est {regionName}.
        </p>
      </Grid>
    </Grid>
  );
}
