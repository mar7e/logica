function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;
  var email = data.email;
 
  // Obtém todos os emails existentes na planilha
  var emails = sheet.getRange('B:B').getValues();
 
  // Verifica se o email já está na planilha
  for (var i = 0; i < emails.length; i++) {
    if (emails[i][0] === email) {
      return ContentService.createTextOutput(JSON.stringify({"result":"error", "message":"O Email já registrado"}))
                           .setMimeType(ContentService.MimeType.JSON);
    }
  }
 
  // Adiciona o novo registro se o email não estiver na planilha
  sheet.appendRow([data.name, data.email, data.telefone]);
 
  return ContentService.createTextOutput(JSON.stringify({"result":"success"}))
                       .setMimeType(ContentService.MimeType.JSON);
}