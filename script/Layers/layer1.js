// LAYER DAS NUVENS

layer1 = new Layer("layer1");
layer1Timer = null;

document.fonts.ready.then(_ => {
    
    configLayer1();

    layer1.context.fillRect(0,0,100,100);

    let array = [];

    for (let i = 0; i < 7; i++) {
        array.push(new Nuvem(
            (i-1)*layer1.canvas.width/5,
            AlturaAleatoria(),
            70,
            0
        ))
    }

    layer1Timer = setInterval(() => {
        layer1.context.clearRect(0, 0, layer1.canvas.width, layer1.canvas.height);
        for (let i = 0; i < array.length; i++) {
            array[i].update(layer1.context);
        }
    }, T_nuvem);

});

function configLayer1() {
    layer1.context.font = '600 70px "Font Awesome 5 Free"';
    layer1.context.fillStyle = "#aaaaff";
}
