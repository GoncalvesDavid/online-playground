<?php
/**
 * Created by PhpStorm.
 * User: goncalves
 * Date: 05/04/14
 * Time: 14:31
 */

class Position {
    public $x;
    public $y;

    function __construct($x, $y)
    {
        $this->x = $x;
        $this->y = $y;
    }

    public static function zero(){
        return new Position(0,0);
    }

    public function translated($deltaX, $deltaY) {
        return new Position($this->x+$deltaX, $this->y+$deltaY);

    }
}