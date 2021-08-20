//plantaunoFot1.style.height = 30 + heightRelative + 'px';
//plantaunoFot1.style.animation = 'mover 2s ease-out';
//plantaunoFot1.style.animationFillMode = 'forwards';
window.addEventListener('scroll',function () {

    //const main = document.querySelector('#mainconta');
    const main = this.document.getElementById('mainconta');
    const section1 = document.querySelector('#sec1');
    const section2 = document.querySelector('#sec2');
    console.log(main.getBoundingClientRect().top);
    if (main.getBoundingClientRect().top * -1 > 50) {
        console.log('ga');
        section1.style.backgroundColor = "red";

    } else {
        console.log('ra');
        section1.style.backgroundColor = "pink";
    }

    if (main.getBoundingClientRect().top * -1 > window.innerHeight / 2) {
        section2.style.backgroundColor = "blue";
    } else {
        section2.style.backgroundColor = "purple";
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

