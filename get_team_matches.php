<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);

require_once('db.php');
$sql = "SELECT team, matchnum, auto_gear_made, auto_gear_miss, tele_gear_made, tele_gear_miss, climb_made, climb_miss FROM matches WHERE team={$_GET['team']} ORDER BY matchnum";
$result = mysqli_query($conn,$sql);
while ($row = mysqli_fetch_assoc($result)){
$array[] = $row;
}

echo json_encode($array);
mysqli_close($conn);
?>