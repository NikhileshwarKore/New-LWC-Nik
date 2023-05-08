public class accordion {
    @AuraEnabled
    public static List<Case> getCaseList(){
        List<Case> caseList = new List<Case>();
        caseList = [SELECT Id,CaseNumber,ContactId,Priority,Status From Case Where ContactEmail='nik@gmail.com' LIMIT 3];
        return caseList;
    }
}