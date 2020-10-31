// LAYER DO FOGUETE

layer2 = new Layer("layer2");

document.fonts.ready.then(_ => {
    layer2.context.font = '600 20px "Font Awesome 5 Free"';
    layer2.context.fillStyle = "black";
});

let p2 = null;

function LimparLayer2 (){
    if (p2 != null) clearInterval(p2.timer);
    layer2.context.clearRect(0, 0, layer2.canvas.width, layer2.canvas.height);
}
