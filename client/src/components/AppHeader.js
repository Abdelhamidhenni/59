import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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
    flexGrow: 1
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
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Team 59
          </Typography>
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
        <Typography
          variant="h5"
          align="center"
          color="textPrimary"
          component="p"
        >
          Géolocaliser les zones d'exclusion numérique de votre territoire avec
          l'indice de fragilité numérique
        </Typography>
      </Container>
    </>
  );
}
