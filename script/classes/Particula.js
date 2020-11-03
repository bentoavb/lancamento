function Particula(x0, y0, velx0, vely0, tipo) {

    Objeto.call(this, x0, y0, velx0, vely0);

    this.count = 0;
    this.tipo = tipo

}

Particula.prototype.draw = function (context, angle, color){
    context.save();
    context.translate(this.x/zoom, h - this.y/zoom);
    context.rotate(angle);

    context.fillStyle = color;

    if (this.tipo == 'foguete'){
        context.fillText("\uf135", 0, 0);
    }else if (this.tipo == 'ponto'){
        context.beginPath();
        context.arc(0, 0, 3, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
    }

    context.restore();
}


Particula.prototype.update = function (context, t, color){

    let vx, vy;

    if (beta == 0){
        this.x = this.x0 + this.velx0*t;
        this.y = this.y0 + this.vely0*t -(9.81/2)*t*t;
        vx = this.velx0;
        vy = this.vely0 - 9.81*t;
    }else{
        let expValue = (1 - Math.exp(-beta*t))/beta
        this.x = this.x0 + this.velx0*expValue;
        this.y = this.y0 + (this.vely0 + 9.81/beta)*expValue - 9.81*t/beta;
        vx = this.velx0*Math.exp(-beta*t);
        vy = (this.vely0 + 9.81/beta)*Math.exp(-beta*t) - 9.81/beta;
    }
    
    this.draw(context, Math.atan(1) - Math.atan(vy/vx), color);
}