<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);

require_once('db.php');
$sql = "SELECT team, matchnum, scout_name, auto_gear_made, auto_gear_miss, tele_gear_made, tele_gear_miss, auto_high_made, auto_high_miss, auto_low_made, tele_high_made, tele_high_miss, tele_low_made, climb_made, climb_miss, technical, nontechnical, defense, auto_incap, tele_incap, baseline, comments FROM matches WHERE team={$_GET['team']} ORDER BY matchnum";
$result = mysqli_query($conn,$sql);
$array = [];
while ($row = mysqli_fetch_assoc($result)){
$array[] = $row;
}

echo json_encode($array);
mysqli_close($conn);
?>