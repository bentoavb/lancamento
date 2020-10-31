function Nuvem(x0, y0, velx0, vely0) {

    Objeto.call(this, x0, y0, velx0, vely0);

}

Nuvem.prototype.draw = function (context){
    context.fillText("\uf0c2", this.x, layer0.canvas.height - this.y);
}

Nuvem.prototype.update = function (context){
    this.x += (T_nuvem/1000)*this.velx0;
    
    if (this.x > window.innerWidth*6/5){
        this.x = -window.innerWidth/5;
        this.y = AlturaAleatoria();
    }

    this.draw(context);
}

const AlturaAleatoria = () => layer0.canvas.height * (Math.random()/(10/6) +0.2);