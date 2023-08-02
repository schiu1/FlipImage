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
    
    if(link.match(/\.(jpeg|jpg|png)/) == null){ 
        alert("Not a valid image type. (JPEG/JPG/PNG)");
        return; 
    }
    
    const request = new XMLHttpRequest();
    request.open("GET", link, false);
    request.send();
    if(request.status != 200){
        alert("Image does not exist.");
        return;
    }
    
    const nodeList = document.querySelectorAll('img');
    for(let i = 0; i < nodeList.length; i++){
        nodeList[i].onload = function(){
            nodeList[i].style.height = "268px";
            nodeList[i].style.width = "300px";
            console.log(i.toString() + ": " + nodeList[i].height.toString() + " x " 
            + nodeList[i].height.toString());
        }
        console.log(i.toString() + ": " + nodeList[i].height.toString() + " x " 
            + nodeList[i].height.toString());
        nodeList[i].src = link;
    }
}