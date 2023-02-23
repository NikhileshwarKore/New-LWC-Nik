import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class exp1 extends LightningElement {
    accountId;
    handleSuccess(event) {
        this.accountId = event.detail.id;      
         this[NavigationMixin.GenerateUrl]({
        type: 'standard__recordPage',
    attributes: {
        recordId:  this.accountId,
        actionName: 'view',
    },
}).then((url) => {
    this.recordPageUrl = url;
});
    }
}

