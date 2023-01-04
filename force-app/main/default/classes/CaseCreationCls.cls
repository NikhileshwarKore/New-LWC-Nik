@RestResource(urlMapping='/CaseManagement/v1/*')
global with sharing class CaseCreationCls {
    @HttpPost
    global static void createCase(){
        RestRequest request  = RestContext.request;
        String jsonBody  = request.requestBody.toString();
        RestResponse response = RestContext.response;
         CaseJsonParser parserObj  = (CaseJsonParser) System.JSON.deserialize (jsonBody, CaseJsonParser.class);
            if(parserObj != null && parserObj.caseDetails != null) {
                Contact contObj = new Contact();
                contObj.FirstName = parserObj.customerDetails.firstName;
                contObj.LastName = parserObj.customerDetails.lastName;
                contObj.email = parserObj.customerDetails.email;
                insert contObj;             
                Case caseObj = new Case();
                caseObj.Origin = parserObj.caseDetails.origin;
                caseObj.Status = 'New';
                caseObj.ContactId = contObj.id;
                insert caseObj;
            }
    }
}