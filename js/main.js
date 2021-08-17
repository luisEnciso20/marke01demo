//plantaunoFot1.style.height = 30 + heightRelative + 'px';
//plantaunoFot1.style.animation = 'mover 2s ease-out';
//plantaunoFot1.style.animationFillMode = 'forwards';
window.addEventListener('scroll',function () {

    //PANTALLA
    let tamanioFin = window.innerHeight / 3;
    let tamanioIni = tamanioFin * 2;
    let mitadPosition = window.innerHeight / 2;

    //OBJETOS
    let plantaunoFot1 = this.document.getElementById('plantafot1');
    let positionPlantaUnoFot1 = plantaunoFot1.getBoundingClientRect().top;

    //FOTOGRAMA 1 OBJ 1
    if((positionPlantaUnoFot1 < tamanioIni) && (positionPlantaUnoFot1 > tamanioFin)){
            if(positionPlantaUnoFot1 > mitadPosition){
                let heightRelative =  (tamanioIni - positionPlantaUnoFot1) * 0.2;
                plantaunoFot1.style.height = 25 + heightRelative + 'px';
            }else {
                let heightRelativex = (positionPlantaUnoFot1 - tamanioFin) * 0.2;
                plantaunoFot1.style.height = 25 + heightRelativex + 'px';
            }
    }

    let plantacreceunoFot1 = this.document.getElementById('plantacrecerft1');
    let positionPlantacreceUnoFot1 = plantacreceunoFot1.getBoundingClientRect().top;


    //FOTOGRAMA 1 OBJ 2
    if((positionPlantacreceUnoFot1 < tamanioIni) && (positionPlantacreceUnoFot1 > tamanioFin)){
        if(positionPlantacreceUnoFot1 > mitadPosition){
            let heightRelative =  (tamanioIni - positionPlantacreceUnoFot1) * 0.2;
            plantacreceunoFot1.style.height = 50 + heightRelative + 'px';
        }else {
            let heightRelativex = (positionPlantacreceUnoFot1 - tamanioFin) * 0.2;
            plantacreceunoFot1.style.height = 50 + heightRelativex + 'px';
        }
    }

})

