function Layer(id) {
    
    this.canvas = document.getElementById(id);
    this.canvas.width=window.innerWidth;
    this.canvas.height=window.innerHeight*0.8;

    this.context = this.canvas.getContext("2d");
}