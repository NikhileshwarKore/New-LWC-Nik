trigger countinvoice on invoice__c (after insert,after update) {
       if(   (trigger.isAfter & trigger.isUpdate)  ||  (trigger.isAfter & trigger.isInsert)  ) {
        invoicehandler.countinvoiceamount(trigger.new);
         }
           
     }