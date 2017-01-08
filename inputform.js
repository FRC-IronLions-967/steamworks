$(document).ready(function(){
	$("#status").hide();
	$("#submit").click(
		function(){
			//if (validate data function) then call AJAX
			if (validateForm()){
				ajaxInsert();
			} else {
				//update status message to describe invalid form submission
			}
		}
		); //close submit click function
}); //close document ready

function validateForm(){
	//validate HTML form data
	validated = true;
	//if form input is invalid, validated = false
	return validated;
}

function ajaxInsert(){
	//jQuery AJAX call to insert_match_record.php
	//variables
	//create postData string from HTML fields; hard code testing example below
	//maybe loop through a jQuery class selector to generate the string
	var postData = "match=2&team=967";
    $.ajax({
	    url : "insert_match_record.php",
	    type: "POST",
	    data : postData,
	    success: function(data,status, xhr)
	    {
	     	//reset form data for a new entry
	     	//update status message with results of submission
	     	//Show and/or hide HTML elements if necessary
	    },
	    error: function (jqXHR, status, errorThrown)
	    {
	        //Update status message with error
	        //$("#status_text").html('there was an error ' + errorThrown + ' with status ' + textStatus);
	    }
    });//close ajax call
}

