const fs = require('fs');
const { getMunicipalities, getRegions } = require('./formaters');
const { evolStructPopParser, diplomesFormationParser, baseCcFilosofiParser } = require('./parsers');
const { getEvolStructPopData, getDiplomesFormationData, getBaseCcFilosofiData } = require('./xlsx-readers');

console.log('START READ EXCEL FILES');

const evolStructPop = getEvolStructPopData();
const diplomesFormation = getDiplomesFormationData();
const baseCcFilosofiData = getBaseCcFilosofiData();

console.log('READ EXCEL FILES DONE');
console.log('START PARSING DATA');

const evolStructPopFormatted = evolStructPopParser(evolStructPop);
const diplomesFormationFormatted = diplomesFormationParser(diplomesFormation);
const { comBaseCcFilosofi, depBaseCcFilosofi, regBaseCcFilosofi } = baseCcFilosofiParser(baseCcFilosofiData);

console.log('PARSING DATA DONE');
console.log('START FORMATTING DATA');

const municipalities = getMunicipalities(evolStructPopFormatted, diplomesFormationFormatted, comBaseCcFilosofi);
const regions = getRegions(regBaseCcFilosofi);

console.log('FORMATTING DATA DONE');
console.log('START WRITING JSON');

for (let i = 0; i < Math.ceil(municipalities.length / 5000); i++) {
  const data = JSON.stringify(municipalities.slice(i * 5000, (i + 1) * 5000 - 1));
  fs.writeFileSync(`./seeders/datas/municipalities-${i}.json`, data);
}

const regionData = JSON.stringify(regions);
fs.writeFileSync(`./seeders/datas/regions.json`, regionData);

console.log('WRITING JSON DONE');
