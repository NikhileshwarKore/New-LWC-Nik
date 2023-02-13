import { LightningElement } from 'lwc' ;
import { loadStyle } from 'lightning/platformResourceLoader';
import bulmacss from '@salesforce/resourceUrl/bulmacss';
export default class Bulma extends LightningElement {
    connectedCallback() {
        loadStyle(this, bulmacss);
    }
}