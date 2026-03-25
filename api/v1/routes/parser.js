const fs = require('fs');
const path = require('path');
const { parse } = require('xml2js');

function parseXmlFile(filePath) {
  const parser = new parse();
  const data = fs.readFileSync(filePath, 'utf8');
  return parser.parseString(data, (err, result) => {
    if (err) {
      throw err;
    }
    return result;
  });
}

module.exports = parseXmlFile;