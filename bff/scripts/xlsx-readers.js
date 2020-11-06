const XLSX = require('xlsx');

const getEvolStructPopData = () => {
  const workbook = XLSX.readFile('./scripts/base-ic-evol-struct-pop-2016.xls');
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

const getDiplomesFormationData = () => {
  const workbook = XLSX.readFile('./scripts/base-ic-diplomes-formation-2016.xls');
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

const getBaseCcFilosofiData = () => {
  const workbook = XLSX.readFile('./scripts/base-cc-filosofi-2016.xls');
  const comSheetNamePoverty = workbook.SheetNames[0];
  const depSheetNamePoverty = workbook.SheetNames[1];
  const regSheetNamePoverty = workbook.SheetNames[2];
  // const natSheetNamePoverty = workbook.SheetNames[3];
  const worksheetComPoverty = workbook.Sheets[comSheetNamePoverty];
  const worksheetDepPoverty = workbook.Sheets[depSheetNamePoverty];
  const worksheetRegPoverty = workbook.Sheets[regSheetNamePoverty];
  // const worksheetNatPoverty = workbookPoverty.Sheets[natSheetNamePoverty];
  return {
    com: XLSX.utils.sheet_to_json(worksheetComPoverty),
    dep: XLSX.utils.sheet_to_json(worksheetDepPoverty),
    reg: XLSX.utils.sheet_to_json(worksheetRegPoverty),
  };
};

const getMetropoleSitesData = () => {
  const workbook = XLSX.readFile('./scripts/2020-t2-metropole-sites.xls');
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

const getCouvCommuneData = () => {
  const workbook = XLSX.readFile('./scripts/2020T2_communes.xlsx');
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

const getMenageData = () => {
  const workbook = XLSX.readFile('./scripts/base-ic-couples-familles-menages-2016.xls');
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

const getServicePubData = () => {
  const workbook = XLSX.readFile('./scripts/organismes.xls');
  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];
  return XLSX.utils.sheet_to_json(worksheet);
};

exports.getEvolStructPopData = getEvolStructPopData;
exports.getDiplomesFormationData = getDiplomesFormationData;
exports.getBaseCcFilosofiData = getBaseCcFilosofiData;
exports.getMetropoleSitesData = getMetropoleSitesData;
exports.getCouvCommuneData = getCouvCommuneData;
exports.getMenageData = getMenageData;
exports.getServicePubData = getServicePubData;
