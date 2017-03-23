<!doctype html>
<html>
<head>
	<title>Team Report</title>
</head>
<body>

<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
require_once('db.php');

if (file_exists("pics/{$_GET['team']}.jpg")) {   
	$picfile = "pics/{$_GET['team']}.jpg";
}
else if (file_exists("pics/{$_GET['team']}.jpeg")) {   
	$picfile = "pics/{$_GET['team']}.jpeg";
}
else if (file_exists("pics/{$_GET['team']}.png")) {   
	$picfile = "pics/{$_GET['team']}.png";
}
else {
	$picfile ="pics/nopic.jpg";
}

echo "<img src='$picfile' style='max-width: 300px'><br>";

$sql = "SELECT height, orient, drivetype, transmission, driveMotors, speed, wheelDiam, weight, hopper_size, build_appearance, wiring_appearance FROM pit WHERE team={$_GET['team']}";
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0){
	$row=mysqli_fetch_assoc($result);
	$vars = array_filter(array($row['height'],$row['orient'],$row['drivetype'], $row['driveMotors'].'CIM', $row['transmission'],$row['speed']." ft/s"));
	echo implode(',',$vars);
	//echo "<p>".$row['height'].", ".$row['orient'].", ".$row['drivetype']."</p>";
}
else{
	echo 'No pit scouting data.<br>';
}

$sql = "SELECT matchnum, tele_high_made, tele_high_miss, 
	tele_gear_made, tele_gear_miss FROM matches WHERE team={$_GET['team']} ORDER BY matchnum";
$result = mysqli_query($conn,$sql);

if(mysqli_num_rows($result)>0){
	?>
	<table><tr>
		<th>M#</th>
		<th>High</th>
		<th>Miss</th>
		<th>Gear</th>
		<th>Miss</th></tr>
	<?php
	while ($row=mysqli_fetch_assoc($result)){
		$matchnum = $row['matchnum'];
		$tele_high_made = $row['tele_high_made'];
		$tele_high_miss = $row['tele_high_miss'];
		$tele_gear_made = $row['tele_gear_made'];
		$tele_gear_miss = $row['tele_gear_miss'];
		echo "<tr>";
		echo "<td>$matchnum</td>";
		echo "<td>$tele_high_made</td>";
		echo "<td>$tele_high_miss</td>";
		echo "<td>$tele_gear_made</td>";
		echo "<td>$tele_gear_miss</td>";
		echo "</tr>";
	}
	echo "</table>";
}
else{
	echo "No match data.";
}
mysqli_close($conn);
?>
</body>
</html>