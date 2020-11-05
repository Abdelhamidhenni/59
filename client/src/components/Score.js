import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardScore: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  score: {
    display: "block",
    fontSize: "2em",
    fontWeight: "bold"
  }
}));

export default function Score({ type, municipalityScore }) {
  const classes = useStyles();

  const getScoreAccordingToType = () => {
    return municipalityScore[type];
  };
  const score = getScoreAccordingToType();
  return (
    <div className={classes.cardScore}>
      <section className={classes.score}>{score}</section>
    </div>
  );
}
