trigger countbuildingproject on Building_Project__c (after insert, after update, after delete)
{
    Map<Id, List<Building_Project__c>> AcctBuildList = new Map<Id, List<Building_Project__c>>();
    Set<Id> AcctIds = new Set<Id>();    
    List<Account> AcctList = new List<Account>();
    List<Building_Project__c> BuildList = new List<Building_Project__c>();

if(trigger.isInsert || trigger.isUPdate) {
        for(Building_Project__c Bp : trigger.New) {
            if(String.isNotBlank(Bp.Account__c)){
                AcctIds.add(Bp.Account__c);  
            }   
        }  
     }
 if(trigger.isDelete || trigger.isUPdate) {
        for(Building_Project__c Bp : trigger.Old) {
            AcctIds.add(Bp.Account__c);     
        }  
    }
     if(AcctIds.size() > 0){
        BuildList = [SELECT Id, Account__c FROM Building_Project__c WHERE Account__c IN : AcctIds];
        
        for(Building_Project__c Bp : BuildList) {
            if(!AcctBuildList.containsKey(Bp.Account__c)){
           AcctBuildList.put(Bp.Account__c, new List<Building_Project__c>());
            }          
            AcctBuildList.get(Bp.Account__c).add(Bp);      
        }                           
        
     System.debug('Account Id and Building Projects List Map is ' + AcctBuildList);
            
        AcctList = [SELECT number_of_projects_del__c FROM Account WHERE Id IN : AcctIds];
           for(Account Acc : AcctList) {
            List<Building_Project__c> BuildList = new List<Building_Project__c>();
            BuildList = AcctBuildList.get(Acc.Id);
            Acc.number_of_projects_del__c= BuildList.size();
        }    
        
        System.debug('Account List is ' + AcctList);
        update AcctList;    
    }
  }