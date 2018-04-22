$(document).ready(function(){
	$(".row_data").on('click', function(event) {
	event.preventDefault(); 
	if($(this).attr('edit_type') == 'button')
	{
		return false; 
	}

	//make div editable
	$(this).closest('div').attr('contenteditable', 'true');
	//add bg css
	$(this).addClass('bg-warning').css('padding','5px');

	$(this).focus();
})
});