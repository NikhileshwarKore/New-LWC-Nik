public with sharing class VotingClass {
  @AuraEnabled
    public static Id saveDataToServer(Decimal P1,Decimal P2,Decimal P3,Decimal P4,Decimal P5,Decimal P6,Decimal P7,Decimal P8,Decimal P9,Decimal P10,Decimal P11,Decimal P12,Decimal P13,Decimal P14,Decimal P15,Decimal P16,Decimal P17,Decimal P18,Decimal P19,Decimal P20,Decimal P21,Decimal P22) {
        // create a new custom object record or update an existing one
        // use the input values to set the fields on the record
        voting_result__c customRecord = new voting_result__c();
        customRecord.nikhilesh__c = P1;
        customRecord.Durga__c = P2;
        customRecord.Ranjith__c =P3; 
        customRecord.Sravani__c=P4;
        customRecord.Shwetha__c=P5;
        customRecord.Rohan__c=P6;
        customRecord.Praneeth__c=P7;
        customRecord.Anil__c=P8;
        customRecord.Snehdeep__c=P9;
        customRecord.Rajitha__c=P10;
        customRecord.Swati__c=P11;
        customRecord.Bhavani__c=P12;
        customRecord.Lavanya__c=P13;
        customRecord.Pavani__c=P14;
        customRecord.Naresh__c=P15;
        customRecord.Sukanya__c=P16;
        customRecord.Shikha__c=P17;
        customRecord.Haritha__c=P18;
        customRecord.Swamy__c=P19;
        customRecord.Asifa__c=P20;
        customRecord.Amrutha__c=P21;
        customRecord.Tharun__c=P22;
        
       // customRecord.Name = recordName;
        insert customRecord;
        return customRecord.Id;
    }
}