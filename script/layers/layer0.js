// LAYER DO CENÁRIO

layer0 = new Layer("layer0");

document.fonts.ready.then(_ => configLayer0());

function configLayer0() {

    let ctx = layer0.context;

    ctx.clearRect(0, 0, w, h);

    let R = 50;

    ctx.beginPath();

    for (let i = 1; i < zoom*w/R; i++) {
        
        ctx.moveTo(i*R/zoom,h);
        ctx.lineTo(i*R/zoom,h-10);

        ctx.save();
        ctx.translate(i*R/zoom,h-15);
        ctx.rotate(-Math.PI/2);
        ctx.fillText(i*R, -13, -5);
        ctx.restore(); 
        
    }

    for (let i = 1; i < zoom*h/R; i++) {
        
        ctx.moveTo(0,h-i*R/zoom);
        ctx.lineTo(10,h-i*R/zoom);
        ctx.fillText(i*R, 2, h-i*R/zoom-5);
        
    }

    ctx.stroke();

}