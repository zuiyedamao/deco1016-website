function change_pic(){
    var button = document.getElementById("left");
    var picts = document.getElementById("left");
    button.onclick = function(){
    if(picts.getAttribute("src",2) == "../images/detail.jpg"){
    picts.setAttribute("src","../images/detail2.jpg");
    }else{
    picts.setAttribute("src","../images/detail.jpg");
    };
    }
    }