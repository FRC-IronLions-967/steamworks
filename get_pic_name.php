<?php
ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);
require_once('db.php');

if (file_exists("pics/{$_GET['team']}.jpg")) {   
	$picfile = "pics/{$_GET['team']}.jpg";
}
else if (file_exists("pics/{$_GET['team']}.jpeg")) {   
	$picfile = "pics/{$_GET['team']}.jpeg";
}
else if (file_exists("pics/{$_GET['team']}.png")) {   
	$picfile = "pics/{$_GET['team']}.png";
}
else if (file_exists("pics/{$_GET['team']}.JPG")) {   
	$picfile = "pics/{$_GET['team']}.JPG";
}
else if (file_exists("pics/{$_GET['team']}.JPEG")) {   
	$picfile = "pics/{$_GET['team']}.JPEG";
}
else if (file_exists("pics/{$_GET['team']}.PNG")) {   
	$picfile = "pics/{$_GET['team']}.PNG";
}
else {
	$picfile ="pics/nopic.jpg";
}
echo $picfile;
?>