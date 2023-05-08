import { LightningElement, api } from 'lwc';

export default class Lwc_treegrid_child extends LightningElement {
    @api contactsData;
    gridData = [];

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
            typeAttributes: { iconName: 'standard:case', label: { fieldName: 'caseCount' } }
        }
    ];

    connectedCallback() {
        this.formatGridData();
    }

    formatGridData() {
        this.gridData = this.contactsData.map((contact) => {
            const { Cases, ...contactFields } = contact;
            const caseWrapper = Cases.map((caseObj) => ({
                ...caseObj,
                '_children': []
            }));
            return {
                ...contactFields,
                '_children': caseWrapper,
                'caseCount': caseWrapper.length
            };
        });
    }
}


