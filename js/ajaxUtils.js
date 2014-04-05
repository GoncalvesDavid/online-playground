/**
 * Created by goncalves on 05/04/14.
 */

function getAjaxReady(target) {
    var result = null;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        result = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        result = new ActiveXObject("Microsoft.XMLHTTP");
    }
    result.open("POST", target, true);
    result.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    return result;
}
