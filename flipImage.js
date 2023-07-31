let flippedX = false;
let flippedNegX = false;
let flippedY = false;
let flippedNegY = false;

const history = new Map();
history.set(".flipContainer", "");
history.set(".flipContainer2", "");
history.set(".flipContainer3", "");
history.set(".flipContainer4", "");

function FlipImage(axis, container, button){
    if(history.get(container) == "" || history.get(container) == axis){
        document.querySelector(container).classList.toggle("flip" + axis.toUpperCase());
        if(history.get(container) == ""){
            history.set(container, axis);
        }
        else if (history.get(container) == axis){
            history.set(container, "");
        }
        document.querySelector(button).classList.toggle("pressed");
    }
}

function ChangeImage(){
    const link = document.getElementById('newImage').value;
    const nodeList = document.querySelectorAll('img');
    if(link.match(/\.(jpeg|jpg|png)$/) == null){ 
        alert("Invalid URL");
        return; 
    }
    for(let i = 0; i < nodeList.length; i++){
        nodeList[i].src = link;
    }
}