import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1,
    flexWrap: "wrap",
    color: "inherit"
  },
  h: {
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.87)"
  },
  heroContent: {
    padding: theme.spacing(5, 0, 4)
  }
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <h1 className={classes.toolbarTitle}>Team 59</h1>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="/files/report-team-59.pdf"
              target="_blank"
            >
              Télécharger la présentation du résultat
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <h1 className={classes.h}>
          Géolocaliser les zones d'exclusion numérique de votre territoire avec
          l'indice de fragilité numérique
        </h1>
      </Container>
    </>
  );
}
