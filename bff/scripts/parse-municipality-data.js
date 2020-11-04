const XLSX = require('xlsx');
const fs = require('fs');

const formatMunicipality = (iri) => ({
  population: iri.P16_POP,
  senior: iri.P16_POP65P,
  unemployed: iri.C16_POP15P_CS8,
  young: iri.P16_H1529 + iri.P16_F1529,
  regionId: iri.REG,
  departmentId: iri.DEP,
  zipCode: iri.COM,
  name: iri.LIBCOM,
});

console.log('START PARSING');

const workbook = XLSX.readFile('./scripts/base-ic-evol-struct-pop-2016.xls');
// const workbook = XLSX.readFile('./scripts/test.xls');

const first_sheet_name = workbook.SheetNames[0];
const worksheet = workbook.Sheets[first_sheet_name];
const iris = XLSX.utils.sheet_to_json(worksheet);
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

console.log('PARSING DONE');
console.log('START WRITING JSON');

const data = JSON.stringify(municipalities);
fs.writeFileSync('./scripts/municipalities.json', data);

console.log('WRITING JSON DONE');
