$(document).ready(function(){
	$("#submit").click(
		function(){
			console.log('submit click called');
			//if (validate data function) then call AJAX
			if (validateForm()){
				ajaxInsert();
			} else {
				$('#status').html('Form data not filled out correctly.');
				//update status message to describe invalid form submission
			}
		}
		); //close submit click function
}); //close document ready

function validateForm(){
	var matchnum = $('#matchnum').val();
	var team = $('#team').val();
	var validated = true;
	if(matchnum==null||isNaN(matchnum)||team==null||team==""){
		validated = false;
	}
	//validate HTML form data
	//if form input is invalid, validated = false
	return validated;
}

function ajaxInsert(){
	console.log('ajaxInsert called');
	$('#status').html('Connecting to database...');
	//jQuery AJAX call to insert_match_record.php
	//variables
	//create postData string from HTML fields; hard code testing example below
	//maybe loop through a jQuery class selector to generate the string
	var matchnum = parseInt($('#matchnum').val());
	var team = $('#team').val();
	var postData = 'matchnum='+matchnum+'&team='+team;
    $.ajax({
	    url : "insert_match_record.php",
	    type: "POST",
	    data : postData,
	    success: function(data,status, xhr)
	    {
	     	//reset form data for a new entry
	     	//update status message with results of submission
	     	$('#status').html(data);
	     	$('#matchnum').val(matchnum+1);
	     	$('#team').val(''); 
	     	$('#team').focus();

	     	//Show and/or hide HTML elements if necessary
	    },
	    error: function (jqXHR, status, errorThrown)
	    {
	    	//$('#status').html('Database action failed.');
	    	$('#status').html('there was an error ' + errorThrown + ' with status ' + textStatus);
	        //Update status message with error
	        //$("#status_text").html('there was an error ' + errorThrown + ' with status ' + textStatus);
	    }
    });//close ajax call
}

