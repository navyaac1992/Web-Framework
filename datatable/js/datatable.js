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
});

	//--->save single field data > start
$(".row_data").on('focusout', function(event) 
{
	event.preventDefault();

	if($(this).attr('edit_type') == 'button')
	{
		return false; 
	}

	var row_id = $(this).closest('tr').attr('row_id'); 
	
	var row_div = $(this)
	.removeAttr('contenteditable') //make div editable		
	.removeClass('bg-warning') //add bg css
	.css('padding','')

	var col_name = row_div.attr('col_name'); 
	var col_val = row_div.html(); 

	var arr = {};
	arr[col_name] = col_val;

	//use the "arr"	object for your ajax call
	$.extend(arr, {row_id:row_id});

	//out put to show
	$('.post_msg').html( '<pre class="bg-success">'+JSON.stringify(arr, null, 2) +'</pre>');
	
});	
//--->save single field data > end
});