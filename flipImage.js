let flippedX = false;
let flippedNegX = false;
let flippedY = false;
let flippedNegY = false;

const history = new Map();
history.set(".flipContainer", "");
history.set(".flipContainer2", "");
history.set(".flipContainer3", "");
history.set(".flipContainer4", "");

function FlipImage(axis, container){
    /*if(axis == "x" && !flippedNegX && !flippedY & !flippedNegY){
        document.querySelector(container).classList.toggle("flipX");
        flippedX = !flippedX;
    }*/
    if(axis == "x" && (history.get(container) == "" || history.get(container) == "x")){
        document.querySelector(container).classList.toggle("flipX");
        if(history.get(container) == ""){
            history.set(container, "x");
        }
        else if (history.get(container) == "x"){
            history.get(container, "");
        }
    }
    else if (axis == "-x" && !flippedX && !flippedY & !flippedNegY){
        document.querySelector(container).classList.toggle("flip-X");
        flippedNegX = !flippedNegX;
    }
    else if (axis == "y" && !flippedNegX && !flippedX & !flippedNegY){
        document.querySelector(container).classList.toggle("flipY");
        flippedY = !flippedY;
    }
    else if (axis == "-y" && !flippedNegX && !flippedX & !flippedY){
        document.querySelector(container).classList.toggle("flip-Y");
        flippedNegY = !flippedNegY;
    }
}