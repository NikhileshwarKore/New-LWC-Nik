import { LightningElement, wire } from 'lwc';
import allAccountsWithContactAndCases from '@salesforce/apex/casesretrieve.allAccountsWithContactAndCases';

export default class Lwc_treegrid_cases extends LightningElement {
    gridData = [];

    @wire(allAccountsWithContactAndCases)
    wiredAccounts({ data, error }) {
        if (data) {
            this.formatGridData(data);
        } else if (error) {
            console.error(error);
        }
    }

    gridColumns = [
        {
            label: 'Name',
            fieldName: 'Name',
            type: 'text'
        },
        {
            label: 'Phone',
            fieldName: 'Phone',
            type: 'text'
        },
        {
            label: 'Cases',
            type: 'text',
            fieldName: 'Cases',
            typeAttributes: { iconName: 'utility:case', label: { fieldName: 'caseCount' } }
        }
    ];

    formatGridData(result) {
        this.gridData = result.map((account) => {
            const { Contacts, ...accountFields } = account;
            const contactsWithCases = Contacts.map((contact) => {
                const { Cases, ...contactFields } = contact;
                return {
                    ...contactFields,
                    '_children': Cases.map((caseObj) => ({
                        ...caseObj,
                        '_children': []
                    })),
                    'caseCount': Cases.length
                };
            });
            return {
                ...accountFields,
                '_children': contactsWithCases,
                'caseCount': ''
            };
        });
    }
}
