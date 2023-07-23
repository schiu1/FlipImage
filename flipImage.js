function FlipImage(axis, img){
    const i = document.getElementById(img);
    if(axis == "x"){
        i.style.transform = "scaleX(1)";
    }
    else if (axis == "-x"){
        i.style.transform = "scaleX(-1)";
    }
    else if (axis == "y"){
        i.style.transform = "scaleY(1)";
    }
    else if (axis == "-y"){
        i.style.transform = "scaleY(-1)";
    }
}