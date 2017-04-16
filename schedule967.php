<!doctype html>
<html>
	<head>
  		<link rel='stylesheet' href="w3.css">
  		<link rel='stylesheet' href="w3-theme-red.css">
  		<link rel='stylesheet' href="tablestylesheet.css">
  		<meta name=viewport content="width=device-width">
  		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	
	<body class="w3-theme-d3">
		<div class="w3-panel w3-theme-l3 w3-padding-large w3-round-xxlarge w3-border w3-border-black w3-center"><h1>2017 FRC Match Schedule</h1></div>

  		<ul class="w3-navbar w3-theme-l3 w3-round-xxlarge w3-border-black">
    		<li><a href='index.html'>Match Scouting</a></li>
    		<li><a href="pitscouting.html">Pit Scouting</a></li>
    		<li><a href="schedule.php">Schedule</a></li>
    		<li><a href="teams.php">Team List</a></li>  
    		<li><a href="admin.html">Admin</a></li>  
    		<li><a href="csv.php">CSV Download</a></li>
    		<li><a href="pitcsv.php">Pit CSV Download</a><li>
    		<li><a href="uploadPic.html">Upload Team Photos</a><li>
    		<li><a href="teamReport.html">Team Reports</a><li>
  		</ul>
  		<div class="w3-panel w3-theme-l3 w3-padding-large w3-round-xxlarge w3-border w3-border-black w3-text-white w3-margin-left w3-margin-right">
			<table class"w3-table"><tr><th>Match</th><th colspan="3" class="w3-red" >Red</th><th colspan="3" class="w3-blue">Blue</th></tr>
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
					$teams = array($red1, $red2, $red3, $blue1, $blue2, $blue3);
					if (in_array('967',$teams)){
						echo "<tr><td>$matchnum</td><td class='w3-theme-l2'><a href=\"report.php?team=$red1\">$red1</a></td><td class='w3-theme-l2'><a href=\"report.php?team=$red2\">$red2</a></td><td class='w3-theme-l2 right'><a href=\"report.php?team=$red3\">$red3</a></td>";
					echo "<td class='b'><a href=\"report.php?team=$blue1\">$blue1</a></td><td class='b'><a href=\"report.php?team=$blue2\">$blue2</a></td><td class='b'><a href=\"report.php?team=$blue3\">$blue3</a></td></tr>\n";
					}
				}
			}
			// $blue1 = $sched[36]['alliances']['blue']['teams'][0];
			// echo "Blue 1: ".$blue1;
			//echo "<br>".gettype($sched);
			?>
			</table>
		</div>
	</body>
</html>