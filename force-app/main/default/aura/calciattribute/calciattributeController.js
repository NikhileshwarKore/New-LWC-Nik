({
    addAction : function(component, event, helper) {
        var num1=component.get("v.num1");
        var num2=component.get("v.num2");
        var num3=num1+num2;
        component.set("v.num3", num3);
        component.set("v.isAdd", true);
        component.set("v.isRefresh", true);
        component.set("v.isMul", false);
        component.set("v.isSub", false);
        component.set("v.isDiv", false);
    },
    substractionAction : function(component, event, helper) {
        var num1=component.get("v.num1");
        var num2=component.get("v.num2");
        var num3=num1-num2;
        component.set("v.num3", num3);
        component.set("v.isSub", true);
        component.set("v.isRefresh", true);
        component.set("v.isMul", false);
        component.set("v.isDiv", false);
        component.set("v.isAdd", false);
    },
    multiplicationAction : function(component, event, helper) {
        var num1=component.get("v.num1");
        var num2=component.get("v.num2");
        var num3=num1*num2;
        component.set("v.num3", num3);
        component.set("v.isMul", true);
        component.set("v.isRefresh", true);
        component.set("v.isDiv", false);
        component.set("v.isSub", false);
        component.set("v.isAdd", false);
    },
    
    divisionAction : function(component, event, helper) {
        var num1=component.get("v.num1");
        var num2=component.get("v.num2");
        var num3=num1/num2;
        component.set("v.num3", num3);
        component.set("v.isDiv", true);
        component.set("v.isRefresh", true);
        component.set("v.isMul", false);
        component.set("v.isSub", false);
        component.set("v.isAdd", false);
    },
    refreshAction : function(component, event, helper) {
        component.set("v.num1", 0);
        component.set("v.num2", 0);
        component.set("v.isDiv", false);
        component.set("v.isMul", false);
        component.set("v.isSub", false);
        component.set("v.isAdd", false);
        component.set("v.isRefresh", false);
    }
 })