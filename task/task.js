/*
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
console.log("Massivdeki ikireqemli ededlerin sayi:"+say_ikireqemli);
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