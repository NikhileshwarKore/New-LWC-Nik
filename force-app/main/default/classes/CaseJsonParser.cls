global class CaseJsonParser {
    public CaseJsonParser(){
    }
    global caseDetails caseDetails{get;set;}
    global class caseDetails {
        public String origin{get;set;}
    }
    global customerDetails customerDetails{get;set;}
    global class customerDetails {
        public String firstName{get;set;}
        public String lastName{get;set;}
        public String email{get;set;}
    }
}