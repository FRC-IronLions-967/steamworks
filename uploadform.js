$(document).ready(function(){
	$('#event_info').html(eventData.key.substring(0,4)+" "+eventData.name);
	teamList = updateTeams(teamData);
	$('#team').change(
		function(){
			console.log("Team selected.");
			//$("#existingImg").attr("src",$("#team").val());
			updatePicture();
		}
		);

});

function updatePicture(){
	postdata = "team="+$('#team').val();
	console.log("postdata = "+postdata);
	$.ajax({
		url : "get_pic_name.php",
		type : "GET",
		data: postdata,
		success: function(data,status, xhr){
			if($.trim(data)){
				//success
				//console.log("Pic name lookup Ajax successful");
				//console.log(data);
				$("#existingImg").attr("src",data);
			}
			else{
				//failure
				console.log("Pic name lookup Ajax failed");
			}
		},
		error: function (jqXHR, status, errorThrown)
	    {
	    	$('#status').html('there was an error ' + errorThrown + ' with status ' + textStatus);
	    }
	});
}

function updateTeams(arr){
	var teamList = [];
	for (i = 0; i < teamData.length; i++){
		teamList.push({num: parseInt(teamData[i]["team_number"]),
			nick: teamData[i]["nickname"]});
	}
	teamList.sort(function comp(a, b){return parseInt(a['num'])-parseInt(b['num'])});
	var choices = '';
	choices += '<option value="">Choose a Team</option>\n';
	for(i = 0; i < teamList.length; i++){
		var num = teamList[i]['num'];
		var nick = teamList[i]['nick']
		choices += '<option value="'+num+'">'+num+' - '+nick.substring(0,26)+'</option>\n';
	}
	document.getElementById('team').innerHTML = choices;
	return teamList;
}
