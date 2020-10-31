function LaunchArrow(x, y, raio) {

    this.x = x;
    this.y = y;

    this.raio = raio;

    this.angle = null;
}

LaunchArrow.prototype.draw = function (layer, angle=null, x=null, y=null){
    layer.context.clearRect(0, 0, w, h);
    layer.context.font = "10px Arial";

    if (angle != null) this.angle = angle;
    if (x != null) this.x = x;
    if (y != null) this.y = y;
    
    let fromx = this.x;
    let fromy = h - this.y ;
    let tox   = this.x + this.raio*Math.cos(this.angle);
    let toy   = h - this.y - this.raio*Math.sin(this.angle);
    let l = 3;

    layer.context.beginPath();
    layer.context.lineWidth = 3;
    layer.context.arc(fromx, fromy, 1.35*this.raio, 0, 2 * Math.PI);
    layer.context.fillStyle = "white";
    layer.context.fill();
    layer.context.stroke(); 

    layer.context.beginPath();
    layer.context.save();
    layer.context.globalCompositeOperation = 'destination-out';
    layer.context.arc(fromx, fromy, this.raio, 0, 2*Math.PI, true);
    layer.context.fill();
    layer.context.restore();
    layer.context.stroke(); 

    layer.context.beginPath();
    layer.context.lineWidth = 3;
    layer.context.arc(fromx, fromy, this.raio, 0, 2 * Math.PI);
    layer.context.stroke(); 

    for (let i = -90; i <= 90; i+=10) {
        let dx = this.raio*Math.cos(i*Math.PI/180);
        let dy = this.raio*Math.sin(i*Math.PI/180);
        layer.context.beginPath();
        layer.context.fillStyle = "black";
        layer.context.moveTo(x0 + 1.0*dx, h - y0 - 1.0*dy);
        layer.context.lineTo(x0 + 1.1*dx, h - y0 - 1.1*dy);
        layer.context.fillText(i, x0 + 1.15*dx, h - y0 - 1.15*dy);
        layer.context.stroke(); 
    }

    layer.context.beginPath();
    layer.context.lineWidth = l;
    layer.context.moveTo(fromx, fromy);
    layer.context.lineTo(tox, toy);
    layer.context.moveTo(tox, 1+toy);
    layer.context.stroke();

    l = 10;
    tox = tox - Math.cos(this.angle)*l*Math.sqrt(3);
    toy = toy + Math.sin(this.angle)*l*Math.sqrt(3);

    layer.context.beginPath();
    layer.context.lineWidth = 1;
    layer.context.moveTo(tox - l*Math.sin(this.angle) , toy - +l*Math.cos(this.angle));
    layer.context.lineTo(tox + l*Math.cos(this.angle)*Math.sqrt(3) , toy - +l*Math.sin(this.angle)*Math.sqrt(3));
    layer.context.lineTo(tox + l*Math.sin(this.angle) , toy - -l*Math.cos(this.angle));
    layer.context.fill();
    layer.context.stroke();
}