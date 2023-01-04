public class countprojects {
        public static void countBuildingproject(List<Building_project__c> newList){
             Set<id> accountIds= new Set<id>();
            for(Building_project__c B:newList){
                if(B.account__c!=null){
                    accountIds.add(B.account__c);
                }
            list<Account> newaccount= [select id,number_of_projects_del__c,(select id from Building_Project__r) from Account where id In:accountIds];
                for(Account acc:newaccount){
                    acc.number_of_projects_del__c=acc.Building_Project__r.size();
                }
            update newaccount;
             }
        }
             public static void DeleteBuildingproject1(List<Building_Project__c> OldList){
            Set<id> accountIds= new Set<id>();
            for(Building_project__c B:OldList){
                if(B.account__c!=null){
                    accountIds.add(B.account__c);
                }
            }
            list<Account> newaccount= [select id,number_of_projects_del__c , (select id from Building_Project__r) from Account where id In:accountIds];
                for(Account acc:newaccount){
                    acc.number_of_projects_del__c=acc.Building_Project__r.size();
                }
            update newaccount;
        }
    }