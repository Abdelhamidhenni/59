import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
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
  }
}));

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

export default function IndicatorsCard() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" component="main">
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
  );
}
