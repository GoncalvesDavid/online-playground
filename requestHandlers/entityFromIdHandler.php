<?php
/**
 * Created by PhpStorm.
 * User: goncalves
 * Date: 05/04/14
 * Time: 15:50
 */
session_start();
if (isset($_POST['id'])) {
    include_once("../phpUtils/DBAccess.php");
    include_once("../phpClasses/Entity.class.php");
    $dbAccess = getDBAccess();
    $entity = getEntityFromId($dbAccess, $_POST['id']);
    echo json_encode($entity);

}


?>