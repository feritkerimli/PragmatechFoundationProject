document.getElementById("sign").addEventListener("onclick",onclick);
document.getElementById("sign").addEventListener("onclick", onclick);
document.getElementById("giris-fon").addEventListener("onclick",onclick);
document.getElementById("giris-fon").addEventListener("onclick", onclick);
document.getElementById("labelduz").addEventListener("onclick", onclick);
document.getElementById("submit-btn").addEventListener("onclick", onclick);
document.getElementById("label-c").addEventListener("onclick", onclick);
document.getElementById("label-a").addEventListener("onclick", onclick);

function tikla(){
  document.getElementById("sign").style.display = "block";
  document.getElementById("giris-fon").style.display = "block";
};
function exit(){
    document.getElementById("sign").style.display = "none";
    document.getElementById("giris-fon").style.display = "none";
};

var duz = false;
var a= false;
var b= false;
var sub_btn=false;
var duz_say=0;
function yoxlama(){
  duz = true
  
}
function value_1(){
  a = true
}
function value_2(){
  c = true
}
function testyoxla(){
  if (duz==true){
    duz_say+=1;
    document.getElementById("labelduz").style.color="green";
    document.getElementById("say_duz").innerHTML=duz_say;
  }
  else if(a==true){
    document.getElementById("labelduz").style.color="green";
    document.getElementById("label-a").style.color="red";
  }
  else if(c==true){
    document.getElementById("labelduz").style.color="green";
    document.getElementById("label-c").style.color="red";
  }
};
function reset(){
  duz=false
  a=false
  b=false
}
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