public class aura {
@AuraEnabled
    public static List<Case> getCases(Id recordId){
        return[SELECT Id, status,Priority,caseNumber,AccountId,Origin,Product__c From Case WHERE ContactId=: recordId];
    }
}