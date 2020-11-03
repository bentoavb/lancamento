function Lancamento (){

    let randomColor = [
        Math.random()*200,
        Math.random()*200,
        Math.random()*200
    ]

    let randomColorString = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
    
    clearInterval(layer3Timer);
    p1 = new Particula(0, y0, vel0*Math.cos(alpha*Math.PI/180), vel0*Math.sin(alpha*Math.PI/180), 'ponto');

    p2 = new Particula(0, y0, vel0*Math.cos(alpha*Math.PI/180), vel0*Math.sin(alpha*Math.PI/180), 'foguete');
    
    t = 0;

    lancamentoArray.push({ 'color': randomColorString, 'data': [] });

    layer3Timer = setInterval(() => {

        layer2.context.clearRect(0, 0, w, h);
        p2.update(layer2.context, t, 'black');

        p1.update(layer3.context, t, randomColorString);
    
        document.getElementById('tempo').innerHTML = "Tempo: " + t.toFixed(1) + "s";

        t += (T/1000)*t_vel;

        lancamentoArray[lancamentoArray.length-1]['data'].push({
            'x': p1.x,
            'y': p1.y
        })

        if (p1.y < 0 ){
            clearInterval(layer3Timer);
            layer3Timer = null;
            document.getElementById('tempo').innerHTML = "Tempo total: " + t.toFixed(1) + "s";
        } 

    }, T);
}
