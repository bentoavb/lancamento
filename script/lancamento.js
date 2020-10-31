function Lancamento (){

    let randomColor = [
        Math.random()*200,
        Math.random()*200,
        Math.random()*200
    ]
    
    if (p1 != null) clearInterval(p1.timer);
    p1 = new Particula(x0, y0, vel0*Math.cos(alpha*Math.PI/180), vel0*Math.sin(alpha*Math.PI/180), 'ponto');

    if (p2 != null) clearInterval(p2.timer);
    p2 = new Particula(x0, y0, vel0*Math.cos(alpha*Math.PI/180), vel0*Math.sin(alpha*Math.PI/180), 'foguete');
    
    let t_final = p1.vely0/9.81 + Math.sqrt( p1.vely0*p1.vely0 + 2*9.81*p1.y0)/9.81;
    //T = (1000/t_vel)*(t_final/25);

    let Alcance = (p1.velx0/9.81)*( p1.vely0 + Math.sqrt(p1.vely0*p1.vely0 + 2*y0*9.81) );
    
    t = 0;
    p1.timer = setInterval(() => {

        layer2.context.clearRect(0, 0, layer2.canvas.width, layer2.canvas.height);
        p2.update(layer2.context, t, t_final, 'black');

        p1.update(layer3.context, t, t_final, `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`);

        if (p1.y < 0 ) clearInterval(p1.timer);
    
        document.getElementById('tempo').innerHTML = "Tempo: " + t.toFixed(1);// + "s  (&plusmn; 0.1s)";

        t += (T/1000)*t_vel;

    }, T);
}
