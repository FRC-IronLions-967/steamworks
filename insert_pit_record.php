<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
require_once 'db.php';

$field_list = file('pit_field_list.txt', FILE_IGNORE_NEW_LINES);
//remove the first value (ID) since it is an auto_increment field that we don't include in the insert query
array_shift($field_list);
$fields = implode(',',$field_list);

$values_list = array();
foreach($field_list as $field_name){
	if($field_name=="timestamp"){
		$values_list[] = "ADDTIME(NOW(), '1:00:00')";
	}	
	else if($field_name=="pit_comments"){
		$escaped_comments = mysqli_real_escape_string($conn,$_POST[$field_name]);
		$values_list[] = "'$escaped_comments'";
	}
	else if(isset($_POST[$field_name])){
		$values_list[] = "'{$_POST[$field_name]}'";
	} else {
		$values_list[] = "";
	}
}
$values = implode(',',$values_list);

$sql="INSERT INTO pit ($fields) VALUES ($values)";
if(mysqli_query($conn, $sql)){
echo "Pit Scouting record saved successfully.";
//echo $fields."<br>".$values;
} else{
echo "<br>Error:<br>".$sql."<br>".mysqli_error($conn);
}
mysqli_close($conn);
?>