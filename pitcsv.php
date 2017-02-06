<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);

//load field names
$field_list = file('pit_field_list.txt', FILE_IGNORE_NEW_LINES);
$fields = implode(',',$field_list);

//database query
require_once('db.php');
$sql = "SELECT $fields FROM pit ORDER BY team";
$result = mysqli_query($conn,$sql);
$filename = 'pitscouting.csv';
$f = fopen('php://memory', 'w'); 

//header rows
//change first header row, because starting a CSV with "ID" makes excel throw a filetype error (??)
$field_list[0] = "pit_ID";
fputcsv($f, $field_list);
//data rows
while ($row=mysqli_fetch_assoc($result)){
	fputcsv($f,$row);
}
fseek($f, 0);
header('Content-Type: application/csv');
header('Content-Disposition: attachment; filename="'.$filename.'";');
fpassthru($f);

mysqli_close($conn);
?>

