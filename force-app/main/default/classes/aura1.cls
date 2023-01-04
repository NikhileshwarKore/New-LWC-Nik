public class aura1 {
@AuraEnabled
    public static List<Case> getCases(Id recordId){
        return[SELECT Id, status,Priority,caseNumber,ContactId,SuppliedCompany From Case ];
    }
}