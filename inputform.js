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
	var event_code = scheduleData[0]["event_key"];
	//eventCode won't work for practic matches - need a case for blank schedule data
	var matchnum = parseInt($('#matchnum').val());
	var team = $('#team').val();
	var scout_name = $('#scout_name').val();
	var baseline = parseInt(document.getElementById('baseline').checked | 0);
	var auto_high_made = $('#auto_high_made').val();	
	var auto_high_miss = $('#auto_high_miss').val();
	var auto_low_made = $('#auto_low_made').val();
	var auto_low_miss = $('#auto_low_miss').val();
	var auto_gear_made = parseInt(document.getElementById('auto_gear_made').checked | 0);
	var auto_gear_miss = parseInt(document.getElementById('auto_gear_miss').checked | 0);
	var auto_incap = parseInt(document.getElementById('auto_incap').checked | 0);
	var auto_pos = $('#auto_pos').val();
	var cycles = $('#cycles').val();
	var tele_high_made = $('#tele_high_made').val();
	var tele_high_miss = $('#tele_high_miss').val();
	var tele_low_made = $('#tele_low_made').val();
	var tele_low_miss = $('#tele_low_miss').val();
	var tele_gear_made = $('#tele_gear_made').val();
	var tele_gear_miss = $('#tele_gear_miss').val();
	var climb_made = parseInt(document.getElementById('climb_made').checked | 0);
	var climb_miss = parseInt(document.getElementById('climb_miss').checked | 0);
	var hopper = $('#hopper').val();
	var defense = parseInt(document.getElementById('defense').checked | 0);
	var tele_incap = parseInt(document.getElementById('tele_incap').checked | 0);
	var technical = $('#technical').val();
	var nontechnical = $('#nontechnical').val();
	var comments = $('#comments').val();

	var postData = 'event_code='+event_code+
		'&matchnum='+matchnum+
		'&team='+team+
		'&scout_name='+scout_name+
		'&baseline='+baseline+
		'&auto_high_made='+auto_high_made+
		'&auto_high_miss='+auto_high_miss+
		'&auto_low_made='+auto_low_made+
		'&auto_low_miss='+auto_low_miss+
		'&auto_gear_made='+auto_gear_made+
		'&auto_gear_miss='+auto_gear_miss+
		'&auto_incap='+auto_incap+
		'&auto_pos='+auto_pos+
		'&cycles='+cycles+
		'&tele_high_made='+tele_high_made+
		'&tele_high_miss='+tele_high_miss+
		'&tele_low_made='+tele_low_made+
		'&tele_low_miss='+tele_low_miss+
		'&tele_gear_made='+tele_gear_made+
		'&tele_gear_miss='+tele_gear_miss+
		'&climb_made='+climb_made+
		'&climb_miss='+climb_miss+
		'&hopper='+hopper+
		'&defense='+defense+
		'&tele_incap='+tele_incap+
		'&technical='+technical+
		'&nontechnical='+nontechnical+
		'&comments='+comments;

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
	    	$('#status').html('there was an error ' + errorThrown + ' with status ' + textStatus);
	    }
    });//close ajax call
}

function updateTeams(arr, matchnum){
	var teamList = [];

	if(arr.length > 10){
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
	} else {
		for (i = 0; i < teamData.length; i++){
			teamList.push(parseInt(teamData[i]["team_number"]));
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