({ 

   handleComponentEvent : function(cmp, event) { 

   var message = event.getParam("message"); 

   // set the handler attributes based on event data 

   cmp.set("v.messageFromEvent", message); 


   } 

})