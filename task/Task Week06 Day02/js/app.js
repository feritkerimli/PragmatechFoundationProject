var bool=true
function accFunc(elem){
    var accHeader=document.querySelectorAll(".acc-header")
    if(bool){
        for(var i=0;i<accHeader.length;i++){
            accHeader[i].nextElementSibling.setAttribute("id","close");
        }
        elem.nextElementSibling.setAttribute("id","open");
        bool=false
    }
    else{
        elem.nextElementSibling.setAttribute("id","close");
        bool=true
    }

}

/*
#open{
        overflow: hidden;
        width: 100%;
        border: 2px solid rgb(65, 65, 65);
    }
    #close{
        height: 0px;
        overflow: hidden;
    }
*/