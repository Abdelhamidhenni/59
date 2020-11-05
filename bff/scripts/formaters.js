const regionList = [
  { id: '01', name: 'GUADELOUPE' },
  { id: '02', name: 'MARTINIQUE' },
  { id: '03', name: 'GUYANE' },
  { id: '04', name: 'LA REUNION' },
  { id: '06', name: 'MAYOTTE' },
  { id: '11', name: 'ILE DE FRANCE' },
  { id: '24', name: 'CENTRE VAL DE LOIRE' },
  { id: '27', name: 'BOURGOGNE FRANCHE COMTE' },
  { id: '28', name: 'NORMANDIE' },
  { id: '32', name: 'HAUTS DE FRANCE' },
  { id: '44', name: 'GRAND EST' },
  { id: '52', name: 'PAYS DE LA LOIRE' },
  { id: '53', name: 'BRETAGNE' },
  { id: '75', name: 'NOUVELLE AQUITAINE' },
  { id: '76', name: 'OCCITANIE' },
  { id: '84', name: 'AUVERGNE RHONE ALPES' },
  { id: '93', name: 'PROVENCE ALPES COTE D AZUR' },
  { id: '94', name: 'CORSE' },
];

const departmentList = [
  { id: '01', name: 'Ain', regionId: '84' },
  { id: '02', name: 'Aisne', regionId: '32' },
  { id: '03', name: 'Allier', regionId: '84' },
  { id: '04', name: 'Alpes-de-Haute-Provence', regionId: '93' },
  { id: '05', name: 'Hautes-Alpes', regionId: '93' },
  { id: '06', name: 'Alpes-Maritimes', regionId: '93' },
  { id: '07', name: 'Ardèche', regionId: '84' },
  { id: '08', name: 'Ardennes', regionId: '44' },
  { id: '09', name: 'Ariège', regionId: '76' },
  { id: '10', name: 'Aube', regionId: '44' },
  { id: '11', name: 'Aude', regionId: '76' },
  { id: '12', name: 'Aveyron', regionId: '76' },
  { id: '13', name: 'Bouches-du-Rhône', regionId: '93' },
  { id: '14', name: 'Calvados', regionId: '28' },
  { id: '15', name: 'Cantal', regionId: '84' },
  { id: '16', name: 'Charente', regionId: '75' },
  { id: '17', name: 'Charente-Maritime', regionId: '75' },
  { id: '18', name: 'Cher', regionId: '24' },
  { id: '19', name: 'Corrèze', regionId: '75' },
  { id: '2A', name: 'Corse-du-Sud', regionId: '94' },
  { id: '2B', name: 'Haute-Corse', regionId: '94' },
  { id: '21', name: "Côte-d'Or", regionId: '27' },
  { id: '22', name: "Côtes d'Armor", regionId: '53' },
  { id: '23', name: 'Creuse', regionId: '75' },
  { id: '24', name: 'Dordogne', regionId: '75' },
  { id: '25', name: 'Doubs', regionId: '27' },
  { id: '26', name: 'Drôme', regionId: '84' },
  { id: '27', name: 'Eure', regionId: '28' },
  { id: '28', name: 'Eure-et-Loir', regionId: '24' },
  { id: '29', name: 'Finistère', regionId: '53' },
  { id: '30', name: 'Gard', regionId: '76' },
  { id: '31', name: 'Haute-Garonne', regionId: '76' },
  { id: '32', name: 'Gers', regionId: '76' },
  { id: '33', name: 'Gironde', regionId: '75' },
  { id: '34', name: 'Hérault', regionId: '76' },
  { id: '35', name: 'Ille-et-Vilaine', regionId: '53' },
  { id: '36', name: 'Indre', regionId: '24' },
  { id: '37', name: 'Indre-et-Loire', regionId: '24' },
  { id: '38', name: 'Isère', regionId: '84' },
  { id: '39', name: 'Jura', regionId: '27' },
  { id: '40', name: 'Landes', regionId: '75' },
  { id: '41', name: 'Loir-et-Cher', regionId: '24' },
  { id: '42', name: 'Loire', regionId: '84' },
  { id: '43', name: 'Haute-Loire', regionId: '84' },
  { id: '44', name: 'Loire-Atlantique', regionId: '52' },
  { id: '45', name: 'Loiret', regionId: '24' },
  { id: '46', name: 'Lot', regionId: '76' },
  { id: '47', name: 'Lot-et-Garonne', regionId: '75' },
  { id: '48', name: 'Lozère', regionId: '76' },
  { id: '49', name: 'Maine-et-Loire', regionId: '52' },
  { id: '50', name: 'Manche', regionId: '28' },
  { id: '51', name: 'Marne', regionId: '44' },
  { id: '52', name: 'Haute-Marne', regionId: '44' },
  { id: '53', name: 'Mayenne', regionId: '52' },
  { id: '54', name: 'Meurthe-et-Moselle', regionId: '44' },
  { id: '55', name: 'Meuse', regionId: '44' },
  { id: '56', name: 'Morbihan', regionId: '53' },
  { id: '57', name: 'Moselle', regionId: '44' },
  { id: '58', name: 'Nièvre', regionId: '27' },
  { id: '59', name: 'Nord', regionId: '32' },
  { id: '60', name: 'Oise', regionId: '32' },
  { id: '61', name: 'Orne', regionId: '28' },
  { id: '62', name: 'Pas-de-Calais', regionId: '32' },
  { id: '63', name: 'Puy-de-Dôme', regionId: '84' },
  { id: '64', name: 'Pyrénées-Atlantiques', regionId: '75' },
  { id: '65', name: 'Hautes-Pyrénées', regionId: '76' },
  { id: '66', name: 'Pyrénées-Orientales', regionId: '76' },
  { id: '67', name: 'Bas-Rhin', regionId: '44' },
  { id: '68', name: 'Haut-Rhin', regionId: '44' },
  { id: '69', name: 'Rhône', regionId: '84' },
  { id: '70', name: 'Haute-Saône', regionId: '27' },
  { id: '71', name: 'Saône-et-Loire', regionId: '27' },
  { id: '72', name: 'Sarthe', regionId: '52' },
  { id: '73', name: 'Savoie', regionId: '84' },
  { id: '74', name: 'Haute-Savoie', regionId: '84' },
  { id: '75', name: 'Paris', regionId: '11' },
  { id: '76', name: 'Seine-Maritime', regionId: '28' },
  { id: '77', name: 'Seine-et-Marne', regionId: '11' },
  { id: '78', name: 'Yvelines', regionId: '11' },
  { id: '79', name: 'Deux-Sèvres', regionId: '75' },
  { id: '80', name: 'Somme', regionId: '32' },
  { id: '81', name: 'Tarn', regionId: '76' },
  { id: '82', name: 'Tarn-et-Garonne', regionId: '76' },
  { id: '83', name: 'Var', regionId: '93' },
  { id: '84', name: 'Vaucluse', regionId: '93' },
  { id: '85', name: 'Vendée', regionId: '52' },
  { id: '86', name: 'Vienne', regionId: '75' },
  { id: '87', name: 'Haute-Vienne', regionId: '75' },
  { id: '88', name: 'Vosges', regionId: '44' },
  { id: '89', name: 'Yonne', regionId: '27' },
  { id: '90', name: 'Territoire-de-Belfort', regionId: '27' },
  { id: '91', name: 'Essonne', regionId: '11' },
  { id: '92', name: 'Hauts-de-Seine', regionId: '11' },
  { id: '93', name: 'Seine-Saint-Denis', regionId: '11' },
  { id: '94', name: 'Val-de-Marne', regionId: '11' },
  { id: '95', name: "Val-D'Oise", regionId: '11' },
  { id: '971', name: 'Guadeloupe', regionId: '01' },
  { id: '972', name: 'Martinique', regionId: '02' },
  { id: '973', name: 'Guyane', regionId: '03' },
  { id: '974', name: 'La Réunion', regionId: '04' },
  { id: '976', name: 'Mayotte', regionId: '06' },
];

