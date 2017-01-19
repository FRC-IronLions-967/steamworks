$(document).ready(function(){
	updateTeams(scheduleData, $('#matchnum').val())
	updateNickname(teamData, $('#team').val());
	$("#submit").click(
		function(){
			//if (validate data function) then call AJAX
			if (validateForm()){
				ajaxInsert();
			} else {
				$('#status').html('Form data not filled out correctly.');
				//update status message to describe invalid form submission
			}
		}
	); //close submit click function
	$("#matchnum").change(
		function(){
			updateTeams(scheduleData, $('#matchnum').val())
			updateNickname(teamData, $('#team').val());
		}
	); //close matchnum change
	$("#team").change(
		function(){
			updateNickname(teamData, $('#team').val());
		}
	); //close team change
}); //close document ready

function validateForm(){
	var matchnum = $('#matchnum').val();
	var team = $('#team').val();
	var validated = true;
	if(matchnum==null||isNaN(matchnum)||team==null||team==""){
		validated = false;
		$('#status').html('Fill out form fields.');
	}
	//validate HTML form data
	//if form input is invalid, validated = false
	return validated;
}

function ajaxInsert(){
	//jQuery AJAX call to insert_match_record.php
	$('#status').html('Connecting to database...');
	var matchnum = parseInt($('#matchnum').val());
	var team = $('#team').val();
	var baseline = parseInt(document.getElementById('baseline').checked | 0);
	var highgoal = parseInt(document.getElementById('highgoal').checked | 0);
	var lowgoal = parseInt(document.getElementById('lowgoal').checked | 0);
	var gear = parseInt(document.getElementById('gear').checked | 0);
	var autoincap = parseInt(document.getElementById('autoincap').checked | 0);
	var autopos = $('#autopos').val();
	var cycles = $('#cycles').val();
	var highgoaltele = parseInt(document.getElementById('highgoaltele').checked | 0);
	var lowgoaltele = parseInt(document.getElementById('lowgoaltele').checked | 0);
	var geartele = parseInt(document.getElementById('geartele').checked | 0);
	var hopper = parseInt(document.getElementById('hopper').checked | 0);
	var teleincap = parseInt(document.getElementById('teleincap').checked | 0);
	var defense = parseInt(document.getElementById('defense').checked | 0);
	var climba = parseInt(document.getElementById('climba').checked | 0);
	var climbs = parseInt(document.getElementById('climbs').checked | 0);
	var comments = $('#comments').val();
	var nopenalties = $('#nopenalties').val();

	var postData = 'matchnum='+matchnum+
		'&team='+team+
		'&baseline='+baseline+
		'&highgoal='+highgoal+
		'&lowgoal='+lowgoal+
		'&gear='+gear+
		'&autoincap='+autoincap+
		'&autopos='+autopos+
		'&cycles='+cycles+
		'&highgoaltele='+highgoaltele+
		'&lowgoaltele='+lowgoaltele+
		'&geartele='+geartele+
		'&hopper='+hopper+
		'&teleincap='+teleincap+
		'&defense='+defense+
		'&climba='+climba+
		'&climbs='+climbs+
		'&comments='+comments+
		'&nopenalties='+nopenalties;

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
	     	window.scrollTo(0,document.body.scrollHeight);
	     	//$('#team').val(''); 
	     	//$('#team').focus();

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

function updateTeams(arr, matchnum){
	var teamList = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i]["comp_level"]==="qm"){
			if(arr[i]["match_number"]==matchnum){
				var red = arr[i]['alliances']['red']['teams'];
				var blue = arr[i]['alliances']['blue']['teams'];
				teamList.push(parseInt(red[0].slice(3)));
				teamList.push(parseInt(red[1].slice(3)));
				teamList.push(parseInt(red[2].slice(3)));
				teamList.push(parseInt(blue[0].slice(3)));
				teamList.push(parseInt(blue[1].slice(3)));
				teamList.push(parseInt(blue[2].slice(3)));
			}
		}
	}
	var choices = '';
	for(i = 0; i < teamList.length; i++){
		var team = teamList[i];
		choices += '<option value="'+team+'">'+team+'</option>\n';
	}
	document.getElementById('team').innerHTML = choices;
}

function updateNickname(arr, teamnum){
	for (i = 0; i < arr.length; i++){
		if (arr[i]['team_number']==teamnum){
			$('#nickname').html(arr[i]['nickname']);
		}
	}
}