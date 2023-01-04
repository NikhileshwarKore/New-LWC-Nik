({
	 init: function(cmp) {
        var list = ['Red', 'Blue', 'Green','Blue'];
        cmp.set('v.Colors', list);
        var myMap = cmp.get("v.sectionLabels");
         myMap['c'] = 'label3';
    }
    
})