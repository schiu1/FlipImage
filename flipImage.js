let flippedX = false;
let flippedNegX = false;
let flippedY = false;
let flippedNegY = false;
function FlipImage(axis, img){
    const i = document.getElementById(img);
    if(axis == "x" && !flippedNegX && !flippedY & !flippedNegY){
        document.querySelector(".flipContainer").classList.toggle("flipX");
        flippedX = !flippedX;
    }
    else if (axis == "-x" && !flippedX && !flippedY & !flippedNegY){
        document.querySelector(".flipContainer").classList.toggle("flip-X");
        flippedNegX = !flippedNegX;
    }
    else if (axis == "y" && !flippedNegX && !flippedX & !flippedNegY){
        document.querySelector(".flipContainer").classList.toggle("flipY");
        flippedY = !flippedY;
    }
    else if (axis == "-y" && !flippedNegX && !flippedX & !flippedY){
        document.querySelector(".flipContainer").classList.toggle("flip-Y");
        flippedNegY = !flippedNegY;
    }
}