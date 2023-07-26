function FlipImage(axis, img){
    const i = document.getElementById(img);
    if(axis == "x"){
        document.querySelector(".flipContainer").classList.toggle("flip");
    }
    else if (axis == "-x"){
        i.style.transform = "rotateY(-180deg)";
    }
    else if (axis == "y"){
        i.style.transform = "scaleY(1)";
    }
    else if (axis == "-y"){
        i.style.transform = "scaleY(-1)";
    }
}