import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardScore: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  }
}));

const competences = {
  administrative: 10,
  numerique: 50,
  administrativeDepartment: 5,
  numeriqueDepartment: 5,
  administrativeRegion: 5,
  numeriqueRegion: 5
};

export default function Score({ type }) {
  const classes = useStyles();
  const getScoreAccordingToType = () => {
    return competences[type];
  };
  const score = getScoreAccordingToType();
  return (
    <div className={classes.cardScore}>
      <Typography component="h2" variant="h3" color="textPrimary">
        {score}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        %
      </Typography>
    </div>
  );
}
