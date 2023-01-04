trigger buildingprojecttrigger on Building_Project__c (after insert, after update, after delete,after undelete) {
    if(trigger.isafter && trigger.isinsert)  {
            buildinprojecthelperclaa.countBuildingproject(trigger.new);            
    }
    if(trigger.isafter && trigger.isdelete)
        buildinprojecthelperclaa.DeleteBuildingproject(trigger.old); 
    }