public class casenav {
@AuraEnabled
    public static List<case> getCaseList2(string contactId){
        List<case> caseList = new List<case>([select id,CaseNumber,Status,Origin from Case Where ContactId =: contactId]);
        return caseList;
    }
}