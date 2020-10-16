"use strict"


window.onload = function () {
    let elements = document.getElementsByClassName("special-capitalize");
    for (var i=0; i<elements.length; i++){
        elements[i].innerHTML = elements[i].innerHTML.replace(/\b([A-Za-zА-Яа-я])([A-Za-zА-Яа-я]+)?\b/gim, "<span class='first-letter'>$1</span>$2")
    }
}