<?php
/**
 * Created by PhpStorm.
 * User: goncalves
 * Date: 05/04/14
 * Time: 14:26
 */
?>
<script src="js/ajaxUtils.js"></script>
<script src="js/classes/Entity.class.js"></script>
<script src="js/processing.js"></script>
<script>
    var SenderSketch;
    var ReceiverSketch;
    var entity;

    function updateSketches() {
        positions = SenderSketch.getPosition();
        var aj = getAjaxReady("requestHandlers/updatePositionRequest.php");
        aj.onreadystatechange = function () {
            if (aj.readyState == 4 && aj.status == 200) {
                /*entity = JSON.parse(aj.responseText);
                 sketch.setXY(entity.x,entity.y);
                 alert("lol");
                 alert(sketch.getPosition());*/
                //document.write(aj.responseText + "ll");
            }
        }
        //aj.send("id=1");
        aj.send("id=" + 1 + "&x=" + positions[0] + "&y=" + positions[1]);

        var aj2 = getAjaxReady("requestHandlers/entityFromIdHandler.php");
        aj2.onreadystatechange = function () {
            if (aj2.readyState == 4 && aj2.status == 200) {
                entity = JSON.parse(aj2.responseText);
                ReceiverSketch.setXY(entity.x, entity.y);

            }
        }
        aj2.send("id=1");

    }
    window.onload = function () {
        SenderSketch = tryToFindSenderSketch();
        ReceiverSketch = tryToFindReceiverSketch();
    }
    function tryToFindSenderSketch() {
        SenderSketch = Processing.getInstanceById("SenderSketch");
        if (SenderSketch == undefined)
            return setTimeout(tryToFindSenderSketch, 200); // retry soon
    }
    function tryToFindReceiverSketch() {
        ReceiverSketch = Processing.getInstanceById("ReceiverSketch");
        if (ReceiverSketch == undefined)
            return setTimeout(tryToFindReceiverSketch, 200); // retry soon

    }


    //var aj = getAjaxReady("jsonRequestHandlers/positionFromIdHandler.php");
    //var aj = getAjaxReady("jsonRequestHandlers/entityFromIdHandler.php");
    var reloadTimer = window.setInterval(function () {
        updateSketches()
    }, 500);

</script>

<canvas id="SenderSketch" data-processing-sources="sketches/sketches.pde"
        width="100" height="100">
    <p>Your browser does not support the canvas tag.</p>
</canvas>

<canvas id="ReceiverSketch" data-processing-sources="sketches/sketches.pde"
        width="100" height="100">
    <p>Your browser does not support the canvas tag.</p>
</canvas>