public class  projecthandler {
    public static void counthandler (List<Building_Project__c> newList, List<Building_Project__c> oldList)
    {
        set<id> Accountids=new set<id>();
        if(newList!=null)
        {
        for(Building_Project__c b: newList)
        {
            if(b.account__c!=null)
            {
                Accountids.add(b.account__c);
            }
        }
        }
        if(oldList!=null)
        {
            for(Building_Project__c bp:oldList)
        {
            if(bp.account__c!=null)
            {
               Accountids.add(bp.account__c);
            }
    }
        }
List<account> finalaccount =[SELECT id,number_of_projects_del__c,(SELECT id from Building_Project__r) from account where id In:accountids];
   if(!finalaccount.isEmpty())
  {
    for(account acc:finalaccount)
  {
        acc.number_of_projects_del__c = acc.Building_Project__r.size();
  }
}
     update finalaccount;
}
}