@RestResource(urlMapping='/ContactRetrieval/*')
global class ConsumerDetailApi {
    @HttpGet
    global static case getConsumer()
    {
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        res.addHeader('Content-Type', 'application/json');
        string email;
        if(req.params.get('email') != null)
        {
        email =req.params.get('email');
        }
        case result = [select Contact.firstname,Contact.lastname ,Contact.email, Casenumber from Case where Contact.email= 'nik@gmail.com' ];
        return result;
    }
}