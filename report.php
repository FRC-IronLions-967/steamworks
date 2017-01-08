<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
require_once 'db.php';
$fields = 'ID, matchnum, team';
//$field_list = preg_split ('/[\s*,\s*]*,+[\s*,\s*]*/', $fields);
$sql = "SELECT $fields FROM matches";
if($result = mysqli_query($conn,$sql)){
	while($row = mysqli_fetch_assoc($result)){
		//echo $row['ID'].", ".$row['matchnum'].", ".$row['team']."<br>";		
		echo implode(", ", $row)."<br";
	}
}

mysqli_close($conn);
?>