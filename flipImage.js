let flippedX = false;
let flippedNegX = false;
let flippedY = false;
let flippedNegY = false;
function FlipImage(axis, container){
    if(axis == "x" && !flippedNegX && !flippedY & !flippedNegY){
        document.querySelector(container).classList.toggle("flipX");
        flippedX = !flippedX;
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