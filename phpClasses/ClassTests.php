<?php
/**
 * Created by PhpStorm.
 * User: goncalves
 * Date: 05/04/14
 * Time: 16:36
 */


function testPositionClass()
{
}

function testEntityClass()
{
    include_once('Entity.class.php');
    $e = new Entity(1, 50, 50);
    echo $e->id;
    echo $e->x;
    echo $e->y;
}

testPositionClass();
testEntityClass();
?>