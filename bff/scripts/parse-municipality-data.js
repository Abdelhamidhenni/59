const XLSX = require('xlsx');
const fs = require('fs');

const formatMunicipality = (iri) => ({
  population: Math.round(iri.P16_POP),
  senior: Math.round(iri.P16_POP65P),
  unemployed: Math.round(iri.C16_POP15P_CS8),
  young: Math.round(iri.P16_H1529 + iri.P16_F1529),
  departmentId: iri.DEP,
  zipCode: iri.COM,
  name: iri.LIBCOM,
});

const formatFormation = (iri) => ({
  noDiploma: Math.round(iri.P16_NSCOL15P_DIPLMIN),
  zipCode: iri.COM,
});

console.log('START PARSING');

const workbook = XLSX.readFile('./scripts/base-ic-evol-struct-pop-2016.xls');
// const workbook = XLSX.readFile('./scripts/nit.xls');
const firstSheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[firstSheetName];
const iris = XLSX.utils.sheet_to_json(worksheet);

const workbookFormation = XLSX.readFile('./scripts/base-ic-diplomes-formation-2016.xls');
// const workbook = XLSX.readFile('./scripts/nit.xls');
const firstSheetNameFormation = workbookFormation.SheetNames[0];
const worksheetFormation = workbookFormation.Sheets[firstSheetNameFormation];
const irisFormation = XLSX.utils.sheet_to_json(worksheetFormation);

const municipalities = iris.reduce((acc, iri) => {
  const municipality = formatMunicipality(iri);
  const index = acc.findIndex((el) => el.zipCode === municipality.zipCode);
  if (index >= 0) {
    const value = acc[index];
    acc[index] = {
      ...value,
      population: value.population + municipality.population,
      senior: value.senior + municipality.senior,
      unemployed: value.unemployed + municipality.unemployed,
      young: value.young + municipality.young,
    };
  } else {
    acc.push(municipality);
  }
  return acc;
}, []);

const formations = irisFormation.reduce((acc, iri) => {
  const formation = formatFormation(iri);
  const index = acc.findIndex((el) => el.zipCode === formation.zipCode);
  if (index >= 0) {
    const value = acc[index];
    acc[index] = {
      ...value,
      noDiploma: value.noDiploma + formation.noDiploma,
    };
  } else {
    acc.push(formation);
  }
  return acc;
}, []);

const allData = municipalities.map((municipality) => {
  const formation = formations.find(({ zipCode }) => zipCode === municipality.zipCode);
  return {
    ...municipality,
    ...formation,
  };
});

console.log('PARSING DONE');
console.log('START WRITING JSON');

for (let i = 0; i < Math.ceil(allData.length / 5000); i++) {
  const hu = allData.slice(i * 5000, (i + 1) * 5000 - 1);
  const data = JSON.stringify(hu);
  fs.writeFileSync(`./seeders/datas/municipalities-${i}.json`, data);
}

console.log('WRITING JSON DONE');
