$(function(){
	var theButton = $('button.addButton');
	var groceryItem = $('.groceryItem').focus();

	groceryItem.on('keydown',function(event){
		if(event.which === 13){
		event.preventDefault();
		event.stopPropagation();
		var groceryItemVal = groceryItem.val();
		var category = $('input[type="radio"]:checked').val();
		$('#'+category).find('ul').append('<li>'+groceryItemVal+'</li>');
		groceryItem.val('').focus();
		}
	});

	theButton.on('click',function(event){
		event.preventDefault();
		event.stopPropagation();
		console.log('test');
		var groceryItemVal = groceryItem.val();
		var category = $('input[type="radio"]:checked').val();
		$('#'+category).find('ul').append('<li>'+groceryItemVal+'</li>');
		groceryItem.val('').focus();
	});


});