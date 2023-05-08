import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountsController.getAccounts';

const columns = [
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
    { label: 'Contacts', fieldName: 'Contacts', type: 'text' },
    { label: 'Cases', fieldName: 'Cases', type: 'text' }
];

export default class Lwc_accordion extends LightningElement {
    gridColumns = columns;
    gridData = [];


    selectedRecord;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            let accounts = JSON.parse(JSON.stringify(data));
            accounts.forEach(acc => {
                acc.Contacts = acc.Contacts ? acc.Contacts.records : [];
                acc.Cases = acc.Cases ? acc.Cases.records : [];
            });
            this.gridData = accounts;
        } else if (error) {
            console.log(error);
        }
    }

    handleRowSelection(event) {
        this.selectedRecord = event.detail.selectedRows[0];
    }

    closeModal() {
        this.selectedRecord = null;
    }
  }


  