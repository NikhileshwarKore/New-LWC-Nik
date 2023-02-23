import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class DisplayClosedCases extends LightningElement {
    @api recordId; // The account record ID that this LWC is being displayed on

    closedCases = [];

    @wire(getRecord, {
        recordId: '$recordId',
        fields: ['Account.Name'],
        optionalFields: ['Account.Cases']
    })
    wiredAccount({ error, data }) {
        if (data) {
            this.closedCases = data.fields.Account.Cases.value.filter(caseRecord => caseRecord.Status === 'Closed');
        } else if (error) {
            console.error(error);
        }
    }

    get hasClosedCases() {
        return this.closedCases.length > 0;
    }
}
