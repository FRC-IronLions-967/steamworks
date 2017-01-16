<!doctype html>
<html>
<body>
<table><tr><th>Match</th><th colspan="3">Red</th><th colspan="3">Blue</th></tr>
<?php
//Start on character 19, because the JS file includes "var scheduleData = " that we wish to ignore here.
$string =substr(file_get_contents("scheduleData.js"),19);
$sched = json_decode($string, true);
asort($sched);
foreach($sched as $s){
	if($s['comp_level']=='qm'){
		$matchnum = $s['match_number'];
		$red1 = substr($s['alliances']['red']['teams'][0],3);
		$red2 = substr($s['alliances']['red']['teams'][1],3);
		$red3 = substr($s['alliances']['red']['teams'][2],3);
		$blue1 = substr($s['alliances']['blue']['teams'][0],3);
		$blue2 = substr($s['alliances']['blue']['teams'][1],3);
		$blue3 = substr($s['alliances']['blue']['teams'][2],3);
		echo "<tr><td>$matchnum</td><td>$red1</td><td>$red2</td><td>$red3</td>";
		echo "<td>$blue1</td><td>$blue2</td><td>$blue3</td></tr>\n";
	}
}

// $blue1 = $sched[36]['alliances']['blue']['teams'][0];
// echo "Blue 1: ".$blue1;
//echo "<br>".gettype($sched);
?>
</table>
</body>
</html>