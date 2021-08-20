//plantaunoFot1.style.height = 30 + heightRelative + 'px';
//plantaunoFot1.style.animation = 'mover 2s ease-out';
//plantaunoFot1.style.animationFillMode = 'forwards';
window.addEventListener('scroll',function () {


    //////////////////1
    const sec1 = this.document.getElementById('sec1');
    const Planta1Ft1 = this.document.getElementById('Planta1Ft1');
    const Planta2Ft1 = this.document.getElementById('Planta2Ft1');
    var to1= ((window.innerHeight - 480) / 2) - 30;
    if((sec1.getBoundingClientRect().top < (to1 * 2)) && (sec1.getBoundingClientRect().top > (to1 - 20))){
        Planta1Ft1.style.transform ="scale(2)";
        Planta1Ft1.style.transition = "2s";
        Planta1Ft1.style.top = "46%";
        Planta2Ft1.style.transform ="scale(2)";
        Planta2Ft1.style.transition = "2s";
        Planta2Ft1.style.top = "60%";
    }else{
        Planta1Ft1.style.transform ="scale(1)";
        Planta1Ft1.style.top = "50%";
        Planta2Ft1.style.transform ="scale(1)";
        Planta2Ft1.style.top = "64.5%";
    }


    //////////////////2
    const section2 = this.document.getElementById('sec2');
    const plantaFt2 = this.document.getElementById('plantaFt2');
    var to2= ((window.innerHeight - 440) / 2) - 30;
    console.log('height')
    console.log(window.innerHeight);
    console.log('top');
    console.log(section2.getBoundingClientRect().top);
    console.log('if1');
    console.log(to2 * 2);
    console.log('if2');
    console.log(to2 - 20);

    if((section2.getBoundingClientRect().top < (to2 * 2)) && (section2.getBoundingClientRect().top > (to2 - 20))){
        plantaFt2.style.transform ="scale(2)";
        //plantaFt2.style.transform = "rotate(50deg)";
        plantaFt2.style.transition = "2s";
        plantaFt2.style.top = "65.5%";
        plantaFt2.style.left = "20.5%";
        //section2.style.backgroundColor = "blue";
    }
    else{
        plantaFt2.style.transform ="scale(1)";
        plantaFt2.style.transition = "1s";
        plantaFt2.style.top = "70%";
        plantaFt2.style.left = "20%";
        //plantaFt2.style.transform = "rotate(1deg)";
        //section2.style.backgroundColor = "white";
    }

    //////////////////3
    const sec3 = this.document.getElementById('sec3');
    const mano1Ft3 = this.document.getElementById('mano1Ft3');
    const mano2Ft3 = this.document.getElementById('mano2Ft3');

    var to3= ((window.innerHeight - 550) / 2) - 30;
    if((sec3.getBoundingClientRect().top < (to3 * 2)) && (sec3.getBoundingClientRect().top > (to3 - 50))){
        //mano1Ft3.style.transform = "skewX(40deg)";
        mano1Ft3.style.transform = "rotateZ(10deg)";
        mano1Ft3.style.top = "36.5%";
        mano1Ft3.style.left = "34%";
        mano1Ft3.style.transition = "2s";
        mano2Ft3.style.transform = "skewX(20deg)";
        mano2Ft3.style.transform = "rotateZ(-12deg)";
        mano2Ft3.style.transition = "2s";
        mano2Ft3.style.top = "33%";
        mano2Ft3.style.left = "26.3%";
    }else{
        mano1Ft3.style.transform = "rotateZ(1deg)";
        mano1Ft3.style.transform = "rotate(1)";
        mano1Ft3.style.top = "34.9%";
        mano1Ft3.style.left = "35.2%";
        mano2Ft3.style.transform = "rotateZ(1deg)";
        mano2Ft3.style.transform = "rotate(1)";
        mano2Ft3.style.top = "35%";
        mano2Ft3.style.left = "25.1%";
    }

    //////////////////4
    const sec4 = this.document.getElementById('sec4');
    const PlantaGra1Ft4 = this.document.getElementById('PlantaGra1Ft4');
    const PlantaGra2Ft4 = this.document.getElementById('PlantaGra2Ft4');
    const Planta1Ft4 = this.document.getElementById('Planta1Ft4');
    const Planta2Ft4 = this.document.getElementById('Planta2Ft4');
    const Planta3Ft4 = this.document.getElementById('Planta3Ft4');

    var to4= ((window.innerHeight - 550) / 2) - 30;
    if((sec4.getBoundingClientRect().top < (to4 * 2)) && (sec4.getBoundingClientRect().top > (to4 - 50))){
        PlantaGra1Ft4.style.transform = "rotateZ(10deg)";
        PlantaGra2Ft4.style.transform = "rotateZ(10deg)";
        PlantaGra1Ft4.style.transition = "2s";
        PlantaGra2Ft4.style.transition = "2s";
        Planta1Ft4.style.transform = "rotateZ(8deg)";
        Planta2Ft4.style.transform = "rotateZ(8deg)";
        Planta3Ft4.style.transform = "rotateZ(8deg)";
        Planta1Ft4.style.transition = "2s";
        Planta2Ft4.style.transition = "2s";
        Planta3Ft4.style.transition = "2s";

    }else{
        Planta1Ft4.style.transform = "rotateZ(1deg)";
        Planta2Ft4.style.transform = "rotateZ(1deg)";
        Planta3Ft4.style.transform = "rotateZ(1deg)";
        PlantaGra1Ft4.style.transform = "rotateZ(1deg)";
        PlantaGra2Ft4.style.transform = "rotateZ(1deg)";
    }

    //////////////////
    const sec5 = this.document.getElementById('sec5');
    const arbolFt5 = this.document.getElementById('arbolFt5');
    const arboitoFt5 = this.document.getElementById('arboitoFt5');
    const planta1Ft5 = this.document.getElementById('planta1Ft5');
    const planta2Ft5 = this.document.getElementById('planta2Ft5');

    var to5= ((window.innerHeight - 550) / 2) - 30;
    if((sec5.getBoundingClientRect().top < (to5 * 2)) && (sec5.getBoundingClientRect().top > (to5 - 50))){
        arbolFt5.style.transform = "rotateZ(10deg)";
        arbolFt5.style.transition = "2s";
        arboitoFt5.style.transform = "rotateZ(10deg)";
        arboitoFt5.style.transition = "2s";
        planta1Ft5.style.transform = "rotateZ(10deg)";
        planta1Ft5.style.transition = "2s";
        planta2Ft5.style.transform = "rotateZ(10deg)";
        planta2Ft5.style.transition = "2s";
    }else{
        arbolFt5.style.transform = "rotateZ(1deg)";
        arboitoFt5.style.transform = "rotateZ(1deg)";
        planta1Ft5.style.transform = "rotateZ(1deg)";
        planta2Ft5.style.transform = "rotateZ(1deg)";
    }


})

