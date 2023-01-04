({ 

   fireComponentEvent : function(cmp, event,helper) { 

//Get the event using registerEvent name. 

   var cmpEvent = cmp.getEvent("cmpEvent"); 

   cmpEvent.setParams({"message" : "A component event fired me. "}); 

   cmpEvent.fire(); 

   } 

})