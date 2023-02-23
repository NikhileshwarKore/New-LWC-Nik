
public  class accountdetailsforflow {
    @AuraEnabled(cacheable=true)
    public static List<Case> getClosedCases() {
        return [SELECT Id, Subject, Status FROM Case WHERE Status = 'Closed'];
    }
}