const getScores = (esp, df, cbcf, ms, cc, regEsp, regDf, regBcf, regMs, regCc) => {
  const thresholdUnemployed = regEsp.unemployed / regEsp.population;
  const thresholdYoung = regEsp.young / regEsp.population;
  const thresholdSenior = regEsp.senior / regEsp.population;
  const thresholdNoDiploma = regDf.noDiploma / regEsp.population;

  const partUnemployed = esp.unemployed / esp.population;
  const partYoung = esp.young / esp.population;
  const partSenion = esp.senior / esp.population;
  const partNoDiploma = df.noDiploma / esp.population;

  const poverty = cbcf && regBcf ? ((cbcf.poverty - regBcf.poverty) / regBcf.poverty + 1) * 100 : 0;
  const livingStandard =
    cbcf && regBcf ? ((cbcf.livingStandard - regBcf.livingStandard) / regBcf.livingStandard + 1) * 100 : 0;
  const twogCover = ms && regMs ? ((1 - ms.twogCover) / regMs.twogCover) * 100 : 0;
  const hdCover = cc && regCc ? ((1 - cc.couv) / regMs.couv) * 100 : 0;

  const interfaceAccess = Math.round((poverty + livingStandard + twogCover + hdCover) / 4);

  const administrativeCompetence = Math.round(
    (((partUnemployed - thresholdUnemployed) / thresholdUnemployed + 1) * 100 +
      ((partYoung - thresholdYoung) / thresholdYoung + 1) * 100) /
      2,
  );

  const numericCompetence = Math.round(
    (((partNoDiploma - thresholdNoDiploma) / thresholdNoDiploma + 1) * 100 +
      ((partSenion - thresholdSenior) / thresholdSenior + 1) * 100) /
      2,
  );

  return {
    interfaceAccess,
    administrativeCompetence,
    numericCompetence,
    globalCompetence: Math.round((administrativeCompetence + numericCompetence) / 2),
  };
};

