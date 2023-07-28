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
    if(history.get(container) == "" || history.get(container) == axis){
        document.querySelector(container).classList.toggle("flip" + axis.toUpperCase());
        if(history.get(container) == ""){
            history.set(container, axis);
        }
        else if (history.get(container) == axis){
            history.set(container, "");
        }
    }
}