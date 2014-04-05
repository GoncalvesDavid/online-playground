<?php
/**
 * Created by PhpStorm.
 * User: goncalves
 * Date: 05/04/14
 * Time: 18:57
 */;
$condition = isset($_POST['id']);
$condition = $condition && isset($_POST['x']);
$condition = $condition && isset($_POST['y']);

if ($condition) {
    echo "lol";
    include_once("../phpUtils/DBAccess.php");
    $dbAccess = getDBAccess();
    updateEntityPosition($dbAccess, $_POST['id'], $_POST['x'], $_POST['y']);
}



?>