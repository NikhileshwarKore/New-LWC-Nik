import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getListUi } from 'lightning/uiListApi';
import CASE_OBJECT from '@salesforce/schema/Case';
import CASE_ACCOUNT_FIELD from '@salesforce/schema/Case.AccountId';
import CASE_STATUS_FIELD from '@salesforce/schema/Case.Status';

export default class flows_type extends LightningElement {
    @api recordId;

    cases;
    error;

    @wire(getRecord, { recordId: '$recordId', fields: [CASE_ACCOUNT_FIELD] })
    account;

    @wire(getListUi, {
        objectApiName: CASE_OBJECT,
        listViewApiName: 'RecentlyClosed',
        filter: CASE_ACCOUNT_FIELD + ' = \'' + '$recordId' + '\' AND ' + CASE_STATUS_FIELD + ' = \'Closed\''
    })
    wiredCases({ error, data }) {
        if (data) {
            this.cases = data.records.records.map(record => ({
                Id: record.fields.Id.value,
                Subject: record.fields.Subject.value
            }));
            this.error = null;
        } else if (error) {
            this.cases = null;
            this.error = error.body.message;
        }
    }
}
