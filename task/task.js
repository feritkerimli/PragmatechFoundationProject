/*
Task-Week05-Day01
var ededler=[1,3,4,90,23,890,12,30,4,3,67,21];
var cem=0;
// Massivdeki ededlerin cemini tapan kod
for(var i=0;i<12;i++){
    cem+=ededler[i]
}
console.log("Massivdeki ededlerin cemi:"+cem);
// Massivdeki cut ededlerin cemini tapan kod
var cem_cut=0;
for(var i=0;i<12;i++){
    if(ededler[i]%2==0){
        cem_cut+=ededler[i]
    }
}
console.log("Massivdeki cut ededlerin cemi:"+cem_cut);
// Massivdeki tek ededlerin cemini tapan kod
var cem_tek=0;
for(var i=0;i<12;i++){
    if(ededler[i]%2!=0){
        cem_tek+=ededler[i]
    }
}
console.log("Massivdeki tek ededlerin cemi:"+cem_tek);
//Massivde nece tekrarlanan eded oldugunu tapan kod
var say_tekrar=0;
for(var i=0;i<12;i++){
    for(var j=i+1;j<12;j++){
        if(ededler[i]==ededler[j]){
            say_tekrar+=1
        }
    }
}
console.log("Massivdeki tekrarlanan ededlerin sayi:"+say_tekrar);
// Massivdeki ikireqemli ededlerin sayini gosteren kod
var say_ikireqemli=0;
for(var i=0;i<12;i++){
    if(Number(ededler[i]/10)>1 && Number(ededler[i]/10)<10){
        say_ikireqemli+=1;
    }
}
onsole.log("Massivdeki ikireqemli ededlerin sayi:"+say_ikireqemli);
// Massivdeki ededleri azalan sira ile ekrana yazdiran kod
var massiv=[1,3,4,90,23,890,12,30,4,3,67,21];
var azalan='';
for(var i=890;i>0;--i){
    for(var j=0;j<12;j++){
        if(i==massiv[j]){
            azalan+=" "+massiv[j];  
        }
    }
}
console.log("Massivdeki ededlerin azalan sirasi:"+azalan);
*/



/*
Task-in-Lesson 
var cars=[];
class car{
    constructor(_carName,_carModel,_carPrice){
        this.Name=_carName,
        this.Model=_carModel,
        this.Price=_carPrice,
        function showCarDetails(){
            return "Name "+this.Name+" "+"Model "+this.Model+" "+"Price "+this.Price;
        }
    }

}
var car1=new car("Niva","Lada",5000);
var car2=new car("Vectra","Opel",8000);
var car3=new car("Samara","Lada",6000);
var car4=new car("x5","Mercedes",15000);
var car5=new car("Portofino","Ferrari",100000);
cars.push(car1,car2,car3,car4,car5);
function showCarByName(carName){
    for(var i=0;i<5;i++){
        if(cars[i].Name==carName){
            return "Name "+cars[i].Name+" "+"Model "+cars[i].Model+" "+"Price "+cars[i].Price;
        }
        else{
            continue;
        }
    }
}
var cars_Price=[];
function showCarsByPrice(carprice){
    for(var i=0;i<5;i++){
        if(cars[i].Price>carprice){
            cars_Price.push(cars[i]);
            
        }
    }
    return cars_Price;
}
*/


userList=[
    {
        name:'Sabir',
        email:'sabir@mail.com',
        userTasks:[
            {
                taskName:'Task01',
                taskDeadline:2
            },
            {
                taskName:'Task02',
                taskDeadline:8
            },
            {
                taskName:'Task03',
                taskDeadline:10
            }
        ]
    },
    {
        name:'Hesen',
        email:'hesen.mail.com',
        userTasks:[
            {
                taskName:'XTask01',
                taskDeadline:2
            },
            {
                taskName:'XTask02',
                taskDeadline:15
            },
            {
                taskName:'XTask03',
                taskDeadline:4
            }
        ]
    }
]

// istifadeci adini daxil etdiyim zaman o istifadecinin tasklarini gosteren function

function findUserTasksByName(userName){
    for(var i=0;i<userList.length;i++){
        if(userList[i].name==userName){
            console.log("istifadecinin tasklari")
            console.log(userList[i].userTasks)
        }
    }

} 

// butun istifadecilerin mail adreslerinin duzgun olub olmadigini yoxlayin (mail daxilinde @ isaretinin olub olmamasi)
    // duzgun olmayan mail adresi varsa o mailin hansi istifadeciye aid oldugunu ekrana cap edin
function userEmailCheck(){
    for(var i=0;i<userList.length;i++){
        var _email=userList[i].email
        var _s=0;
        for(var j=0;j<_email.length;j++){
            if(_email[j]=="@"){
                _s+=1
            }
            else{
                continue
            }
        }
        if(_s==0){
            console.log(userList[i].name)
        }
        else{
            continue
        }
    }
}


// en uzun deadlinea sahib olan taskin adini,muddetini ve o taskin hansi istifadeciye aid oldugunu ekrana cap edin
function findLongestDeadline(){
    var costTask1=[];
    var costTask2=[];
    for(var i=0;i<userList[0].userTasks.length;i++){
        costTask1.push(userList[0].userTasks[i].taskDeadline)
    };
    for(var i=0;i<userList[1].userTasks.length;i++){
        costTask2.push(userList[1].userTasks[i].taskDeadline)
    };
    var costTasks=costTask1.concat(costTask2);
    var azalan=[];
    for(var i=100;i>0;--i){
        for(var j=0;j<costTasks.length;j++){
            if(i==costTasks[j]){
                azalan.push(costTasks[j]);  
            }
        }
    };
    var bigcost=azalan[0];
    var bigCostIndex=0;
    for(var i=0;i<costTasks.length;i++){
        if(costTasks[i]==bigcost){
            bigCostIndex=i;
        }
    }

    if(bigCostIndex<costTask1.length){
        console.log((userList[0].name)+" "+(userList[0].userTasks[bigCostIndex].taskName)+" "+(userList[0].userTasks[bigCostIndex].taskDeadline));
    }
    else{
        console.log("En uzun deadlinea sahib olan taskin sahibi,taskin adi,taskin deadline'si")
        console.log((userList[1].name)+" "+(userList[1].userTasks[bigCostIndex-costTask1.length].taskName)+" "+(userList[1].userTasks[bigCostIndex-costTask1.length].taskDeadline));
    }                                                         

}
