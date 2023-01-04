({
    handleComponentEvent : function(component, event, helper) {
        var message = event.getParam("message");
        component.set("v.MsgFromNotifier", message);
        var label = event.getParam("label");
        component.set("v.label", label);
        var count = parseInt(component.get("v.eventCount") + 1);
        component.set("v.eventCount", count);
    }
})