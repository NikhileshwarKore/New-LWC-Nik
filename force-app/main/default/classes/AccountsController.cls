public with sharing class AccountsController {
    @AuraEnabled(cacheable=true)
    public static List<Object> getAccounts() {
        List<Account> accounts = [SELECT Id, Name, (SELECT Id, FirstName, LastName, Email FROM Contacts), (SELECT Id, Subject, Description FROM Cases) FROM Account LIMIT 55] ;

        List<Object> treeGridData = new List<Object>();
        for(Account account : accounts) {
            Map<String, Object> accountMap = new Map<String, Object>();
            accountMap.put('Id', account.Id);
            accountMap.put('Name', account.Name);
            
            List<Object> contactList = new List<Object>();
            for(Contact contact : account.Contacts) {
                Map<String, Object> contactMap = new Map<String, Object>();
                contactMap.put('Id', contact.Id);
                contactMap.put('Name', contact.FirstName + ' ' + contact.LastName);
                contactList.add(contactMap);
            }
            accountMap.put('Contacts', contactList);
            
            List<Object> caseList = new List<Object>();
            for(Case caseRecord : account.Cases) {
                Map<String, Object> caseMap = new Map<String, Object>();
                caseMap.put('Id', caseRecord.Id);
                caseMap.put('Subject', caseRecord.Subject);
                caseMap.put('Description', caseRecord.Description);
                caseList.add(caseMap);
            }
            accountMap.put('Cases', caseList);
            
            treeGridData.add(accountMap);
        }
        
        return treeGridData;
    }
}
