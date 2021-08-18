var micanvas = document.getElementById("micanvas");
var ctx = micanvas.getContext("2d");
var miimagen = new Image();
var miimagen2 = new Image();
miimagen2.src="img/fot4/fot4_ESTATICO.png";
miimagen.src="img/fot4/fot4_planta1.png";


miimagen2.onload = function (){
    ctx.drawImage(miimagen2,55,290);
}
miimagen.onload = function (){
    ctx.drawImage(miimagen,196,206);
}


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





})

