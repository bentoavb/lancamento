// LAYER DO CENÁRIO

layer0 = new Layer("layer0");

w = layer0.canvas.width;
h = layer0.canvas.height;

document.fonts.ready.then(_ => {

    let ctx = layer0.context;

    let R = 50;

    for (let i = 1; i < w/R; i++) {
        
        ctx.moveTo(i*R,h);
        ctx.lineTo(i*R,h-10);

        ctx.save();
        ctx.translate(i*R,h-15);
        ctx.rotate(-Math.PI/2);
        ctx.fillText(i*R, -13, -5);
        ctx.restore(); 
        
    }

    for (let i = 1; i < h/R; i++) {
        
        ctx.moveTo(0,h-i*R);
        ctx.lineTo(10,h-i*R);
        ctx.fillText(i*R, 2, h-i*R-5);
        
    }

    ctx.stroke();
    
});