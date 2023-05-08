import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountControllerAccordion.getAccountsWithContactsAndCases';
import getCaseList from '@salesforce/apex/AccountControllerAccordion.getCaseList';

export default class AccordionExample extends LightningElement {
    accounts;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {         
        if (data) {
            this.accounts = data;
            // Modify the data to show contact cases instead of account cases
            this.accounts.forEach(account => {
                account.Contacts.forEach(contact => {
                    const contactCases = contact.Cases;
                    // Assign the cases to the contact instead of the account
                    contact.Cases = contactCases;
                });
                // Remove the Cases property from the account object
                delete account.Cases;
            });
        } else if (error) {
            console.error(error);
        }
    }

    caseList = [];

    @wire(getCaseList)
    wiredGetCaseList({ error, data }) {
        if (data) {
            this.caseList = data;
        } else if (error) {
            console.error(error);
        }
    }



}