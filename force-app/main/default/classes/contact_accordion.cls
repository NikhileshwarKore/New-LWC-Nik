public class contact_accordion {
@AuraEnabled
 public static List<Contact> getContacts()
{
List<Contact> cntList = [select Id, Name,(select CaseNumber,Origin,Priority From Cases  where ContactId!=Null)FROM Contact Where Email!=Null And LastViewedDate!=Null Order By LastViewedDate DESC LIMIT 10];
return cntList;
}
}