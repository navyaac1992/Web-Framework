$(document).ready(function(){
	$(".row_data").on('click', function(event) {
		event.preventDefault(); 

		//get value of select tag
		var person = $("#access option:selected").text();

		//make div editable 
		if(person === "Admin" || person === "Professor"){
			$(this).closest('div').attr('contenteditable', 'true');
			$(this).addClass('bg-warning').css('padding','5px');
			$(this).focus();
		}			
	});

	//--->save single field data > start
	$(".row_data").on('focusout', function(event) 
	{
		event.preventDefault();

		var row_id = $(this).closest('tr').attr('row_id'); 
		
		var row_div = $(this)
		.removeAttr('contenteditable') //make div uneditable		
		.removeClass('bg-warning') //remove bg css 
		.css('padding','')
		
		var col_name = row_div.attr('colname'); 
		var col_val = row_div.html(); 

		var arr = {};
		arr[col_name] = col_val;

		//use the "arr"	object for ajax call
		$.extend(arr, {row_id:row_id});

		//output to show
		$('.post_msg').html( '<pre class="bg-success">'+JSON.stringify(arr, null, 2) +'</pre>')
		
	});	
//--->save single field data > end

// Sorting

$('.sortable').click(function() {
    var table = $(this).parents('table').eq(0);
    var rows = table.find('tr:gt(0)').toArray().sort(comparer($(this).index()));
    console.log(rows);
    this.asc = !this.asc;
    if (!this.asc) {
    	rows = rows.reverse();
    }
    for (var i = 0; i < rows.length; i++){
    	table.append(rows[i]);
    }
});

});

function getCellValue(row, index) { 
	return $(row).children('td').eq(index).text(); 
}

function comparer(index) {
    return function(a, b) {
        var valA = getCellValue(a, index), valB = getCellValue(b, index);
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB);
    }
}









