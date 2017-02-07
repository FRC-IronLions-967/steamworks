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
					echo "<tr><td>$matchnum</td><td class='w3-theme-l2'>$red1</td><td class='w3-theme-l2'>$red2</td><td class='w3-theme-l2 right'>$red3</td>";
					echo "<td class='b'>$blue1</td><td class='b'>$blue2</td><td class='b'>$blue3</td></tr>\n";
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