({
	fireComponentEvent : function(component, event, helper) {
        var componentEvent = component.getEvent("cmpEvent");
        var msgString = component.get("v.messageString");
        msgString = $A.util.isEmpty(msgString) ? "No Message Passed" : msgString;
        componentEvent.setParam({
            "message" : msgString,
            "label" : "Custom Label"
        })
        componentEvent.fire();
		}
})