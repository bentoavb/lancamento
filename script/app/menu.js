
// POSIÇÃO INICIAL VERTICAL DA PARTÍCULA

document.getElementById('y0').value = y0;
document.getElementById('y0').oninput = function(e){
    
    if (e.target.value == null || e.target.value == "" || parseInt(e.target.value) < 0 ) {
        y0 = 0
        document.getElementById('y0').value = 0;
    }else{
        y0 = parseInt(e.target.value);
    }
    arrow.draw(layer4, angle=alpha*Math.PI/180, x=0, x=y0*zoom);
};

// VELOCIDADE INICIAL DA PARTICULA

document.getElementById('vel0').value = vel0;
document.getElementById('vel0').oninput = function(e){
    
    if (e.target.value == null || e.target.value == "" || parseInt(e.target.value) < 0) {
        vel0 = 0
    }else{
        vel0 = parseFloat(e.target.value);
    }
};

document.getElementById('theta0').value = alpha;
document.getElementById('theta0').oninput = function(e){
    
    if (e.target.value == null || e.target.value == "" ) {
        alpha = 0
    }else{
        alpha = parseInt(e.target.value);
    }
    arrow.draw(layer4, angle=alpha*Math.PI/180, x=0, x=y0*zoom);
};


// COEFICIENTE DE RESISTENCIA DO AR

document.getElementById('beta').value = beta;
document.getElementById('beta').oninput = function(e){
    
    if (e.target.value == null || e.target.value == "" || parseInt(e.target.value) < 0 ) {
        beta = 0
    }else{
        beta = parseFloat(e.target.value);
    }
};

// BOTOES

document.getElementById("button1").onclick = Lancamento;

document.getElementById("button2").onclick = () => {
    LimparLayer2();
    LimparLayer3();
    document.getElementById('tempo').innerHTML = null;
};

let sidemenu = false;

document.getElementById("button3").onclick = function openNav() {
    sidemenu = true;
    document.getElementById("menu-options").style.width = "75%";
}

document.getElementById("canvas").onclick =  function closeNav() {
    if(sidemenu) {
        sidemenu = false;
        document.getElementById("menu-options").style.width = "0";
    }
} 

// ZOOM DA TELA

document.getElementById('zoom').value = zoom;
document.getElementById('zoom').oninput = function(e){
    zoom = parseFloat(e.target.value);
    configLayer0();
    redesenharLayer3();
    arrow.draw(layer4, angle=alpha*Math.PI/180, x=0, y=y0/zoom);
};