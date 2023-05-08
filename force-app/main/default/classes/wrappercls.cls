    public with sharing class wrappercls {
  
        @AuraEnabled(cacheable=true)
        public static List<AccountContactWrapperClass> fetchAccountContactDetails(){       
            List<AccountContactWrapperClass> Wrapper = new List<AccountContactWrapperClass>();
            for(Account acc : [SELECT Id, Name,  (SELECT Id, Name FROM Contacts LIMIT 1) FROM Account WHERE Name != null LIMIT 25]){
                String contactName = acc.Contacts.isEmpty() ? null : acc.Contacts[0].Name;
                Wrapper.add(new AccountContactWrapperClass(acc, contactName));
            }
            return Wrapper;
        }
        
        public class AccountContactWrapperClass{
            @AuraEnabled
            public Account acc;
            @AuraEnabled
            public String contactName;
            @AuraEnabled
            public String billingAdress;
    
            
            @AuraEnabled
            public String AccountName;
            @AuraEnabled
            public String AccountLink;  

            public AccountContactWrapperClass(Account acc, String contactName){
                this.acc = acc;
                this.contactName = contactName;
                this.AccountName = acc.Name;
                this.billingAdress = acc.BillingStreet + ',' + acc.BillingCity + ',' + acc.BillingCountry ;
            }
        }
    }
    