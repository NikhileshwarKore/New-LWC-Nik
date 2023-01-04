public class countprojectshandler {
    public static void  insertupdate  (List<Building_Project__c> BuildList) {
        Set<Id> AcctIds = new Set<Id>();    
            for(Building_Project__c Bp : BuildList) {               
            if(String.isNotBlank(Bp.Account__c)){
                AcctIds.add(Bp.Account__c);  
            }   
        } 
        list <account>  AcctList = [SELECT number_of_projects_del__c FROM Account WHERE Id IN : AcctIds];
          for(Account Acc : AcctList) {
            Acc.number_of_projects_del__c= BuildList.size();
        }    
        update Acctlist ;       
    }
}