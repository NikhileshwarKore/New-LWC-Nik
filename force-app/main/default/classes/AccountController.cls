
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static String getAccountName(String accountId) {
      Account account = [SELECT Name FROM Account WHERE Id = :accountId];
      return account.Name;
    }
  }
  