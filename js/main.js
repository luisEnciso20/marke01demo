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
    var to2= ((window.innerHeight - 430) / 2) - 30;

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

    //////////////////5
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

    //////////////////6
    const sec6 = this.document.getElementById('sec6');
    const brazo61 = this.document.getElementById('brazo61');
    const brazo62 = this.document.getElementById('brazo62');
    const tierra61 = this.document.getElementById('tierra61');
    const tierra62 = this.document.getElementById('tierra62');

    var to6= ((window.innerHeight - 550) / 2) - 30;
    if((sec6.getBoundingClientRect().top < (to6 * 2)) && (sec6.getBoundingClientRect().top > (to6 - 50))){
        brazo61.style.transform = "rotateZ(8deg)";
        brazo61.style.transition = "2s";
        brazo61.style.top = "43%";
        brazo61.style.left = "7%";
        brazo62.style.transform = "rotateZ(8deg)";
        brazo62.style.transition = "2s";
        brazo62.style.top = "43.4%";
        brazo62.style.left = "13.7%";
        tierra61.style.transform = "rotateZ(7deg)";
        tierra61.style.top = "64%";
        tierra61.style.left = "59%";
        tierra61.style.transition = "2s";
        tierra61.style.opacity = 0;
        tierra62.style.opacity = 1;
        tierra62.style.transition = "6s";

    }else{
        brazo61.style.transform = "rotateZ(1deg)";
        brazo61.style.top = "39.9%";
        brazo61.style.left = "9.8%";
        brazo62.style.transform = "rotateZ(1deg)";
        brazo62.style.top = "39.4%";
        brazo62.style.left = "15.3%";
        tierra61.style.opacity = 1;
        tierra62.style.opacity = 0;
        tierra61.style.transform = "rotateZ(1deg)";
        tierra61.style.top = "50%";
        tierra61.style.left = "33%";
    }
    //////////////////7
    const sec7 = this.document.getElementById('sec7');
    const brazo71 = this.document.getElementById('brazo71');
    const brazo72 = this.document.getElementById('brazo72');
    const barro73 = this.document.getElementById('barro73');
    const barro74 = this.document.getElementById('barro74');

    var to7= ((window.innerHeight - 530) / 2) - 30;
    if((sec7.getBoundingClientRect().top < (to7 * 2)) && (sec7.getBoundingClientRect().top > (to7 - 50))){
        brazo71.style.transform = "rotateZ(8deg)";
        brazo71.style.top = "38%";
        brazo71.style.left = "30%";
        brazo71.style.transition = "2s";

        brazo72.style.transform = "rotateZ(8deg)";
        brazo72.style.left = "39.3%";
        brazo72.style.transition = "2s";

        barro74.style.top = "81%";
        barro74.style.left = "58%";
        barro74.style.transition = "2s";
        barro74.style.opacity = 0;

        barro73.style.opacity = 1;
        barro73.style.transition = "4s";
    }else{
        brazo71.style.transform = "rotateZ(1deg)";
        brazo71.style.top = "36.2%";
        brazo71.style.left = "32.1%";

        brazo72.style.transform = "rotateZ(1deg)";
        brazo72.style.left = "41.5%";

        barro73.style.opacity = 0;
        barro74.style.opacity = 1;
        barro74.style.top = "65%";
        barro74.style.left = "59.3%";
        barro74.style.transition = "1s";

    }

    //////////////////8
    const sec8 = this.document.getElementById('sec8');
    const persona81 = this.document.getElementById('persona81');
    const persona82 = this.document.getElementById('persona82');
    const persona83 = this.document.getElementById('persona83');

    var to8= ((window.innerHeight - 530) / 2) - 30;
    if((sec8.getBoundingClientRect().top < (to8 * 2)) && (sec8.getBoundingClientRect().top > (to8 - 50))){
        persona81.style.transform = "rotateZ(-12deg)";
        persona81.style.transition = "2s";
        persona81.style.top = "37%";
        persona81.style.left = "38.4%";

        persona82.style.top = "62%";
        persona82.style.left = "38%";
        persona82.style.transition = "2s";
        persona82.style.opacity = 0;

        persona83.style.opacity = 1;
        persona83.style.transition = "4s";
    }else{
        persona81.style.transform = "rotateZ(1deg)";
        persona81.style.top = "35%";
        persona81.style.left = "38%";

        persona82.style.top = "47.5%";
        persona82.style.left = "37%";
        persona82.style.opacity = 1;

        persona83.style.opacity = 0;
    }

    //////////////////9
    const sec9 = this.document.getElementById('sec9');
    const brazo91 = this.document.getElementById('brazo91');
    const brazo92 = this.document.getElementById('brazo92');

    var to9= ((window.innerHeight - 530) / 2) - 30;
    if((sec9.getBoundingClientRect().top < (to9 * 2)) && (sec9.getBoundingClientRect().top > (to9 - 50))){

        brazo91.style.transform = "rotateZ(17deg)";
        brazo91.style.transition = "1s";

        brazo92.style.transform = "rotateZ(6deg)";
        brazo92.style.transition = "2s";
        brazo92.style.top = "31%";
        brazo92.style.left = "10%";


    }else{
        brazo91.style.transform = "rotateZ(1deg)";
        brazo92.style.transform = "rotateZ(1deg)";
        brazo92.style.top = "34%";
        brazo92.style.left = "11%";
    }

    //////////////////10
    const sec10 = this.document.getElementById('sec10');
    const fruto102 = this.document.getElementById('fruto102');
    var to10= ((window.innerHeight - 530) / 2) - 30;
    if((sec10.getBoundingClientRect().top < (to10 * 2)) && (sec10.getBoundingClientRect().top > (to10 - 50))){
        fruto102.style.transform = "rotate(1deg)";
        fruto102.style.transition = "2s";
        fruto102.style.top = "31.5%";
        fruto102.style.left = "29.5%";

        fruto101.style.top = "42.7%";
        fruto101.style.left = "38%";
        fruto101.style.transition = "2s";

    }else{
        fruto102.style.transform = "rotate(-47deg)";
        fruto102.style.top = "25.2%";
        fruto102.style.left = "31%";

        fruto101.style.top = "30%";
        fruto101.style.left = "44%";
    }

    //////////////////11
    const sec11 = this.document.getElementById('sec11');
    const brazo111 = this.document.getElementById('brazo111');
    var to11= ((window.innerHeight - 530) / 2) - 30;
    if((sec11.getBoundingClientRect().top < (to11 * 2)) && (sec11.getBoundingClientRect().top > (to11 - 50))){
        brazo111.style.transform = "rotateZ(10deg)";
        brazo111.style.transition = "2s";

        brazo112.style.transform = "rotateZ(-10deg)";
        brazo112.style.transition = "2s";

        hoja113.style.top = "85%";
        hoja113.style.transition = "2s";
        hoja113.style.opacity = 0;

    }else{
        brazo111.style.transform = "rotateZ(1deg)";
        brazo112.style.transform = "rotateZ(1deg)";

        hoja113.style.top = "50%";
        hoja113.style.opacity = 1;

    }

    //////////////////12
    const sec12 = this.document.getElementById('sec12');
    const brazo121 = this.document.getElementById('brazo121');
    var to12= ((window.innerHeight - 530) / 2) - 30;
    if((sec12.getBoundingClientRect().top < (to12 * 2)) && (sec12.getBoundingClientRect().top > (to12 - 50))){
        brazo121.style.transform = "rotateZ(12deg)";
        brazo121.style.transition = "2s";
        brazo121.style.top = "25.2%";
        brazo121.style.left = "42.2%";

    }else{
        brazo121.style.transform = "rotateZ(1deg)";
        brazo121.style.top = "27.5%";
        brazo121.style.left = "43.5%";

    }

    //////////////////13
    const sec13 = this.document.getElementById('sec13');
    const maskagua131 = this.document.getElementById('maskagua131');
    const maskagua132 = this.document.getElementById('maskagua132');
    const maskagua133 = this.document.getElementById('maskagua133');
    var to13= ((window.innerHeight - 530) / 2) - 30;
    if((sec13.getBoundingClientRect().top < (to13 * 2)) && (sec13.getBoundingClientRect().top > (to13 - 50))){
        maskagua131.style.transform = "scale(1.3)";
        maskagua131.style.top = "29.8%";
        maskagua131.style.transition = "2s";

        maskagua132.style.transform = "scale(1.9)";
        maskagua132.style.top = "45.1%";
        maskagua132.style.transition = "2s";

        maskagua133.style.transform = "scale(2.2)";
        maskagua133.style.top = "64.1%";
        maskagua133.style.transition = "2s";

    }else{
        maskagua131.style.top = "32.3%";
        maskagua131.style.transform = "scale(0)";

        maskagua132.style.top = "49.3%";
        maskagua132.style.transform = "scale(0)";

        maskagua133.style.top = "69.6%";
        maskagua133.style.transform = "scale(0)";

    }



    //////////////////14
    const sec14 = this.document.getElementById('sec14');
    const brazo141 = this.document.getElementById('brazo141');
    var to14= ((window.innerHeight - 510) / 2) - 30;
    if((sec14.getBoundingClientRect().top < (to14 * 2)) && (sec14.getBoundingClientRect().top > (to14 - 50))){
        brazo141.style.transform = "rotateZ(12deg)";
        brazo141.style.transition = "2s";
        brazo141.style.top = "54.4%";
        brazo141.style.left = "55.7%";

    }else{
        brazo141.style.transform = "rotateZ(1deg)";
        brazo141.style.top = "55.4%";
        brazo141.style.left = "56.2%";
    }

    //////////////////15
    const sec15 = this.document.getElementById('sec15');
    const humo151 = this.document.getElementById('humo151');
    var to15= ((window.innerHeight - 490) / 2) - 30;
    //console.log(sec15.getBoundingClientRect().top);
    //console.log(to15 * 3);
    if((sec15.getBoundingClientRect().top < (to15 * 3)) && (sec15.getBoundingClientRect().top > (to15 - 50))){
        humo151.style.top = "10%";
        humo151.style.left ="44%";
        humo151.style.transition = "2s";
        humo151.style.opacity = 0;

    }else{
        humo151.style.top = "22%";
        humo151.style.left ="44%";
        humo151.style.opacity = 1;

    }

})

