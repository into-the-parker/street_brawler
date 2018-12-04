class Game {
    constructor(){
        this.canvas = document.createElement("canvas");
        this.canvas.width = window.innerWidth;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        context = this.context;
    }

    start() {
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    }

    clear() {
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    }
}