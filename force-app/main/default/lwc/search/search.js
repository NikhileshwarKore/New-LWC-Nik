import { LightningElement, wire } from 'lwc';
import messagechannel from '@salesforce/messageChannel/SearchMessagingChannel__c';
import {publish, MessageContext} from 'lightning/messageService'
 
export default class search extends LightningElement {
    @wire(MessageContext)
    messageContext;
    message;
 
    handleChange(event){
        this.message = event.detail.value;
    }
 
    handleClick() {
        let message = {message: this.message};
        publish(this.messageContext, messagechannel, message);
    }
}