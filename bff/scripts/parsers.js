const formatEvolStructPop = (element) => ({
  population: Math.round(element.P16_POP),
  senior: Math.round(element.P16_POP65P),
  unemployed: Math.round(element.C16_POP15P_CS8),
  young: Math.round(element.P16_H1529 + element.P16_F1529),
  departmentId: element.DEP,
  zipCode: element.COM,
  name: element.LIBCOM,
});

const formatDiplomesFormation = (element) => ({
  noDiploma: Math.round(element.P16_NSCOL15P_DIPLMIN),
  zipCode: element.COM,
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

const evolStructPopParser = (evolStructPopData) =>
  evolStructPopData.reduce((acc, datum) => {
    const evolStructPop = formatEvolStructPop(datum);
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

const diplomesFormationParser = (dimplomesFormationData) =>
  dimplomesFormationData.reduce((acc, datum) => {
    const diplomesFormation = formatDiplomesFormation(datum);
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
