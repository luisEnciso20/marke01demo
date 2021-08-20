//plantaunoFot1.style.height = 30 + heightRelative + 'px';
//plantaunoFot1.style.animation = 'mover 2s ease-out';
//plantaunoFot1.style.animationFillMode = 'forwards';
window.addEventListener('scroll',function () {

    //const main = document.querySelector('#mainconta');
    const section2 = this.document.getElementById('sec2');
    const plantaFt2 = this.document.getElementById('plantaFt2');

    var to1= ((window.innerHeight - 440) / 2) - 30;
    console.log('height')
    console.log(window.innerHeight);
    console.log('top');
    console.log(section2.getBoundingClientRect().top);
    console.log('if1');
    console.log(to1 * 2);
    console.log('if2');
    console.log(to1 - 20);

    if((section2.getBoundingClientRect().top < (to1 * 2)) && (section2.getBoundingClientRect().top > (to1 - 20))){
        plantaFt2.style.transform ="scale(2)";
        //plantaFt2.style.transform = "rotate(50deg)";
        plantaFt2.style.transition = "2s";
        plantaFt2.style.top = "40%";
        section2.style.backgroundColor = "blue";
    }
    else{
        plantaFt2.style.transform ="scale(1)";
        plantaFt2.style.transition = "1s";
        plantaFt2.style.top = "70%";
        //plantaFt2.style.transform = "rotate(1deg)";
        section2.style.backgroundColor = "white";
    }



    //PANTALLA
    //let tamanioFin = window.innerHeight / 3;
    //let tamanioIni = tamanioFin * 2;
    //let mitadPosition = window.innerHeight / 2;

    //OBJETOS
    //let plantaunoFot1 = this.document.getElementById('plantacrecer');
    //let positionPlantaUnoFot1 = plantaunoFot1.getBoundingClientRect().top;
/*
    if((positionPlantaUnoFot1 < tamanioIni) && (positionPlantaUnoFot1 > tamanioFin)){
            if(positionPlantaUnoFot1 > mitadPosition){
                plantaunoFot1.style.maxWidth = '100%';
                console.log('miau');
            }else {

                console.log('ga');
            }
    }else{
        plantaunoFot1.style.maxWidth = '10%';
        console.log('fuera');
    }
*/

/*
    let plantacreceunoFot1 = this.document.getElementById('plantacrecerft1');
    let positionPlantacreceUnoFot1 = plantacreceunoFot1.getBoundingClientRect().top;


    //FOTOGRAMA 1 OBJ 2
    if((positionPlantacreceUnoFot1 < tamanioIni) && (positionPlantacreceUnoFot1 > tamanioFin)){
        if(positionPlantacreceUnoFot1 > mitadPosition){
            let heightRelative =  (tamanioIni - positionPlantacreceUnoFot1) * 0.15;
            plantacreceunoFot1.style.height = 40 + heightRelative + 'px';
        }else {
            let heightRelativex = (positionPlantacreceUnoFot1 - tamanioFin) * 0.15;
            plantacreceunoFot1.style.height = 40 + heightRelativex + 'px';
        }
    }


    let plantacreceuno2Fot1 = this.document.getElementById('plantacrecer2ft1');
    let positionPlantacreceDosFot1 = plantacreceuno2Fot1.getBoundingClientRect().top;


       //FOTOGRAMA 1 OBJ 3
       if((positionPlantacreceDosFot1 < tamanioIni) && (positionPlantacreceDosFot1 > tamanioFin)){
           if(positionPlantacreceDosFot1 > mitadPosition){
               let heightRelative =  (tamanioIni - positionPlantacreceDosFot1) * 0.15;
               plantacreceuno2Fot1.style.height = 40 + heightRelative + 'px';
           }else {
               let heightRelativex = (positionPlantacreceDosFot1 - tamanioFin) * 0.15;
               plantacreceuno2Fot1.style.height = 40 + heightRelativex + 'px';
           }
       }
*/
})

