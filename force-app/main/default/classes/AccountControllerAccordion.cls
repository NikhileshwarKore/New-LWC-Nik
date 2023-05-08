public with sharing class AccountControllerAccordion {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsWithContactsAndCases() {
        return [SELECT Id, Name, (SELECT Id, Name FROM Contacts), (SELECT Id, Subject,CaseNumber FROM Cases) FROM Account  LIMIT 12];

    }
        
    @AuraEnabled(cacheable=true)
    public static List<Case> getCaseList(Id contactId) {
        List<Case> caseList = new List<Case>();
        
        // Query cases related to the contact
        caseList = [SELECT Id, CaseNumber, ContactId, Priority, Status FROM Case WHERE ContactId = :contactId];
        
        return caseList;
    }




}