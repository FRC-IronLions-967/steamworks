<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
require_once 'db.php';

$fields = 'ID, matchnum, team';
$field_list = preg_split ('/[\s*,\s*]*,+[\s*,\s*]*/', $fields);

//Create header row for report
echo "<table>\n<tr>";
foreach($field_list as $fieldname){
	echo "<th>".$fieldname."</th>";	
}
echo "</tr>\n";

//Create a table of match results, looping through every field of every row
$sql = "SELECT $fields FROM matches";
if($result = mysqli_query($conn,$sql)){
	while($row = mysqli_fetch_assoc($result)){
		echo "<tr>";
		foreach($field_list as $fieldname){
			echo "<td>".$row[$fieldname]."</td>";
		}
		echo "</tr>\n";
	}
}
echo "</table>";
mysqli_close($conn);
?>