const fs = require('fs');
const { getMunicipalities, getRegions, getDepartments } = require('./formaters');
const { evolStructPopParser, diplomesFormationParser, baseCcFilosofiParser } = require('./parsers');
const { getEvolStructPopData, getDiplomesFormationData, getBaseCcFilosofiData } = require('./xlsx-readers');

console.log('START READ EXCEL FILES');

const evolStructPop = getEvolStructPopData();
const diplomesFormation = getDiplomesFormationData();
const baseCcFilosofiData = getBaseCcFilosofiData();

console.log('READ EXCEL FILES DONE');
console.log('START PARSING DATA');

const { comEvolStructPopFormatted, regEvolStructPopFormatted } = evolStructPopParser(evolStructPop);
const { comDiplomesFormationFormatted, regDiplomesFormationFormatted } = diplomesFormationParser(diplomesFormation);
const { comBaseCcFilosofi, depBaseCcFilosofi, regBaseCcFilosofi } = baseCcFilosofiParser(baseCcFilosofiData);

console.log('regEvolStructPopFormatted', regEvolStructPopFormatted);

console.log('PARSING DATA DONE');
console.log('START FORMATTING DATA');

const municipalities = getMunicipalities(
  comEvolStructPopFormatted,
  regEvolStructPopFormatted,
  comDiplomesFormationFormatted,
  regDiplomesFormationFormatted,
  comBaseCcFilosofi,
);
const regions = getRegions(regEvolStructPopFormatted, regDiplomesFormationFormatted, regBaseCcFilosofi);
const departments = getDepartments();

console.log('FORMATTING DATA DONE');
console.log('START WRITING JSON');

for (let i = 0; i < Math.ceil(municipalities.length / 5000); i++) {
  const data = JSON.stringify(municipalities.slice(i * 5000, (i + 1) * 5000 - 1));
  fs.writeFileSync(`./seeders/datas/municipalities-${i}.json`, data);
}

const regionData = JSON.stringify(regions);
fs.writeFileSync(`./seeders/datas/regions.json`, regionData);

const departmentData = JSON.stringify(departments);
fs.writeFileSync(`./seeders/datas/departments.json`, departmentData);

console.log('WRITING JSON DONE');
