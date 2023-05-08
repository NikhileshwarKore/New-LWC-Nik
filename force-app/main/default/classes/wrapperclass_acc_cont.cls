public with sharing class wrapperclass_acc_cont {
    @AuraEnabled(cacheable=true)
    public static List<AccountWrapper> getAccountWithContact(){
        List<AccountWrapper> wrapList = new List<AccountWrapper>();
        List<Account> accList = [ SELECT Id,Name,
                                        (SELECT Id,FirstName, LastName FROM Contacts)
                                    FROM Account LIMIT 5];
        if(!accList.isEmpty()){
            for(Account acc : accList){
                wrapList.add(new AccountWrapper(acc, acc.Contacts));
            }
        }
        return wrapList;
    } 
    public class AccountWrapper{
        @AuraEnabled public Account accRecord{get;set;}
        @AuraEnabled public List<Contact> contactList{get;set;}
        public AccountWrapper(Account accRecord, List<Contact> contactList){
            this.accRecord = accRecord;
            this.contactList = contactList;
        }
    }
}