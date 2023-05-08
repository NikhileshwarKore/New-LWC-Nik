public with sharing class AcctController {
    public class ContactWithCases {
        @AuraEnabled public Contact contact;
        @AuraEnabled public List<Case> cases;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<ContactWithCases> getContactsAndCases() {
        List<ContactWithCases> contactsAndCases = new List<ContactWithCases>();
        
        List<Contact> contacts = [
            SELECT Id, Name, Account.Name
            FROM Contact
            WHERE AccountId != null
        ];
        
        for(Contact con : contacts) {
            ContactWithCases contactWithCases = new ContactWithCases();
            contactWithCases.contact = con;
            
            List<Case> cases = [
                SELECT Id, Subject
                FROM Case
                WHERE ContactId = :con.Id
            ];
            
            contactWithCases.cases = cases;
            contactsAndCases.add(contactWithCases);
        }
        
        return contactsAndCases;
    }
}
