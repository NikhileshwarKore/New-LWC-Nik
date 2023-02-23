import { LightningElement, wire } from 'lwc';
    import { getListUi } from 'lightning/uiListApi';
    import CASE_OBJECT from '@salesforce/schema/Case';

    const COLUMNS = [
        { label: 'Case Number', fieldName: 'CaseNumber', type: 'text' },
        { label: 'Subject', fieldName: 'Subject', type: 'text' },
        { label: 'Status', fieldName: 'Status', type: 'text' },
        { label: 'Closed', fieldName: 'IsClosed', type: 'boolean' }
    ];

    export default class Cases_retrieve extends LightningElement {
        closedCases = [];
        error;

        @wire(getListUi, { objectApiName: CASE_OBJECT, listViewApiName: 'Closed' })
        wiredCases({ error, data }) {
            if (data) {
                this.closedCases = data.records.records;
                this.error = undefined;
            } else if (error) {
                this.error = error;
                this.closedCases = undefined;
            }
        }

        get columns() {
            return COLUMNS;
        }

        handleRowAction(event) {
            // Handle row actions here
        }
    }
