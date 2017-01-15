<!doctype html>
<html>
<body>
<?php
//Start on character 19, because the JS file includes "var scheduleData = " that we wish to ignore here.
$string =substr(file_get_contents("scheduleData.js"),19);
$sched = json_decode($string, true);
$blue1 = $sched[36]['alliances']['blue']['teams'][0];
echo "Blue 1: ".$blue1;
echo "<br>".gettype($sched);
?>
</body>
</html>