function FlipImage(axis){
    const i = document.getElementById('image');
    if(axis == "x"){
        i.style.transform = "scaleX(1)";
    }
    else if (axis == "-x"){
        i.style.transform = "scaleX(-1)";
    }
}