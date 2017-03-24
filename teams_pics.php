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
		<div class="w3-panel w3-theme-l3 w3-padding-large w3-round-xxlarge w3-border w3-border-black w3-center"><h1>2017 FRC Team List</h1></div>

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

			<table>
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
				echo "<tr><td>$teamnum $nickname<br>\n";
				echo "<img src='pics/{$teamnum}.jpg' alt='No Picture' style='max-width: 250px'><br></td></tr>\n";
			}
			
			// $blue1 = $sched[36]['alliances']['blue']['teams'][0];
			// echo "Blue 1: ".$blue1;
			//echo "<br>".gettype($sched);
			?>
			</table>

		</div>
	</body>
</html>