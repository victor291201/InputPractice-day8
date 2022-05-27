var bol = false;
var btn6 = document.getElementById("btn-6")
btn6.addEventListener("click",(e)=>{
    if(bol){
        document.getElementById("ctn-6").classList.remove("ctn-62")
        bol = !bol
    }
    else{
        document.getElementById("ctn-6").classList.add("ctn-62")
        bol = !bol
    }
})