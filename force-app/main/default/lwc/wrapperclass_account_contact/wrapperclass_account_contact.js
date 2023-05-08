
import { LightningElement, api, track } from 'lwc';

export default class Wrapperclass_account_contact extends LightningElement {
    @api wrapperList;
    @track expandedRows = [];
    columns = [
        { label: 'Account Name', fieldName: 'accRecord.Name' },
        { label: 'Contact Name', fieldName: 'contactList', type: 'text', typeAttributes: { fieldName: 'Name' } }
    ];

    connectedCallback() {
        this.expandedRows = this.wrapperList.data.map((wrap) => wrap.accRecord.Id);
    }
}