import { LightningElement, wire } from 'lwc';
import messagechannel from '@salesforce/messageChannel/SearchMessagingChannel__c';
import { subscribe, MessageContext } from 'lightning/messageService';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
 
export default class list extends LightningElement {
    publisherMessage = '';
    subscription = null;
 
    @wire(MessageContext)
    messageContext;
 
    connectedCallback() {
        this.handleSubscribe();
    }
    handleSubscribe() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.messageContext, messagechannel, (message) => {
            console.log(message.message);
            this.publisherMessage = message.message;
            this.ShowToast('Success', message.message, 'success', 'dismissable');
        });
    }
    ShowToast(title, message, variant, mode){
        const evt = new ShowToastEvent({
            title: title,
            message:message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(evt);
    }
     
}