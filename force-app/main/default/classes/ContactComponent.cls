public   class ContactComponent {
   	@Auraenabled
    public static string createContact(Contact contObj){
        system.debug('Contact::'+contObj.firstName);
       contObj.AccountId = contObj.Id;
        insert contObj;
        return contObj.Id;
    }
 }