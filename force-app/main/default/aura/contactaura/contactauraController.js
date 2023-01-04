({
	myAction : function(component, event, helper) {
		component.set("v.Columns", [
            {label:"Case Number", fieldName:"CaseNumber", type:"Integer"},
             {label:"Status", fieldName:"Status", type:"String"},
            {label:"Priority", fieldName:"Priority", type:"String"},
            {label:"Case Origin", fieldName:"Origin", type:"String"},
            {label:"Product", fieldName:"Product__c", type:"String"},
            {label:"Account Name", fieldName:"AccountId", type:"Integer"},
        ]);
            var action = component.get("c.getCases");  
            action.setParams( {
            recordId:component.get("v.recordId")
            });
            action.setCallback(this, function(data){
            component.set("v.Cases", data.getReturnValue());
            });
            $A.enqueueAction(action);
	}
       
})