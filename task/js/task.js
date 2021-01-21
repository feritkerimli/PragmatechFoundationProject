/*


<section id="gallery">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="box">
                        <img src="img/1.jpg" alt="">
                    </div>
                </div>
                <div class="col-4">
                    <div class="box">
                        <img src="img/2.jpg" alt="">
                    </div>
                </div>
                <div class="col-4">
                    <div class="box">
                        <img src="img/3.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <div class="box">
                        <img src="img/4.jpg" alt="">
                    </div>
                </div>
                <div class="col-4">
                    <div class="box">
                        <img src="img/5.jpg" alt="">
                    </div>
                </div>
                <div class="col-4">
                    <div class="box">
                        <img src="img/6.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>


*/

var container=document.createElement('div');
container.className='container';

for(var i=0;i<2;i++){
    var row=document.createElement('div');
    row.className='row';
    for(var j=0;j<3;j++){
        var col=document.createElement('div');
        col.className='col-4';
        var box=document.createElement('div');
        box.className='box';
        col.appendChild(box);
        row.appendChild(col);

    }
    container.appendChild(row);
}
document.querySelector("#gallery").appendChild(container);

// <img src="img/1.jpg">
var imgs=['<img src="img/1.jpg">','<img src="img/2.jpg">','<img src="img/3.jpg">','<img src="img/4.jpg">','<img src="img/5.jpg">','<img src="img/6.jpg">']
var boxs=document.querySelectorAll('.box');
for(var i=0;i<6;i++){
    boxs[i].innerHTML=imgs[i];
}



