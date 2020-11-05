import "./App.css";
import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import AppHeader from "./components/AppHeader";
import IndicatorsGlobal from "./components/IndicatorsGlobal";
import IndicatorsCard from "./components/IndicatorsCard";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetchMunicipalities, fetchMunicipalityScore } from "./axios.service";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  }
}));
function App() {
  const classes = useStyles();

  const [citySelected, setCity] = React.useState({
    id: 1,
    name: "L'Abergement-Clémenciat",
    zipCode: "01001",
    population: 767
  });

  const [municipalities, setMunicipalities] = React.useState([]);
  const [municipalityScore, setMunicipalityScore] = React.useState({
    competence: {
      administrative: 53,
      numerique: 91,
      global: 72
    }
  });

  const handleCityChange = async event => {
    event.preventDefault();
    setCity(event.target.value);
    const municipalityScore = await fetchMunicipalityScore(
      event.target.value.id
    );
    setMunicipalityScore(municipalityScore);
  };

  useEffect(async () => {
    const municipalities = await fetchMunicipalities();
    setMunicipalities(municipalities);
  }, []);

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
        <IndicatorsGlobal
          city={citySelected}
          population={citySelected.population}
          globalScore={80}
        />
        <IndicatorsCard municipalityScore={municipalityScore} />
      </Container>
    </div>
  );
}

export default App;
