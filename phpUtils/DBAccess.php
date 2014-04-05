<?php
/**
 * Created by PhpStorm.
 * User: goncalves
 * Date: 05/04/14
 * Time: 15:45
 */


function getDBAccess()
{
    try {
        return new PDO('mysql:host=localhost;dbname=online-playground-database', 'root', '');
    } catch (Exception $e) {
        die("Internal Error Occured, sorry");
    }
}

function getEntityFromId($dbAccess, $id)
{
    $req = $dbAccess->prepare('SELECT * FROM Entity WHERE id = ?');
    $req->execute(array($id));
    $result = null;
    while ($data = $req->fetch()) {
        $result = new Entity($data['id'], $data['x'], $data['y']);
    }
    return $result;
}


function updateEntityPosition($dbAccess, $id, $x, $y)
{
    $req = $dbAccess->prepare('UPDATE Entity SET x = :x_entity,
                            y = :y_entity WHERE id = :id_entity');
    $req->execute(array(
        'x_entity' => $x,
        'y_entity' => $y,
        'id_entity' => $id
    ));
}

?>