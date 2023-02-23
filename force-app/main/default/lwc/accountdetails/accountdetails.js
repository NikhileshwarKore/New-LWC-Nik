import { LightningElement, api } from 'lwc';

export default class accountdetails extends LightningElement {
    @api accountRecord;

    connectedCallback() {
        console.log(this.accountRecord);
    }
}
