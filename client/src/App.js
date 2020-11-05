import "./App.css";
import React from "react";
import Container from "@material-ui/core/Container";
import AppHeader from "./components/AppHeader";
import IndicatorsGlobal from "./components/IndicatorsGlobal";
import IndicatorsCard from "./components/IndicatorsCard";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Downshift from "downshift";
import {
  fetchMunicipalitiesByName,
  fetchMunicipalityScore
} from "./axios.service";

const useStyles = makeStyles(theme => ({
  formControl: {
    width: "100%",
    margin: "auto"
  }
}));
function App() {
  const classes = useStyles();

  const [citySelected, setCity] = React.useState({
    id: 1,
    name: "L'Abergement-Clémenciat",
    zipCode: "01001",
    population: 767,
    department: {
      id: "01",
      name: "Ain",
      regionId: "84",
      region: {
        id: "84",
        name: "AUVERGNE-RHONE-ALPES"
      }
    }
  });

  const [municipalities, setMunicipalities] = React.useState([]);
  const [municipalityScore, setMunicipalityScore] = React.useState({
    administrativeCompetence: 53,
    numericCompetence: 91,
    globalCompetence: 72
  });
  const searchMunicipalities = async event => {
    if (!event.target.value || event.target.value.length < 3) {
      return;
    }
    const municipalities = await fetchMunicipalitiesByName(event.target.value);
    setMunicipalities(municipalities);
  };

  const handleCityChange = async value => {
    setCity(value);
    const municipalityScore = await fetchMunicipalityScore(value.id);
    setMunicipalityScore(municipalityScore);
  };

  return (
    <div className="App">
      <AppHeader />
      <Container maxWidth="md" component="main">
        <FormControl className={classes.formControl}>
          <Downshift
            onChange={handleCityChange}
            itemToString={item => (item ? item.name : "")}
          >
            {({
              selectedItem,
              getInputProps,
              getItemProps,
              highlightedIndex,
              isOpen,
              inputValue,
              getLabelProps
            }) => (
              <div>
                <label style={{ display: "block" }} {...getLabelProps()}>
                  Recherchez une ville
                </label>{" "}
                <br />
                <input
                  style={{ width: "50%", marginBottom: "1rem" }}
                  {...getInputProps({
                    placeholder: "Rechercher une ville",
                    onChange: searchMunicipalities
                  })}
                />
                {isOpen ? (
                  <div
                    style={{
                      width: "50%",
                      marginBottom: "1rem",
                      margin: "auto"
                    }}
                  >
                    {municipalities
                      .filter(
                        item =>
                          !inputValue ||
                          item.name
                            .toLowerCase()
                            .includes(inputValue.toLowerCase())
                      )
                      .map((item, index) => (
                        <div
                          {...getItemProps({ key: index, index, item })}
                          style={{
                            backgroundColor:
                              highlightedIndex === index
                                ? "lightgray"
                                : "white",
                            fontWeight:
                              selectedItem === item ? "bold" : "normal"
                          }}
                        >
                          {item.name}
                        </div>
                      ))}
                  </div>
                ) : null}
              </div>
            )}
          </Downshift>
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
