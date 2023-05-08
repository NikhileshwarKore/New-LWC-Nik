import { LightningElement,api } from 'lwc';

export default class Lwc_flow_assignment extends LightningElement {
    @api records =[];
    @api fieldColumns =[
        { label: 'Conact Name', fieldName: 'ContactId' },
        { label: 'Case Number', fieldName: 'CaseNumber'},
        { label: 'Status', fieldName: 'Status'},
        { label: 'Priority', fieldName: 'Priority'}
    ];
}