
function getCompaniesByIndustry(industry) {
  var sheet = SpreadsheetApp.openById('1AFFt9ECx9irQA7SpU2-RYaRyfNl0CeLZ942BWvA9LtA').getSheetByName('Sheet1');
  var data = sheet.getDataRange().getValues();
  var companies = [];

  for (let i = 1; i < data.length; i++) {
    if (data[i][5] === industry) {
      companies.push({
        name: data[i][0],
        description: data[i][1],
        contact: data[i][2],
        website: data[i][3],
        logo: data[i][4]
      });
    }
  }

  return companies;
}

