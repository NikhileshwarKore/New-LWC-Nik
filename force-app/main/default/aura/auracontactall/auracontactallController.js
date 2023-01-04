({
	myAction : function(component, event, helper) {
		component.set("v.Columns", [
            {label:"Case Number", fieldName:"CaseNumber", type:"Integer"},
             {label:"Status", fieldName:"Status", type:"String"},
            {label:"Priority", fieldName:"Priority", type:"String"},
        ]);
            var action = component.get("c.getCases");
            action.setCallback(this, function(data){
            component.set("v.Cases", data.getReturnValue());
            });
            $A.enqueueAction(action);
	}
})