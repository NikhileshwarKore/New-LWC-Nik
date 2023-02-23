import { LightningElement, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';

export default class Exp3 extends LightningElement {
    @wire(getContacts)
    contacts;
}
