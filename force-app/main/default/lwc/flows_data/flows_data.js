
import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CASE_OBJECT from '@salesforce/schema/Case';

export default class flow_data extends LightningElement {
    @api recordId;
    caseRecord;
    caseObjectInfo;

    @wire(getObjectInfo, { objectApiName: CASE_OBJECT })
    caseObjectInfo;

    @wire(getRecord, { recordId: '$recordId', fields: ['Case.Id', 'Case.CaseNumber', 'Case.Subject', 'Case.Status', 'Case.IsClosed'] })
    caseRecord;

    get caseId() {
        return this.caseRecord.data ? this.caseRecord.data.fields.Id.value : null;
    }
}
