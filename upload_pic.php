<?php
// W3schools Link:
// http://www.w3schools.com/php/php_file_upload.asp
$orig_name = basename($_FILES["fileToUpload"]["name"]);
$ext = $ext = end((explode(".", $orig_name)));
$new_name = $_POST['team'].".".$ext;
$target_dir = "pics/";
$target_file = $target_dir.$new_name;
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . "."."<br>";
        $uploadOk = 1;
    } else {
        echo "File is not an image."."<br>";
        $uploadOk = 0;
    }
}
if (file_exists($target_file)) {
    echo "Sorry, file already exists."."<br>";
    $uploadOk = 0;
}
if ($_FILES["fileToUpload"]["size"] > 400000) {
    echo "Sorry, your file is too large (max = 400K)."."<br>";
    $uploadOk = 0;
}
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
    echo "Sorry, only JPG, JPEG, & PNG files are allowed."."<br>";
    $uploadOk = 0;
}
if($_POST['team']==""){
    echo "File not uploaded. Select a team."."<br>";
    $uploadOk = 0;
}
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded."."<br>";
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". $new_name ." has been uploaded."."<br>";
    } else {
        echo "Sorry, there was an error uploading your file."."<br>";
    }
}
echo '<p><a href="javascript:history.back()">Go Back</a></p>';
?>