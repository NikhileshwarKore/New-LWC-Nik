({
	nav : function(component, event, helper) {
        var action = component.get('c.getCaseList2');
        action.setParams({
            contactId : component.get('v.recordId'),
        });
        action.setCallback(this, function(response){
            var responseValue = response.getReturnValue();
            console.log('responseValue ', responseValue);
            component.set('v.caseList', responseValue);
        });
        $A.enqueueAction(action, false);
		
	},
    doRedirect : function(component, event, helper) {
        alert('redirecting to related case'); 
        var eve = event.getSource();
        var id = eve.get('v.name');
        var navEvt = $A.get("e.force:navigateToSObject"); 
        navEvt.setParams({
            "recordId": id,
            "slideDevName": "detail"
        });
        navEvt.fire();
    },
})