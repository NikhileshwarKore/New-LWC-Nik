global class batchapex_account implements Database.Batchable<sObject>
{
    global static  Database.QueryLocator  start(Database.BatchableContext BC) 
    {
        string query='Select id, Name From Account';
       return Database.getQueryLocator(query);      
    } 
       global void  execute( Database.BatchableContext BC, list<Account> llist)
       {
           for (Account acc : llist)
           {
               acc.Name = acc.Name+ ' vamritech';
           }
           update llist;
       }    
    global void finish(Database.BatchableContext BC){
         system.debug('name updated through batch apex');
        
    }
  
}