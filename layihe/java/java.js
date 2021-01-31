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

function Yoxla_sual(){
  var _duz1=document.formTest.q1.value;
  var _duz2=document.formTest.q2.value;
  var _duz3=document.formTest.q3.value;
  var correct=0;
  if(_duz1=="duz"){
    correct+=1;
    document.getElementById("sual1").innerHTML="Duzgun";
  }
  else if(_duz1==""){
    document.getElementById("sual1").innerHTML="Cavablandirilmayib";
    document.getElementById("label_duz1").style.color="green";
  }
  else{
    document.getElementById("sual1").innerHTML="Sehv";
    document.getElementById("label_duz1").style.color="green";

  }
  if(_duz2=="duz"){
    correct+=1;
    document.getElementById("sual2").innerHTML="Duzgun";
  }
  else if(_duz2==""){
    document.getElementById("sual2").innerHTML="Cavablandirilmayib";
    document.getElementById("label_duz2").style.color="green";
  }
  else{
    document.getElementById("sual2").innerHTML="Sehv";
    document.getElementById("label_duz2").style.color="green";
  }
  if(_duz3=="duz"){
    correct+=1;
    document.getElementById("sual3").innerHTML="Duzgun";
  }
  else if(_duz3==""){
    document.getElementById("sual3").innerHTML="Cavablandirilmayib";
    document.getElementById("label_duz3").style.color="green";
  }
  else{
    document.getElementById("sual3").innerHTML="Sehv";
    document.getElementById("label_duz3").style.color="green";
  }
  if(correct==1){
    document.getElementById("say_duz").innerHTML="1";
  }
  else if(correct==2){
    document.getElementById("say_duz").innerHTML="2";
  }
  else if(correct==3){
    document.getElementById("say_duz").innerHTML="3";
  }
  
}

function create(){
  var username=document.querySelectorAll(".username");
  var regist_cost=[]
  for(var i=0;i<username.length;i++){
    if(username[i].value!=""){
      regist_cost.push(username[i].value)
    }
  }
  //username symbol barier
  var usernameCost=document.getElementById("username").value;
  if(usernameCost.length<5 || usernameCost.length>14){
    document.getElementById("usernameWarning").style.display="block"
  }
  //pasword symbol barier
  var paswordCost=document.getElementById("pasword").value;
  if(paswordCost.length<6 || paswordCost.length>14){
    document.getElementById("paswordWarning").style.display="inline-block";
    document.getElementById("paswordRow").style.display="block";
  }
  //pasword==repasword
  var repaswordCost=document.getElementById("repasword").value;
  if(paswordCost!=repaswordCost){
    document.getElementById("repaswordWarning").style.display="inline-block";
    document.getElementById("paswordRow").style.display="block";
  }
  //name symbol barier
  var nameCost=document.getElementById("name").value;
  if(nameCost.length<3 || nameCost.length>19){
    document.getElementById("nameWarning").style.display="inline-block";
    document.getElementById("nameRow").style.display="block";
  }
  //surname symbol barier 
  var surnameCost=document.getElementById("surname").value;
  if(surnameCost.length<3 || surnameCost.length>19){
    document.getElementById("surnameWarning").style.display="inline-block";
    document.getElementById("nameRow").style.display="block";
  }
  //xanalarin hamisi yazilmadiqda
  if(regist_cost.length!=8){
    document.getElementById("regist-warning").style.display="block";
  }

}


function signIn(){
  var username=document.querySelectorAll(".sign-input");
  var sign_cost=[]
  for(var i=0;i<username.length;i++){
    if(username[i].value!=""){
      regist_cost.push(username[i].value)
    }
  }
  //username symbol barier
  var signusernameCost=document.getElementById("signusername").value;
  if(signusernameCost.length<5 || signusernameCost.length>14){
    document.getElementById("signNameWarning").style.display="inline-block";
    document.getElementById("signInRow").style.display="block";
  }
  var signpaswordCost=document.getElementById("signpasword").value;
  if(signpaswordCost.length<5 || signpaswordCost.length>14){
    document.getElementById("signPaswordWarning").style.display="inline-block";
    document.getElementById("signInRow").style.display="block";
  }

  if(sign_cost.length!=2){
    document.getElementById("signInWarning").style.display="block";
  }
}

function losePasword(){
  var losePasword=document.getElementById("losePasword").value;
  if(losePasword==""){
    document.getElementById("losePaswordWarning").style.display="block";
  }
}
//test bolmesine onmouseover edende
function testOpen(){
  var test=document.getElementById("dropdown-menu");
  test.style.display="block";
}
// test bolmesine onmouseout edende
function testClose(){
  var test=document.getElementById("dropdown-menu");
  test.style.display="none";
}



