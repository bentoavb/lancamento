// LAYER DAS PARTÍCULAS

layer3 = new Layer("layer3");

document.fonts.ready.then(_ => {
    layer3.context.font = '600 20px "Font Awesome 5 Free"';
    layer3.context.fillStyle = "black";
});

let p1 = null;

function LimparLayer3 (){
    if (p1 != null) clearInterval(p1.timer);
    layer3.context.clearRect(0, 0, layer3.canvas.width, layer3.canvas.height);
}