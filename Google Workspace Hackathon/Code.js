function doGet(e) {
  var page = e ? e.parameter.page : 'welcome';

  switch (page) {
    case 'register':
      return HtmlService.createTemplateFromFile('Register').evaluate().setTitle('Register');
    case 'login':
      return HtmlService.createTemplateFromFile('Login').evaluate().setTitle('Log In');
    case 'homepage':
      return HtmlService.createTemplateFromFile('Homepage').evaluate().setTitle('Homepage');
    case 'poster':
      return HtmlService.createTemplateFromFile('PosterPage').evaluate().setTitle('Generate Poster');
    case 'collaboration':
      return HtmlService.createTemplateFromFile('CollaborationPage').evaluate().setTitle('Collaboration');
    default:
      return HtmlService.createTemplateFromFile('Welcome').evaluate().setTitle('Capybara Management');
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function registerUser(data) {
  var sheet = SpreadsheetApp.openById('1vvTGXoeojOYMpKfj9i9jmASyY_0_nT1ZSaAkP0zZC6Q').getSheetByName('Registrations');
  var rows = sheet.getDataRange().getValues();
  
  for (var i = 1; i < rows.length; i++) {
    if (rows[i][0] === data.businessId) {
      return 'Business ID already exists. Please choose another one.';
    }
  }
  
  sheet.appendRow([
    data.businessId, 
    data.password, 
    data.businessName, 
    data.businessEmail, 
    data.businessIndustry, 
    data.service1, 
    data.service2, 
    data.service3
  ]);
  
  return 'Registration Successful';
}

function checkLogin(data) {
  var sheet = SpreadsheetApp.openById('1vvTGXoeojOYMpKfj9i9jmASyY_0_nT1ZSaAkP0zZC6Q').getSheetByName('Registrations');
  var rows = sheet.getDataRange().getValues();
  
  // Log the incoming login data for debugging
  Logger.log('Checking login for Business ID: ' + data.businessId + ', Password: ' + data.password);
  
  for (var i = 1; i < rows.length; i++) {
    var storedId = rows[i][0];
    var storedPassword = rows[i][1];
    
    // Log the stored values for debugging
    Logger.log('Stored ID: ' + storedId + ', Stored Password: ' + storedPassword);
    
    if (storedId === data.businessId && storedPassword === data.password) {
      return 'Login Successful';
    }
  }
  
  return 'Invalid Credentials';
}

function getHomepageHtml() {
  return HtmlService.createTemplateFromFile('Homepage').evaluate().getContent();
}
