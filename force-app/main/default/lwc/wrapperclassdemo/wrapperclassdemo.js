import { LightningElement, track, wire } from 'lwc';
import getAccContacts from '@salesforce/apex/wrappercls.fetchAccountContactDetails';

const columns = [
    {
        label : 'Account Name',
        fieldName : 'AccountLink',
        type : 'url',
        typeAttributes :{
            label : {
                fieldName : 'AccountName'
            },
            target : '_blank'
        }
    },
    {
        label : 'contactName',
        fieldName : 'contactName',
    },
    {
        label : 'Address',
        fieldName : 'billingAdress', 
    }
]  

export default class Wrapperclassdemo extends LightningElement {

    @track columns = columns;
    @track data;
    @track error;
    @wire(getAccContacts)
    wiredAccountdata({error,data}){
        if(data){
            this.data = data;
        }
        else{
            this.error = error;
        }
    }

}