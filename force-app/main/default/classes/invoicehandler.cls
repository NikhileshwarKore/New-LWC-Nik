public class invoicehandler {
    public static void countinvoiceamount(list<invoice__c> Invoice){
        List<Account> updateAccList = new List<Account>();
        for ( Account acc:[SELECT id,name,last_year_annual_invoice_amount__c,latest_invoice_amount__c FROM Account WHERE id IN: AccountId(Invoice)])
        {
            Double invoiceAmountofLastYear = 0 ;
            
     for(Invoice__c invoiceList :[SELECT id, Name, Invoice_Amount__c FROM Invoice__c WHERE Account_details__c =:acc.id AND Invoice_Date__c= LAST_YEAR])
       {
         invoiceAmountofLastYear = invoiceAmountofLastYear + invoiceList.Invoice_Amount__c;
          }
      acc.last_year_annual_invoice_amount__c = invoiceAmountofLastYear;
      acc.latest_invoice_amount__c = [SELECT id, Name, Invoice_Amount__c FROM Invoice__c WHERE Account_details__c=: acc.id ORDER BY Invoice_Date__c DESC LIMIT 1].Invoice_Amount__c;
      }
      }
    {
      List<Account> updateAccList = new List<Account>();
       if     (updateAccList != null &&  !updateAccList.isEmpty()){
       update updateAccList;
        }
           }
     public static list<Id> AccountId(List<Invoice__c> items){
     List<Id> AccountIDList = new List<Id>();
        for(Invoice__c ProcessItem :items ){
        AccountIDList.add(ProcessItem.Account_details__c);
        }
       return(AccountIDList);
       }
        }