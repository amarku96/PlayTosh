<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $ip = $_SERVER['REMOTE_ADDR'];
    $date = date("Y-m-d H:i:s");

    $log = "{$ip}, {$date}, {$id}\n";

    file_put_contents('click.log', $log, FILE_APPEND);
}
?>
