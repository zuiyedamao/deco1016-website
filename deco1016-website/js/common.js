{
    var user=document.querySelector(".user");
    var login=document.querySelector(".login");
    user.onmouseover=function () {
        login.style.display="block";
    };
    user.onmouseout=function () {
        login.style.display="none";
    }
}