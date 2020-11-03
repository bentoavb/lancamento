// LAYER DAS PARTÍCULAS

layer3 = new Layer("layer3");

layer3Timer = null;

document.fonts.ready.then(_ => configLayer3());

function configLayer3() {
    layer3.context.font = '600 20px "Font Awesome 5 Free"';
    layer3.context.fillStyle = "black";
}

let p1 = null;

function LimparLayer3 (){
    clearInterval(layer3Timer);
    layer3.context.clearRect(0, 0, layer3.canvas.width, layer3.canvas.height);
    lancamentoArray = [];
}

function redesenharLayer3() {
    /*if (layer3Timer != null){
        clearInterval(layer3Timer);
        layer3Timer = null;
        lancamentoArray = lancamentoArray.slice(0, lancamentoArray.length - 1);
    }*/
    layer3.context.clearRect(0, 0, w, h);
    layer2.context.clearRect(0, 0, w, h);
    lancamentoArray.forEach((e) => {
        e['data'].forEach((point)=>{
            p1.x = point.x;
            p1.y = point.y;
            p1.draw(layer3.context, 0, e['color'])
        });
    })
}