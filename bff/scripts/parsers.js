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

const formatComBaseCcFilosofi = (element) => ({
  poverty: element.TP6016 / 100 || 0,
  livingStandard: element.MED16 || 0,
  zipCode: element.CODGEO,
});

const formatRegBaseCcFilosofi = (element) => ({
  poverty: element.TP6016 / 100 || 0,
  livingStandard: element.MED16 || 0,
  id: element.CODGEO,
});

const formatComMetropoleSites = (element) => ({
  twogCover: element.site_2g,
  zipCode: element.insee_com.length === 5 ? element.insee_com : `0${element.insee_com}`,
  regionName: element.nom_reg,
});

const formatComCommuneCouv = (element) => ({
  zipCode: element.COM,
  regionId: element.REG,
  couv: element.couv / 100,
});

const formatComMenage = (element) => ({
  menages: Math.round(element.C16_MEN),
  alone: Math.round(element.C16_MENPSEUL),
  mono: Math.round(element.C16_PMEN_MENFAMMONO),
  departmentId: element.DEP,
  regionId: element.REG,
  zipCode: element.COM,
});

const formatRegMenage = (element) => ({
  menages: Math.round(element.C16_MEN),
  alone: Math.round(element.C16_MENPSEUL),
  mono: Math.round(element.C16_PMEN_MENFAMMONO),
  id: element.REG,
});

const couvCommuneParser = (couvCommuneData) => {
  const comCouvCommune = couvCommuneData.map((el) => formatComCommuneCouv(el));

  const regCouvCommuneTotal = comCouvCommune.reduce((acc, datum) => {
    const index = acc.findIndex((el) => el.regionId === datum.regionId);
    if (index >= 0) {
      const value = acc[index];
      acc[index] = {
        ...value,
        couv: value.couv + datum.couv,
      };
    } else {
      acc.push({ regionId: datum.regionId, couv: datum.couv });
    }
    return acc;
  }, []);

  const regCouvCommune = regCouvCommuneTotal.map(({ regionId, couv }) => {
    const citiesCount = comCouvCommune.filter(({ regionId: id }) => id === regionId).length;
    return {
      regionId,
      couv: couv / citiesCount,
    };
  });

  return { comCouvCommune, regCouvCommune };
};

const menageParser = (menageData) => {
  const comMenageFormatted = menageData.reduce((acc, datum) => {
    const comMenage = formatComMenage(datum);
    const index = acc.findIndex((el) => el.zipCode === comMenage.zipCode);
    if (index >= 0) {
      const value = acc[index];
      acc[index] = {
        ...value,
        menages: value.menages + comMenage.menages,
        alone: value.alone + comMenage.alone,
        mono: value.mono + comMenage.mono,
      };
    } else {
      acc.push(comMenage);
    }
    return acc;
  }, []);

  const regMenageFormatted = menageData.reduce((acc, datum) => {
    const regMenage = formatRegMenage(datum);
    const index = acc.findIndex((el) => el.id === regMenage.id);
    if (index >= 0) {
      const value = acc[index];
      acc[index] = {
        ...value,
        menages: value.menages + regMenage.menages,
        alone: value.alone + regMenage.alone,
        mono: value.mono + regMenage.mono,
      };
    } else {
      acc.push(regMenage);
    }
    return acc;
  }, []);

  return { comMenageFormatted, regMenageFormatted };
};

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

const metropoleSitesParser = (metropoleSitesData) => {
  const comMetropoleSites = metropoleSitesData.reduce((acc, datum) => {
    const metropoleSite = formatComMetropoleSites(datum);
    const index = acc.findIndex((el) => el.zipCode === metropoleSite.zipCode);
    if (index >= 0) {
      const value = acc[index];
      acc[index] = {
        ...value,
        twogCover: Math.max(value.twogCover, metropoleSite.twogCover),
      };
    } else {
      acc.push(metropoleSite);
    }
    return acc;
  }, []);

  const regMetropoleSiteNumbers = comMetropoleSites.reduce((acc, datum) => {
    const index = acc.findIndex((el) => el.regionName === datum.regionName);
    if (index >= 0) {
      const value = acc[index];
      acc[index] = {
        ...value,
        sitesWith2g: value.sitesWith2g + datum.twogCover,
      };
    } else {
      acc.push({ regionName: datum.regionName, sitesWith2g: 1 });
    }
    return acc;
  }, []);

  const regMetropoleSites = regMetropoleSiteNumbers.map(({ regionName, sitesWith2g }) => {
    const citiesCount = comMetropoleSites.filter(({ regionName: rn }) => rn === regionName).length;
    return {
      regionName,
      twogCover: sitesWith2g / citiesCount,
    };
  });

  return {
    comMetropoleSites,
    regMetropoleSites,
  };
};

exports.evolStructPopParser = evolStructPopParser;
exports.diplomesFormationParser = diplomesFormationParser;
exports.baseCcFilosofiParser = baseCcFilosofiParser;
exports.metropoleSitesParser = metropoleSitesParser;
exports.couvCommuneParser = couvCommuneParser;
exports.menageParser = menageParser;
