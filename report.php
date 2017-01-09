<!doctype html>
<html>
<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);

require_once 'db.php';

//Field names are in an external file so more can be added without changing PHP code
$field_list = file('db_fields.txt', FILE_IGNORE_NEW_LINES);
$fields = implode(',',$field_list);

//Create table header row from field names
echo "<table>\n<tr>";
foreach($field_list as $fieldname){
	echo "<th>".$fieldname."</th>";	
}
echo "</tr>\n";

//Create a table of match results, looping through every field of every row
$sql = "SELECT $fields FROM matches";
//echo "<p>".$sql."</p>";
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
<p><a href="index.html">Input Form</a></p>
</html>