const getMunicipalities = (
  comEvolStructPopFormatted,
  regEvolStructPopFormatted,
  comDiplomesFormationFormatted,
  regDiplomesFormationFormatted,
  comBaseCcFilosofi,
  regBaseCcFilosofi,
  comMetropoleSites,
  regMetropoleSites,
  comCouvCommune,
  regCouvCommune,
) =>
  comEvolStructPopFormatted.map((esp) => {
    const region = regionList.find(({ id }) => id === esp.regionId);
    const df = comDiplomesFormationFormatted.find(({ zipCode }) => zipCode === esp.zipCode);
    const cbcf = comBaseCcFilosofi.find(({ zipCode }) => zipCode === esp.zipCode);
    const ms = comMetropoleSites.find(({ zipCode }) => zipCode === esp.zipCode);
    const cc = comCouvCommune.find(({ zipCode }) => zipCode === esp.zipCode);
    const regEsp = regEvolStructPopFormatted.find(({ id }) => id === esp.regionId);
    const regDf = regDiplomesFormationFormatted.find(({ id }) => id === esp.regionId);
    const regBcf = regBaseCcFilosofi.find(({ id }) => id === esp.regionId);
    const regMs = regMetropoleSites.find(({ regionName }) => regionName === region.name);
    const regCc = regCouvCommune.find(({ id }) => id === esp.regionId);
    const score = getScores(esp, df, cbcf, ms, cc, regEsp, regDf, regBcf, regMs, regCc);
    return {
      ...score,
      departmentId: esp.departmentId,
      population: esp.population,
      zipCode: esp.zipCode,
      name: esp.name,
    };
  });

const getRegions = (regEvolStructPopFormatted, regDiplomesFormationFormatted, regBaseCcFilosofi) =>
  regionList.map((region) => {
    const esp = regEvolStructPopFormatted.find(({ id }) => id === region.id);
    const df = regDiplomesFormationFormatted.find(({ id }) => id === region.id);
    const rbcf = regBaseCcFilosofi.find(({ id }) => id === region.id);
    return {
      ...region,
      ...df,
      ...esp,
      ...rbcf,
    };
  });

const getDepartments = () => departmentList;

exports.getMunicipalities = getMunicipalities;
exports.getRegions = getRegions;
exports.getDepartments = getDepartments;
