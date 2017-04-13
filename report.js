$(document).ready(function(){
	updateTeams(teamData);
	$("#team").change(
		function(){
			lookupTeamData();
			lookupMatchData();
			$("#robot_picture").attr("src", "pics/"+$("#team").val()+".jpg");
		}
		//run ajax method to update fields if data exists
	); //close team change
	$("#team").val(967);
	lookupTeamData();
	lookupMatchData();
	$("#robot_picture").attr("src", "pics/"+$("#team").val()+".jpg");
}); //close document ready 

function itemString(d, unit="", comma=","){
	//make comma = "" when calling for the last item in the list
	if(d == null || d.length == 0){
		return "";
	} else {
		return d+unit+comma;
	}
}



function lookupTeamData(){
	$('.status').html('Looking for team\'s data...');
	var postData = 'team='+$('#team').val();
	//console.log(postData);

	$.ajax({
	    url : "pitTeamGet.php",
	    type: "GET",
	    dataType: "json",
	    data : postData,
	    success: function(data,status, xhr)
	    {
	    	if ($.trim(data)){   
		     	$('.status').html("Scouting data exists for team "+$('#team').val());
	
				$('#height').html(itemString(data['height'])," height");
				$('#weight').html(itemString(data['weight']," lb",""));

				$('#drivetype').html(itemString(data['drivetype']));
				$('#transmission').html(itemString(data['transmission']));
				$('#orient').html(itemString(data['orient']));
				if(data['driveMotors']!=4 && data['driveMotors'] != null){
					$('#driveMotors').html(itemString(data['driveMotors'],"CIM"));
				}
				$('#speed').html(itemString(data['speed'],"fps",""));

				if(data['gear_human_assist']==1){
					$('#gear_release').html('Human Assist');	
				} else if(data['gear_automatic_release']==1){
					$('#gear_release').html('Automatic');	
				}

				if(data['floor_gear']==1){
					$('#floor_gear').html('Yes');
				} else if (data['floor_gear']==0){
					$('#floor_gear').html('No');
				}

				// $('#floor_gear').prop('checked',!!+data['floor_gear']);

				// $('#build_appearance').val(data['build_appearance']);
				// $('#wiring_appearance').val(data['wiring_appearance']);
				// $('#pit_comments').val(data['pit_comments']);
				// $('#hopper_size').val(data['hopper_size']);
				// $('#manip_high').prop('checked',!!+data['manip_high']);
				// $('#manip_low').prop('checked',!!+data['manip_low']);
				// $('#manip_gear').prop('checked',!!+data['manip_gear']);
				// $('#manip_hopper').prop('checked',!!+data['manip_hopper']);
				// $('#manip_climb').prop('checked',!!+data['manip_climb']);
				// $('#manip_pickup').prop('checked',!!+data['manip_pickup']);
				// $('#pitscout_auto_baseline').prop('checked',!!+data['pitscout_auto_baseline']);
				// $('#pitscout_auto_high').prop('checked',!!+data['pitscout_auto_high']);
				// $('#pitscout_auto_low').prop('checked',!!+data['pitscout_auto_low']);
				// $('#pitscout_auto_gear').prop('checked',!!+data['pitscout_auto_gear']);
				// $('#start_middle').prop('checked',!!+data['start_middle']);
				// $('#start_boiler').prop('checked',!!+data['start_boiler']);
				// $('#start_far').prop('checked',!!+data['start_far']);
				// $('#start_left').prop('checked',!!+data['start_left']);
				// $('#start_right').prop('checked',!!+data['start_right']);
				// $('#gear_middle').prop('checked',!!+data['gear_middle']);
				// $('#gear_boiler').prop('checked',!!+data['gear_boiler']);
				// $('#gear_far').prop('checked',!!+data['gear_far']);
				// $('#gear_left').prop('checked',!!+data['gear_left']);
				// $('#gear_right').prop('checked',!!+data['gear_right']);
			}
			else{   
			    $('.status').html("No existing data found for team "+$('#team').val());
			    $('#drivetype').html("");
				$('#transmission').html("");
				$('#orient').html("");
				$('#driveMotors').html("");
				$('#speed').html("");
				$('#height').html("");
				$('#weight').html("");
				$('#gear_release').html("");
				$('#floor_gear').html("");
				$('#numberOfMatches').html("?");
				$('#auto_pct').html("?");
				$('#min_gears').html("?");
				$('#avg_gears').html("?");
				$('#max_gears').html("?");
				$('#climb_pct').html("?");
			}
	     	//update status message with results of submission
	     	//$('.status').html(data);
	     	//Show and/or hide HTML elements if necessary
	    },
	    error: function (jqXHR, status, errorThrown)
	    {
	    	$('.status').html('there was an error ' + errorThrown + ' with status ' + textStatus);
	    }
    });//close ajax call

	//if null, do nothing
	//if data exists, populate fields and change submit button to "update" button
}

function lookupMatchData(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'get_team_matches.php?team='+$('#team').val());
    xhr.onload = function() {
        if (xhr.status === 200) {
        	// console.log(xhr.responseText);
        	var auto_gears = 0;
        	var auto_misses = 0;
        	var gears = [];
        	var gtot = 0;
        	var climbs = 0;
        	var climb_misses = 0;
            matches = JSON.parse(xhr.responseText);
            for (i=0;i<parseInt(matches.length);i++){
            	//maths
            	if(matches[i]["auto_gear_made"]==1){
            		auto_gears+=1;
            	} else if(matches[i]["auto_gear_miss"]==1){
            		auto_misses+=1;
            	}

            	if(matches[i]["climb_made"]==1){
            		climbs+=1;
            	} else if(matches[i]["climb_miss"]==1){
            		climb_misses+=1;
            	}
            	gears.push(parseInt(matches[i]["tele_gear_made"]));
            	gtot += parseInt(matches[i]["tele_gear_made"]);
            	auto_attempts = auto_gears+auto_misses;
            }
        //update HTML elements
        $('#numberOfMatches').html(matches.length);
        $('#auto_pct').html(auto_gears+" out of "+auto_attempts);
		var gmin = Math.min.apply(null,gears);
		var gmax = Math.max.apply(null,gears);
		var gavg = Math.round(10*gtot/matches.length)/10;
		$('#min_gears').html(gmin);
        $('#max_gears').html(gmax);
        $('#avg_gears').html(gavg);
        $('#climb_pct').html(climbs+" out of "+(climbs+climb_misses));
        }
        else {
            console.log(xhr.status);
        }
    };
    xhr.send();
}


function updateTeams(arr){
	var teamList = [];
		for (i = 0; i < teamData.length; i++){
			teamList.push({num: parseInt(teamData[i]["team_number"]),
				nick: teamData[i]["nickname"]});
		}

	teamList.sort(function comp(a, b){return parseInt(a['num'])-parseInt(b['num'])});

	var choices = '';
	for(i = 0; i < teamList.length; i++){
		var num = teamList[i]['num'];
		var nick = teamList[i]['nick']
		choices += '<option value="'+num+'">'+num+' - '+nick.substring(0,22)+'</option>\n';
	}
	document.getElementById('team').innerHTML = choices;
}

function updateNickname(arr, teamnum){
	// for (i = 0; i < arr.length; i++){
	// 	if (arr[i]['team_number']==teamnum){
	// 		$('#nickname').html(arr[i]['nickname']);
	// 	}
	// }
}