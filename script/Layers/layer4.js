// LAYER DA FLECHA INICIAL

layer4 = new Layer("layer4");

arrow = new LaunchArrow(x0, y0, 100);
arrow.draw(layer4, alpha*Math.PI/180);

document.fonts.ready.then(_ => {
    layer4.context.font = '600 20px "Font Awesome 5 Free"';
    layer4.context.fillStyle = "black";
});

const downFunction = function(y_start, y_ref, clientX, clientY) {
    let xc = clientX - x0;
    let yc = h - clientY - y0;
    if ( xc*xc + yc*yc <= arrow.raio*arrow.raio ){
        alpha = Math.atan(yc/xc)*180/Math.PI;
        document.getElementById('theta0').value = alpha;
        arrow.draw(layer4, angle=alpha*Math.PI/180);
    }else if ( xc*xc + yc*yc <= (arrow.raio*1.35)*(arrow.raio*1.35) ){
        y0 = y_ref + (h - clientY) - y_start;
        if (y0 < 0){
            y0 = 0
            document.getElementById('y0').value = 0;
        }else{
            document.getElementById('y0').value = y0;
        }
       
        arrow.draw(layer4, angle=alpha*Math.PI/180, x=x0, y=y0);
    }
}

// MOUSE
layer4.canvas.addEventListener("mousedown", function(e){
    let y_start = h - e.clientY;
    let y_ref = y0;
    layer4.canvas.onmousemove = function (e){
        downFunction(y_start, y_ref, e.clientX, e.clientY);
    }
});

layer4.canvas.addEventListener("mouseup", function(e){
    layer4.canvas.onmousemove = null
});

// TOUCH
layer4.canvas.addEventListener("touchstart", function(e){
    let y_start = h - e.touches[0].clientY;
    let y_ref = y0;
    console.log(y_start, y_ref)
    layer4.canvas.ontouchmove = function (e){
        downFunction(y_start, y_ref, e.touches[0].clientX, e.touches[0].clientY);
    }
});
layer4.canvas.addEventListener("touchend", function(e){
    layer4.canvas.ontouchmove = null
});

// MOUSE POINTER

layer4.canvas.addEventListener("mousemove", function(e){
    let xc = e.clientX - x0;
    let yc = h - e.clientY - y0;
    if ( (xc*xc + yc*yc > arrow.raio*arrow.raio) 
        && ( xc*xc + yc*yc <= (arrow.raio*1.35)*(arrow.raio*1.35) ) ) {
            layer4.canvas.style.cursor = 'pointer'
    }else{
        layer4.canvas.style.cursor = 'auto'
    }
});