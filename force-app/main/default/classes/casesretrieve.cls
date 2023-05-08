public with sharing class casesretrieve {
    @AuraEnabled(cacheable=true)
    public static List<AccountContactWrapper> allAccountsWithContactAndCases() {
        List<Account> accounts = [SELECT Id, Name, Phone,
            (SELECT Id, Name, Phone, Email FROM Contacts)
         FROM Account LIMIT 7];
        
        List<AccountContactWrapper> wrappers = new List<AccountContactWrapper>();
        
        // Create wrapper objects for each Contact and Case
        for (Account acc : accounts) {
            for (Contact con : acc.Contacts) {
                List<Case> cases = [SELECT Id, Subject, Description
                                    FROM Case WHERE ContactId = :con.Id];
                AccountContactWrapper wrapper = new AccountContactWrapper(acc, con, cases);
                wrappers.add(wrapper);
            }
        }
        
        return wrappers;
    }
    
    public class AccountContactWrapper {
        @AuraEnabled
        public Account account;
        @AuraEnabled
        public Contact contact;
        @AuraEnabled
        public List<Case> cases;
        
        public AccountContactWrapper(Account acc, Contact con, List<Case> cas) {
            account = acc;
            contact = con;
            cases = cas;
        }
    }
}
