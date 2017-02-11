$(document).ready(function(){
	$('#event_info').html(eventData.key.substring(0,4)+" "+eventData.name);
	teamList = updateTeams(teamData);
});

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
