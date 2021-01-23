document.querySelector('.box').innerHTML=`<img src=img/1.jpg >
                                          <button id="btn" onclick="kec1()"><i class="fas fa-chevron-right"></i></button>
                                          <button id="btn-left" onclick="qayit1()"><i class="fas fa-chevron-left"></i></button>
                                          <div id="para"><p>Adventurer Cheesecake Brownie</p></div>`;
var boxs=document.querySelectorAll('.box');
//button right
function kec1(){
    var boxs=document.querySelectorAll('.box');
    boxs[0].innerHTML= `<img src=img/2.jpg >
                        <button id="btn" onclick="kec2()"><i class="fas fa-chevron-right"></i></button>
                        <button id="btn-left" onclick="qayit2()"><i class="fas fa-chevron-left"></i></button>
                        <div id="para"><p>Adventurer Lemon</p></div>`
}
function kec2(){
    var boxs=document.querySelectorAll('.box');
    boxs[0].innerHTML= `<img src=img/3.jpg >
                        <button id="btn" onclick="kec3()"><i class="fas fa-chevron-right"></i></button>
                        <button id="btn-left" onclick="qayit3()"><i class="fas fa-chevron-left"></i></button>
                        <div id="para"><p>Adventurer Donut</p></div>`
}
function kec3(){
    var boxs=document.querySelectorAll('.box');
    boxs[0].innerHTML= `<img src=img/4.jpg >
                        <button id="btn" onclick="kec4()"><i class="fas fa-chevron-right"></i></button>
                        <button id="btn-left" onclick="qayit4()"><i class="fas fa-chevron-left"></i></button>
                        <div id="para"><p>Adventurer Caramel</p></div>`
}
function kec4(){
    var boxs=document.querySelectorAll('.box');
    boxs[0].innerHTML= `<img src=img/1.jpg>
                        <button id="btn" onclick="kec1()"><i class="fas fa-chevron-right"></i></button>
                        <button id="btn-left" onclick="qayit1()"><i class="fas fa-chevron-left"></i></button>
                        <div id="para"><p>Adventurer Cheesecake Brownie</p></div>`
}

//button left
function qayit1(){
    var boxs=document.querySelectorAll('.box');
    boxs[0].innerHTML= `<img src=img/4.jpg >
                        <button id="btn" onclick="kec4()"><i class="fas fa-chevron-right"></i></button>
                        <button id="btn-left" onclick="qayit4()"><i class="fas fa-chevron-left"></i></button>
                        <div id="para"><p>Adventurer Caramel</p></div>`
}
function qayit2(){
    var boxs=document.querySelectorAll('.box');
    boxs[0].innerHTML= `<img src=img/1.jpg >
                        <button id="btn" onclick="kec1()"><i class="fas fa-chevron-right"></i></button>
                        <button id="btn-left" onclick="qayit1()"><i class="fas fa-chevron-left"></i></button>
                        <div id="para"><p>Adventurer Cheesecake Brownie</p></div>`
}
function qayit3(){
    var boxs=document.querySelectorAll('.box');
    boxs[0].innerHTML= `<img src=img/2.jpg >
                        <button id="btn" onclick="kec2()"><i class="fas fa-chevron-right"></i></button>
                        <button id="btn-left" onclick="qayit2()"><i class="fas fa-chevron-left"></i></button>
                        <div id="para"><p>Adventurer Lemon</p></div>`
}
function qayit4(){
    var boxs=document.querySelectorAll('.box');
    boxs[0].innerHTML= `<img src=img/3.jpg>
                        <button id="btn" onclick="kec3()"><i class="fas fa-chevron-right"></i></button>
                        <button id="btn-left" onclick="qayit3()"><i class="fas fa-chevron-left"></i></button>
                        <div id="para"><p>Adventurer Donut</p></div>`
}
// buton visible effeck
function button_visible(){
    document.getElementById('btn').style.display='block';
    document.getElementById('btn-left').style.display='block';
}
function button_none(){
    document.getElementById('btn').style.display='none';
    document.getElementById('btn-left').style.display='none';
}
// inputlar type= radio
boxs[1].innerHTML='<input type="radio" id="1" value="1" name="circle" onclick="circle_1()"><label for="1"></label><input type="radio" id="2" value="2" name="circle" onclick="circle_2()"><label for="2"></label><input type="radio" id="3" value="3" name="circle" onclick="circle_3()"><label for="3"></label><input type="radio" id="4" value="4" name="circle" onclick="circle_4()"><label for="4" ></label>'
 
function circle_1(){
    document.querySelector('.box').innerHTML=`<img src=img/1.jpg >
                                          <button id="btn" onclick="kec1()"><i class="fas fa-chevron-right"></i></button>
                                          <button id="btn-left" onclick="qayit1()"><i class="fas fa-chevron-left"></i></button>
                                          <div id="para"><p>Adventurer Cheesecake Brownie</p></div>`;
}
function circle_2(){
    document.querySelector('.box').innerHTML=`<img src=img/2.jpg >
                                          <button id="btn" onclick="kec2()"><i class="fas fa-chevron-right"></i></button>
                                          <button id="btn-left" onclick="qayit2()"><i class="fas fa-chevron-left"></i></button>
                                          <div id="para"><p>Adventurer Lemon</p></div>`;
}
function circle_3(){
    document.querySelector('.box').innerHTML=`<img src=img/3.jpg >
                                          <button id="btn" onclick="kec3()"><i class="fas fa-chevron-right"></i></button>
                                          <button id="btn-left" onclick="qayit3()"><i class="fas fa-chevron-left"></i></button>
                                          <div id="para"><p>Adventurer Donut</p></div>`;
}
function circle_4(){
    document.querySelector('.box').innerHTML=`<img src=img/4.jpg >
                                          <button id="btn" onclick="kec4()"><i class="fas fa-chevron-right"></i></button>
                                          <button id="btn-left" onclick="qayit4()"><i class="fas fa-chevron-left"></i></button>
                                          <div id="para"><p>Adventurer Caramel</p></div>`;
}
