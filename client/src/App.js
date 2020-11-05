import "./App.css";
import React from "react";
import Container from "@material-ui/core/Container";
import AppHeader from "./components/AppHeader";
import IndicatorsGlobal from "./components/IndicatorsGlobal";
import IndicatorsCard from "./components/IndicatorsCard";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  }
}));
function App() {
  const classes = useStyles();
  const municipalities = [
    { id: 1, name: "Ville1", population: "20000" },
    { id: 2, name: "Ville2", population: "50000" },
    { id: 3, name: "Ville3", population: "10000" }
  ];

  const [citySelected, setCity] = React.useState(municipalities[0]);

  const handleCityChange = event => {
    event.preventDefault();
    setCity(event.target.value);
  };

  return (
    <div className="App">
      <AppHeader />
      <Container maxWidth="md" component="main">
        <FormControl className={classes.formControl}>
          <InputLabel id="city-label">City</InputLabel>
          <Select
            labelId="city-label"
            id="city-label-select"
            value={citySelected.name}
            onChange={handleCityChange}
          >
            {municipalities.map(city => (
              <MenuItem key={city.name} value={city}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IndicatorsGlobal city={citySelected} globalScore={80} />
        <IndicatorsCard />
      </Container>
    </div>
  );
}

export default App;
