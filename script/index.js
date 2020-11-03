let t = 0;
let T = 10; 
let T_nuvem = 50; 
let t_vel = 10;

let vel0 = 100;
let alpha = 45;
let y0 = 0;
let beta = 0;

let zoom = 1;

let lancamentoArray = [];

w = window.innerWidth;
h = window.innerHeight*0.8;

window.addEventListener("resize", function () {
    w = window.innerWidth;
    h = window.innerHeight*0.8;
    [layer0, layer1, layer2, layer3, layer4].forEach((e) => {
        e.canvas.width = w;
        e.canvas.height = h;
    });

    configLayer0();
    configLayer1();
    configLayer2();
    configLayer3();
    configLayer4();

    redesenharLayer3();

});

document.fonts.ready.then(_ => console.log('...'));