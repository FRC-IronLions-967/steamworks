<?php
$curl = curl_init();
$season = $_POST['season'];
$eventcode = $_POST['eventcode'];
$url = "https://www.thebluealliance.com/api/v2/event/{$season}{$eventcode}/matches?X-TBA-App-Id=<FRC967>:<2017ScoutingApp>:<0.2>";
echo $url;
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = "var scheduleData = ".curl_exec($curl);
curl_close($curl);
echo "GET request executed?";
$filename = 'scheduleData.js';
file_put_contents($filename, $result);
?>