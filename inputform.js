$(document).ready(function(){
	$('#event_info').html(eventData.key.substring(0,4)+" "+eventData.name);
	updateTeams(scheduleData, $('#matchnum').val())
	updateNickname(teamData, $('#team').val());

	$("#submit").click(
		function(){
			//if (validate data function) then call AJAX
			if (validateForm()){
				ajaxInsert();
			} else {
				$('.status').html('Form data not filled out correctly.');
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
			matchLookup();
		}
	); //close team change
}); //close document ready

function validateForm(){
	var matchnum = $('#matchnum').val();
	var team = $('#team').val();
	var validated = true;
	if(matchnum==null||isNaN(matchnum)||team==null||team==0||team==""){
		validated = false;
		$('.status').html('Fill out form fields.');
	}
	//validate HTML form data
	//if form input is invalid, validated = false
	return validated;
}

function matchLookup(){
	$('.status').html('Looking for team\'s data...');
	var postData = 'matchnum='+$('#matchnum').val()+'&team='+$('#team').val();
	// console.log(postData);

		$.ajax({
	    url : "matchGet.php",
	    type: "GET",
	    dataType: "json",
	    data : postData,
	    success: function(data,status, xhr)
	    {
	    	if ($.trim(data)){   
		     	$('.status').html("Data exists for match "+$('#matchnum').val()+", team "+$('#team').val());

				$('#scout_name').val(data['scout_name']);
				$('#auto_high_made').val(data['auto_high_made']);
				$('#auto_high_miss').val(data['auto_high_miss']);
				$('#auto_low_made').val(data['auto_low_made']);
				$('#auto_low_miss').val(data['auto_low_miss']);
				$('#auto_pos').val(data['auto_pos']);
				$('#cycles').val(data['cycles']);
				$('#tele_high_made').val(data['tele_high_made']);
				$('#tele_high_miss').val(data['tele_high_miss']);
				$('#tele_low_made').val(data['tele_low_made']);
				$('#tele_low_miss').val(data['tele_low_miss']);
				$('#tele_gear_made').val(data['tele_gear_made']);
				$('#tele_gear_miss').val(data['tele_gear_miss']);
				$('#hopper').val(data['hopper']);
				$('#technical').val(data['technical']);
				$('#nontechnical').val(data['nontechnical']);
				$('#comments	').val(data['comments']);


				$('#practice').attr('checked',!!+data['practice']);
				$('#baseline').attr('checked',!!+data['baseline']);
				$('#auto_gear_made').attr('checked',!!+data['auto_gear_made']);
				$('#auto_gear_miss').attr('checked',!!+data['auto_gear_miss']);
				$('#auto_incap').attr('checked',!!+data['auto_incap']);
				$('#climb_made').attr('checked',!!+data['climb_made']);
				$('#climb_miss').attr('checked',!!+data['climb_miss']);
				$('#defense').attr('checked',!!+data['defense']);
				$('#tele_incap').attr('checked',!!+data['tele_incap']);
			}
			else{   
			    $('.status').html("No match data found for match "+$('#matchnum').val()+", team "+$('#team').val());
			    $("#baseline").prop('checked',false);
				$("#auto_high_made").val(0);
				$("#auto_high_miss").val(0);
				$("#auto_low_made").val(0);
				$("#auto_low_miss").val(0);
				$("#auto_gear_made").prop('checked',false);
				$("#auto_gear_miss").prop('checked',false);
				$("#auto_incap").prop('checked',false);
				$("#cycles").val(0);
				$("#tele_high_made").val(0);
				$("#tele_high_miss").val(0);
				$("#tele_low_made").val(0);
				$("#tele_low_miss").val(0);
				$("#tele_gear_made").val(0);
				$("#tele_gear_miss").val(0);
				$("#climb_made").prop('checked',false);
				$("#climb_miss").prop('checked',false);
				$("#hopper").val(0);
				$("#defense").prop('checked',false);
				$("#tele_incap").prop('checked',false);
				$("#technical").val(0);
				$("#nontechnical").val(0);
				$("#comments").val("");
			}
	    },
	    error: function (jqXHR, status, errorThrown)
	    {
	    	$('.status').html('there was an error ' + errorThrown + ' with status ' + textStatus);
	    }
    });//close ajax call
}

function ajaxInsert(){
	//jQuery AJAX call to insert_match_record.php
	$('.status').html('Connecting to database...');
	var event_code = eventData.key;
	var matchnum = parseInt($('#matchnum').val());
	var practice = parseInt(document.getElementById('practice').checked | 0);
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
		'&practice='+practice+
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
	     	window.scrollTo(0,document.body.scrollHeight);
	     	// console.log(data);
	     	// console.log(typeof data);
	     	$('.status').html(data);
	     	if(data == "Match record saved successfully."){
	     		$('#matchnum').val(matchnum+1);
				$("#baseline").prop('checked',false);
				$("#auto_high_made").val(0);
				$("#auto_high_miss").val(0);
				$("#auto_low_made").val(0);
				$("#auto_low_miss").val(0);
				$("#auto_gear_made").prop('checked',false);
				$("#auto_gear_miss").prop('checked',false);
				$("#auto_incap").prop('checked',false);
				$("#cycles").val(0);
				$("#tele_high_made").val(0);
				$("#tele_high_miss").val(0);
				$("#tele_low_made").val(0);
				$("#tele_low_miss").val(0);
				$("#tele_gear_made").val(0);
				$("#tele_gear_miss").val(0);
				$("#climb_made").prop('checked',false);
				$("#climb_miss").prop('checked',false);
				$("#hopper").val(0);
				$("#defense").prop('checked',false);
				$("#tele_incap").prop('checked',false);
				$("#technical").val(0);
				$("#nontechnical").val(0);
				$("#comments").val("");
				$('#team').focus();
	     	}
	     	else{
	     		// console.log("not equal strings, apparently");
	     		$('.status').html('Match not saved properly?');
	     	}
	    },
	    error: function (jqXHR, status, errorThrown)
	    {
	    	$('.status').html('there was an error ' + errorThrown + ' with status ' + textStatus);
	    }
    });//close ajax call
}

function updateTeams(arr, matchnum){
	var teamList = [];
	//add a '0' value to the beginning to avoid letting humans forget to select and default to first in list
	teamList.push(0);

	if(arr.length > 0){
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
		$('#practice').prop('checked', true);
		for (i = 0; i < teamData.length; i++){
			teamList.push(parseInt(teamData[i]["team_number"]));
		}
	}
	teamList.sort(function compareInt(a, b){return parseInt(a)-parseInt(b)});
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

