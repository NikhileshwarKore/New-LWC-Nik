import { LightningElement,api } from 'lwc';

export default class Flows_data extends LightningElement {
    @api records =[];
    @api fieldColumns =[
        { label: 'Case Number', fieldName: 'Case Number'},
        { label: 'Status', fieldName: 'Status'},
        { label: 'Priority', fieldName: 'Priority'}
    ];
}