$(document).ready(function(){
	$("#submit").click(
		function(){
			console.log('submit click called');
			//if (validate data function) then call AJAX
			if (validateForm()){
				ajaxInsert();
			} else {
				$('#status').html('Select season and event code.');
				//update status message to describe invalid form submission
			}
		}
		); //close submit click function
}); //close document ready

function validateForm(){
	var season = $('#season').val();
	var eventcode = $('#eventcode').val();
	var validated = true;
	if(season==null||isNaN(season)||eventcode==null||eventcode==""){
		validated = false;
	}
	//validate HTML form data
	//if form input is invalid, validated = false
	return validated;
}

function ajaxInsert(){
	console.log('ajaxInsert called');
	// $('#status').html('Connecting to database...');
	$('#status').html('Requesting data from thebluealliance.com...');
	var season = parseInt($('#season').val());
	var eventcode = $('#eventcode').val();
	console.log(eventcode);
	var postData = 'season='+season+'&eventcode='+eventcode;
	console.log(postData);
    $.ajax({
	    url : "getTBAschedule.php",
	    type: "POST",
	    data : postData,
	    success: function(data,status, xhr)
	    {
	     	$('#status').html('AJAX call successful.');
	    },
	    error: function (jqXHR, status, errorThrown)
	    {
	    	$('#status').html('there was an error ' + errorThrown + ' with status ' + textStatus);
	    }
    });//close ajax call
}

