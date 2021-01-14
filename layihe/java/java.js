document.getElementById("sign").addEventListener("onclick",onclick);
document.getElementById("sign").addEventListener("onclick", onclick);
document.getElementById("giris-fon").addEventListener("onclick",onclick);
document.getElementById("giris-fon").addEventListener("onclick", onclick);
function tikla(){
  document.getElementById("sign").style.display = "block";
  document.getElementById("giris-fon").style.display = "block";
}
function exit(){
    document.getElementById("sign").style.display = "none";
    document.getElementById("giris-fon").style.display = "none";
}
