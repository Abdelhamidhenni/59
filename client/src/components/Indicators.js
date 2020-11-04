import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import EcoOutlinedIcon from "@material-ui/icons/EcoOutlined";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  depositContext: {
    flex: 1
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(5, 0, 4)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700]
  },
  cardScore: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

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
const indicatorsDetails = [
  {
    title: "Accès à l'information",
    score: "0",
    description: [
      "Identifier des territoires mal couverts par une offre de service d'information ou des populations qui auront des difficultés à comprendre l'information."
    ]
  },
  {
    title: "Score global Accès",
    subheader: "Accès",
    score: "15",
    description: [
      "Identifier des territoires mal couverts par les réseaux ou dans lesquels des populations auront des difficultés financières à y accéder"
    ]
  },
  {
    title: "Accès aux interfaces",
    score: "0",
    description: [
      "Identifier des territoires mal couverts par les réseaux ou dans lesquels des populations auront des difficultés financières à y accéder"
    ]
  },
  {
    title: "Capacité d'usage des interfaces numériques",
    score: "30",
    description: [
      "Identifier des populations parmi lesquelles s'observe une fréquence d'illectronisme ou difficulté à utiliser internet."
    ]
  },
  {
    title: "Score global Compétences",
    subheader: "Compétences / Capacité",
    score: "15",
    description: [
      "Identifier des territoires mal couverts par les réseaux ou dans lesquels des populations auront des difficultés financières à y accéder"
    ]
  },
  {
    title: "Compétences administratives",
    score: "30",
    description: [
      "Identifier des populations parmi lesquelles s'observent des difficultés à accomplir des procédures administratives."
    ]
  }
];

export default function Indicators() {
  const classes = useStyles();

  return (
    <React.Fragment>
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
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Design4Green
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Géolocaliser les zones d'exclusion numérique de votre territoire -
          avec l'indice de fragilité numérique - fait par la Team 59
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
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
        <Grid container spacing={5} alignItems="flex-end">
          {indicatorsDetails.map(indicator => (
            <Grid item key={indicator.title} xs={12} sm={12} md={4}>
              <Card>
                <CardHeader
                  title={indicator.title}
                  subheader={indicator.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{ align: "center" }}
                  action={
                    (indicator.title === "Score global Compétences" ||
                      indicator.title === "Score global Accès") && (
                      <EcoOutlinedIcon />
                    )
                  }
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardScore}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {indicator.score}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      %
                    </Typography>
                  </div>
                  <ul>
                    {indicator.description.map(line => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
