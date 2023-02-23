
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS = ['Account.Id', 'Account.Name', 'Account.Cases'];

export default class lwc_flow1 extends LightningElement {
    @api recordId;
    closedCases;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    account;

    connectedCallback() {
        this.loadCases();
    }

    loadCases() {
        if (this.account.data) {
            const cases = this.account.data.fields.Cases.value.filter(caseRecord => caseRecord.Status === 'Closed');
            this.closedCases = { data: cases };
        }
    }
}
