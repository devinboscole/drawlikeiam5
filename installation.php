<?php
$timestamp = $_POST['timestamp'];
//create an array and see if there is an img file then reads all of img files into the array
$files = array();
if ($handle = opendir('./images')) {
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != "..") {
            $file_time = explode(".", explode("-", $file)[1])[0];
            if ($file_time > $timestamp) {
                  $files[$file_time] = $file;
            }
        }
    }
    closedir($handle);

    // sort
    krsort($files);

    $length = min (340, count($files));
    if ($length > 0) {
        reset($files);
$timestamp = key($files);
    } 
    echo json_encode (array('timestamp' => $timestamp, "array" =>(array_values (array_slice($files, 0, $length)))));
////    for ($x = 0; $x <= length; $x++) {
//    echo "The number is: $x <br>";
//} 
    
    // find the last modification
//    $reallyLastModified = end($files);
//
//    foreach($files as $file) {
//        $lastModified = date('F d Y, H:i:s',filemtime($file));
//        if(strlen($file)-strpos($file,".swf")== 4){
//           if ($file == $reallyLastModified) {
//             // do stuff for the real last modified file
//           }
//           echo "<tr><td><input type=\"checkbox\" name=\"box[]\"></td><td><a href=\"$file\" target=\"_blank\">$file</a></td><td>$lastModified</td></tr>";
//        }
//    }
}
?>
