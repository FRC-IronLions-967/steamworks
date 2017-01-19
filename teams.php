<!doctype html>
<html>
<body>
<table><tr><th>Team</th><th>Nickname</th><th>Location</th></tr>
<?php
//Start on character 15, because the JS file includes "var teamData = " that we wish to ignore here.
$string =substr(file_get_contents("teamData.js"),15);
$teams = json_decode($string, true);

//Sort array by team_number
foreach ($teams as $key => $row) {
    $teamnumber[$key]  = $row['team_number'];
}
array_multisort($teamnumber, SORT_ASC, $teams);

foreach($teams as $t){
	$teamnum = $t['team_number'];
	$nickname = $t['nickname'];
	$locality = $t['locality'];
	$region = $t['region'];
	echo "<tr><td>$teamnum</td><td>$nickname</td><td>{$locality}, {$region}</td></tr>\n";
}

// $blue1 = $sched[36]['alliances']['blue']['teams'][0];
// echo "Blue 1: ".$blue1;
//echo "<br>".gettype($sched);
?>
</table>
</body>
</html>