({
    add : function(component, event, helper) {
        var fnumber = component.find("fnum").get("v.value");
        var snumber = component.find("Snum").get("v.value");
        var result = component.find("Result");
        result.set("v.value",fnumber+snumber);
	}
})