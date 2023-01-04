trigger countprojects on Building_Project__c (after insert,after update,after delete)       {
    if(trigger.isafter)  {
        if(trigger.isInsert || trigger.isUpdate || trigger.isDelete)
        {
        projecthandler.counthandler (trigger.new,trigger.old);
          }
     }
}