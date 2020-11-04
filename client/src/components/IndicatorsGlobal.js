import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const indicatorsGlobal = [
  {
    title: "Ville - Code postal",
    score: "94350"
  },
  {
    title: "Population",
    score: "50 000"
  },
  {
    title: "Score global",
    score: "80"
  }
];

export default function IndicatorsGlobal() {
  return (
    <Grid container spacing={10} alignItems="center">
      {indicatorsGlobal.map(indicator => (
        <Grid key={indicator.title} item xs={12} sm={4} md={4}>
          <Typography component="h2" variant="h6" color="textPrimary">
            {indicator.title}
          </Typography>
          <Typography component="p" variant="h4" color="textSecondary">
            {indicator.score}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
