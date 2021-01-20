document.getElementById("sign").addEventListener("onclick",onclick);
document.getElementById("sign").addEventListener("onclick", onclick);
document.getElementById("giris-fon").addEventListener("onclick",onclick);
document.getElementById("giris-fon").addEventListener("onclick", onclick);
document.getElementById("Yoxla").addEventListener("onclick", onclick);

function tikla(){
  document.getElementById("sign").style.display = "block";
  document.getElementById("giris-fon").style.display = "block";
};
function exit(){
    document.getElementById("sign").style.display = "none";
    document.getElementById("giris-fon").style.display = "none";
};
function search(){
  var element=document.getElementById("search").value;
  if((element=="Python") || (element=="python")){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/pyhton.html"
  }
  else if(element=="Ana sehife" || element=="ana sehife"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/anasehife.html"
  }
  else if(element=="Riyaziyyat" || element=="riyaziyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/riyaziyyat.html"
  }
  else if(element=="Haqqinda" || element=="haqqinda"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/haqqinda.html"
  }
  else if(element=="Uzvuluk" || element=="uzvuluk"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/uzvuluk.html"
  }
  else if(element=="Qeydiyyat" || element=="qeydiyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/qeydiyyat.html"
  }
  else if(element=="V.I.P/Python" || element=="v.i.p/python" || element=="vip python"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/viptestpython.html"
  }
  else if(element=="V.I.P/Riyaziyyat" || element=="v.i.p/riyaziyyat" || element=="vip riyaziyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/viptestriyaziyyat.html"
  }
}
function enter(){
  var element=document.getElementById("search").value;
  if((element=="Python") || (element=="python")){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/pyhton.html"
  }
  else if(element=="Ana sehife" || element=="ana sehife"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/anasehife.html"
  }
  else if(element=="Riyaziyyat" || element=="riyaziyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/riyaziyyat.html"
  }
  else if(element=="Haqqinda" || element=="haqqinda"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/haqqinda.html"
  }
  else if(element=="Uzvuluk" || element=="uzvuluk"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/uzvuluk.html"
  }
  else if(element=="Qeydiyyat" || element=="qeydiyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/qeydiyyat.html"
  }
  else if(element=="V.I.P/Python" || element=="v.i.p/python" || element=="vip python"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/viptestpython.html"
  }
  else if(element=="V.I.P/Riyaziyyat" || element=="v.i.p/riyaziyyat" || element=="vip riyaziyyat"){
    document.getElementById("form-search").action="file:///C:/Users/Admin/Desktop/pragmatech/layihe/viptestriyaziyyat.html"
  }
}

var _duz1=document.formTest.q1.value;
var _duz2=document.formTest.q2.value;
var _duz3=document.formTest.q3.value;
var correct=0;
if(_duz1=="duz"){
  correct++;
};
if(_duz2=="duz"){
  correct++
}
if(_duz3=="duz"){
  correct++
}


function Yoxla_sual(){
  document.getElementById("rapor").innerHTML=correct;
  
}