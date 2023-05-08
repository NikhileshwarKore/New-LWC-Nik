
public with sharing class CaseController {
    
    @AuraEnabled(cacheable = true)
    public static String getGridList(){
        Map<Id,List<Contact>> accContactMap = new Map<Id,List<Contact>>();
        Map<Id,List<Case>> conCaseMap = new Map<Id,List<Case>>();
        Set<Id> conIds = new Set<Id>();
        Map<Id,Account> accounts =  new Map<Id, Account>([SELECT Id,Name,Phone, (SELECT Id,Name,Email FROM Contacts) FROM Account]);
        List<Contact> cons = [SELECT Id,Name,AccountId,Email FROM Contact WHERE AccountId IN:accounts.keySet()];
        for(Contact con : cons ){
            conIds.add(con.Id);
        }
        List<Case> cases = [SELECT Id,CaseNumber,ContactId FROM Case WHERE ContactId IN:conIds];
        for(Case cas : cases ){
            if(conCaseMap.containsKey(cas.ContactId)){
                List<Case> tempList = conCaseMap.get(cas.ContactId);
                tempList.add(cas);
                conCaseMap.put(cas.ContactId, tempList);
            } else {
                List<Case> templist= new List<Case> ();
                templist.add(cas);
                conCaseMap.put(cas.ContactId , templist);
            }
        }
      
        WrapperClass wrapperList = new WrapperClass();
        wrapperList.accounts = accounts.values();
        wrapperList.contactCasesMap = conCaseMap;

        return JSON.serialize(wrapperList);
    }

    public class WrapperClass {
        List<Account> accounts {get; set;}
        Map<Id,List<Case>> contactCasesMap {get; set;}
   }
}