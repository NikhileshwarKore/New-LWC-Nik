@RestResource(urlMapping='/getContact/*')
global class CustomerDetails {
@HttpGet
    global static Contact getCustomer()
    {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        string email;
         if(req.params.get('email') != null)
        {
        email =req.params.get('email');
        }
        Contact conObj = [ Select Id,firstname,lastname from Contact where contact.email = 'ajames@uog.com' ];
        return conObj;
    }
}