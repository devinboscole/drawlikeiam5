<?php
$img = $_POST['imgBase64'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$fileData = base64_decode($img);
//saving
$category = $_POST['category'];
$milliseconds = round(microtime(true) * 1000);
//saves in an image folder
$fileName = "images/"+$category+'-'+(string)$milliseconds+'.png';
//string file name
file_put_contents($fileName, $fileData);
?>