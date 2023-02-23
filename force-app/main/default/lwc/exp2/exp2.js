import { LightningElement } from 'lwc';

export default class exp2 extends LightningElement {
    accountId;
    handleSuccess(event) {
        this.accountId = event.detail.id;
    }
}