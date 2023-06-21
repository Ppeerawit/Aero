function doGet() {
  return HtmlService.createTemplateFromFile('home').evaluate();
}
function processForm(formObject){  
  var result = "";
  if(formObject.searchtext){
      result = search(formObject.searchtext);
  }
  return result;
}

function search(searchtext){
  var spreadsheetId = '1mRQXTT8rfmLd5gPiMKr0emoQkbAIIlSVQk3pxVaJPcU';
  var dataRage  = 'unit 1!B2:D';
  var data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRage).values;
  var ar = [];
  
  data.forEach(function(f) {
    if (~f.indexOf(searchtext)) {
      ar.push(f);
    }
  });
  return ar;
}