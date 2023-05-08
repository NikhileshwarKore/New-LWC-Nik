import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';

const FIELDS = ['Contact.Account.Name', 'Contact.AccountId'];

export default class Lwc_card_task extends NavigationMixin(LightningElement) {
  @api recordId;
  accountName;
  accountUrl;

  @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
  wiredContact({ data, error }) {
    if (data) {
      this.accountName = getFieldValue(data, 'Contact.Account.Name');
      const accountId = getFieldValue(data, 'Contact.AccountId');
      this.accountUrl = `/${accountId}`;
    } else if (error) {
      console.error(error);
    }
  }

  handleClick() {
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
        recordId: getFieldValue(this.contact, 'Contact.AccountId'),
        objectApiName: 'Account',
        actionName: 'home'
      }
    });
  }
}


