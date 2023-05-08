import { LightningElement, wire } from 'lwc';
import getGridList from "@salesforce/apex/CaseController.getGridList";

export default class GridTreeTest extends LightningElement {

    fielddefinition = [
        {
            type: 'text',
            fieldName: 'Name',
            label: 'Account Name',
            initialWidth: 300,
        },
        {
            type: 'text',
            fieldName: 'Email',
            label: 'Email',
        },
        {
            type: 'text',
            fieldName: 'CaseNumber',
            label: 'Case Number',
        },
    ];
    finaldata;
    @wire(getGridList)
    wiredGridResults(result){
        if(result.data){
            console.log('returned data'+JSON.stringify(result.data));
            let accdata = JSON.parse(result.data);
            this.finaldata = accdata.accounts.map(item=>{
                return {
                    ...item,
                    _children : item.Contacts?.records.map(contact => {
                        return {
                            ...contact,
                            _children: contact.Cases?.records.map(caseItem => {
                                return {
                                    ...caseItem,
                                    Header: 'Case Number'
                                };
                            })
                        };
                    })
                };
            });
          }
      }
    }
