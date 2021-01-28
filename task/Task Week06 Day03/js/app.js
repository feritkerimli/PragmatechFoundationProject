$(document).ready(function(){
    $("#text").on("input", function(){
        var movqe=document.querySelector("#movqe").value;
        if(movqe=="top"){
            document.querySelector(".col-8").style.display="block";
            document.getElementById("p_melumat").style.position="absolute";
            document.getElementById("p_melumat").style.height="75px";
            document.getElementById("p_melumat").style.top="0px";
            document.getElementById("p_melumat").style.backgroundColor="grey";
            document.getElementById("p_melumat").style.fontSize="20px";
            document.getElementById("p_melumat").style.width="200px";
            
        }
        else if(movqe==""){
            
            document.getElementById("p_melumat").style.height="75px";
            document.getElementById("p_melumat").style.position="absolute";
            document.getElementById("p_melumat").style.bottom="0px";
            document.getElementById("p_melumat").style.backgroundColor="grey";
            document.getElementById("p_melumat").style.fontSize="20px";
            document.getElementById("p_melumat").style.width="200px";
        }
        else{
          
            document.getElementById("p_melumat").style.height="75px";
            document.getElementById("p_melumat").style.position="absolute";
            document.getElementById("p_melumat").style.bottom="0px";
            document.getElementById("p_melumat").style.backgroundColor="grey";
            document.getElementById("p_melumat").style.fontSize="20px";
            document.getElementById("p_melumat").style.width="200px";
        }
        document.getElementById("p_melumat").style.display="block";
        $("#p_melumat").text($(this).val());
    });
});

$(document).ready(function(){
    $("#Url").on("input", function(){
        var url=document.querySelector("#Url");
        var movqe=document.querySelector("#movqe").value;
        var image=document.querySelector("#image");
        if(movqe=="top"){
            document.querySelector(".col-8").style.display="block";
            document.getElementById("p_melumat").style.position="absolute";
            document.getElementById("p_melumat").style.height="75px";
            document.getElementById("p_melumat").style.top="0px";
            document.getElementById("p_melumat").style.backgroundColor="grey";
            document.getElementById("p_melumat").style.fontSize="20px";
            document.getElementById("p_melumat").style.width="200px";
        }
        else if(movqe==""){
            document.getElementById("p_melumat").style.height="75px";
            document.getElementById("p_melumat").style.position="absolute";
            document.getElementById("p_melumat").style.bottom="0px";
            document.getElementById("p_melumat").style.backgroundColor="grey";
            document.getElementById("p_melumat").style.fontSize="20px";
            document.getElementById("p_melumat").style.width="200px";
        }
        else{
            document.getElementById("p_melumat").style.height="75px";
            document.getElementById("p_melumat").style.position="absolute";
            document.getElementById("p_melumat").style.bottom="0px";
            document.getElementById("p_melumat").style.backgroundColor="grey";
            document.getElementById("p_melumat").style.fontSize="20px";
            document.getElementById("p_melumat").style.width="200px";
        }
        image.setAttribute("src",url.value);
    });
});

