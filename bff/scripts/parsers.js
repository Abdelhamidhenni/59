const formatComEvolStructPop = (element) => ({
  population: Math.round(element.P16_POP),
  senior: Math.round(element.P16_POP65P),
  unemployed: Math.round(element.C16_POP15P_CS8),
  young: Math.round(element.P16_H1529 + element.P16_F1529),
  departmentId: element.DEP,
  regionId: element.REG,
  zipCode: element.COM,
  name: element.LIBCOM,
});

const formatRegEvolStructPop = (element) => ({
  population: Math.round(element.P16_POP),
  senior: Math.round(element.P16_POP65P),
  unemployed: Math.round(element.C16_POP15P_CS8),
  young: Math.round(element.P16_H1529 + element.P16_F1529),
  id: element.REG,
});

const formatComDiplomesFormation = (element) => ({
  noDiploma: Math.round(element.P16_NSCOL15P_DIPLMIN),
  zipCode: element.COM,
});

const formatRegDiplomesFormation = (element) => ({
  noDiploma: Math.round(element.P16_NSCOL15P_DIPLMIN),
  id: element.REG,
});

const formatComBaseCcFilosofi = (iri) => ({
  poverty: iri.TP6016 || 0,
  livingStandard: iri.MED16 || 0,
  zipCode: iri.CODGEO,
});

const formatRegBaseCcFilosofi = (iri) => ({
  poverty: iri.TP6016 || 0,
  livingStandard: iri.MED16 || 0,
  id: iri.CODGEO,
});

const evolStructPopParser = (evolStructPopData) => {
  const comEvolStructPopFormatted = evolStructPopData.reduce((acc, datum) => {
    const evolStructPop = formatComEvolStructPop(datum);
    const index = acc.findIndex((el) => el.zipCode === evolStructPop.zipCode);
    if (index >= 0) {
      const value = acc[index];
      acc[index] = {
        ...value,
        population: value.population + evolStructPop.population,
        senior: value.senior + evolStructPop.senior,
        unemployed: value.unemployed + evolStructPop.unemployed,
        young: value.young + evolStructPop.young,
      };
    } else {
      acc.push(evolStructPop);
    }
    return acc;
  }, []);

  const regEvolStructPopFormatted = evolStructPopData.reduce((acc, datum) => {
    const evolStructPop = formatRegEvolStructPop(datum);
    const index = acc.findIndex((el) => el.id === evolStructPop.id);
    if (index >= 0) {
      const value = acc[index];
      acc[index] = {
        ...value,
        population: value.population + evolStructPop.population,
        senior: value.senior + evolStructPop.senior,
        unemployed: value.unemployed + evolStructPop.unemployed,
        young: value.young + evolStructPop.young,
      };
    } else {
      acc.push(evolStructPop);
    }
    return acc;
  }, []);

  return { comEvolStructPopFormatted, regEvolStructPopFormatted };
};

const diplomesFormationParser = (diplomesFormationData) => {
  const comDiplomesFormationFormatted = diplomesFormationData.reduce((acc, datum) => {
    const diplomesFormation = formatComDiplomesFormation(datum);
    const index = acc.findIndex((el) => el.zipCode === diplomesFormation.zipCode);
    if (index >= 0) {
      const value = acc[index];
      acc[index] = {
        ...value,
        noDiploma: value.noDiploma + diplomesFormation.noDiploma,
      };
    } else {
      acc.push(diplomesFormation);
    }
    return acc;
  }, []);

  const regDiplomesFormationFormatted = diplomesFormationData.reduce((acc, datum) => {
    const diplomesFormation = formatRegDiplomesFormation(datum);
    const index = acc.findIndex((el) => el.id === diplomesFormation.id);
    if (index >= 0) {
      const value = acc[index];
      acc[index] = {
        ...value,
        noDiploma: value.noDiploma + diplomesFormation.noDiploma,
      };
    } else {
      acc.push(diplomesFormation);
    }
    return acc;
  }, []);

  return { comDiplomesFormationFormatted, regDiplomesFormationFormatted };
};

const baseCcFilosofiParser = ({ com, dep, reg }) => {
  return {
    comBaseCcFilosofi: com.map((el) => formatComBaseCcFilosofi(el)),
    depBaseCcFilosofi: dep.map((el) => formatRegBaseCcFilosofi(el)),
    regBaseCcFilosofi: reg.map((el) => formatRegBaseCcFilosofi(el)),
  };
};

exports.evolStructPopParser = evolStructPopParser;
exports.diplomesFormationParser = diplomesFormationParser;
exports.baseCcFilosofiParser = baseCcFilosofiParser;
