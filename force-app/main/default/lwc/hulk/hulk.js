
import {  api,LightningElement } from 'lwc' ;

export default class hulk extends LightningElement {
    @api retrivedUser;
    HandleButtonClick(){
        // Creates the event with the contact ID data 
        const selectedEvent = new CustomEvent('userclicked', { detail: this.retrivedUser.login });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}
