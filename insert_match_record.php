<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
require_once 'db.php';

$field_list = file('db_fields.txt', FILE_IGNORE_NEW_LINES);
//remove the first value (ID) since it is an auto_increment field that we don't include in the insert query
array_shift($field_list);
$fields = implode(',',$field_list);

$values_list = array();
foreach($field_list as $field_name){
	if($field_name=="timestamp"){
		$values_list[] = "ADDTIME(NOW(), '1:00:00')";
	}	
	else if(isset($_POST[$field_name])){
		$values_list[] = "'{$_POST[$field_name]}'";
	} else {
		$values_list[] = "0";
	}
}
$values = implode(',',$values_list);

$sql="INSERT INTO matches ($fields) VALUES ($values)";
if(mysqli_query($conn, $sql)){
echo "Match record saved successfully.";
//echo $fields."<br>".$values;
} else{
echo "<br>Error:<br>".$sql."<br>".mysqli_error($conn);
//how to get the error in procedural style?
}
mysqli_close($conn);
?>