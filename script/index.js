let t = 0; // Variável de tempo [segundos]
let T = 10; // Tempo de amostragem [milisegundos]
let T_nuvem = 50; // Tempo de amostragem das nuvens [milisegundos]
let t_vel = 10; // Multiplicador para acelerar a simulação

let vel0 = 100; // Velocidade inicial do projétil [metros por segundos]
let alpha = 45; // Ângulo de lançamento [graus]
let y0 = 0; // Posição vertical inicial [metros]
let beta = 0; // coeficiente da resistência do ar

let zoom = 1;

let lancamentoArray = []; // Array para armazenar informações dos lançamentos

w = window.innerWidth; // Tamanho horizontal do Canvas
h = window.innerHeight*0.8; // Tamanho vertical do Canvas

// Função executada sempre que a tela mudar de tamanho
// Quando isso acontece, é necessário reconfigurar o Canvas de cada camada da aplicação
window.addEventListener("resize", function () {
    w = window.innerWidth;
    h = window.innerHeight*0.8;
    [layer0, layer1, layer2, layer3, layer4].forEach((e) => {
        e.canvas.width = w;
        e.canvas.height = h;
    });

    configLayer0();
    configLayer1();
    configLayer2();
    configLayer3();
    configLayer4();

    redesenharLayer3();

});