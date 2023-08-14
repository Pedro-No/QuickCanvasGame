class Menu {
    constructor(background, buttons, buttonSelected) {
        this.width = canvas.width;
        this.height = canvas.height;

        this.background = background;
        this.buttonSelected = buttonSelected;
        this.buttons = buttons;

        this.frames = 0;
        this.intervalId = null;

        this.state = true;
    }

    start() {
        this.intervalId = setInterval(this.update, 6);
    }

    update = () => {
        this.frames++;
        this.clear();
        this.background.draw();
        this.buttons.draw();
        this.buttonSelected.draw();
    }

    stop() {
        clearInterval(this.intervalId);
    }

    clear() {
        ctx.clearRect(0, 0, this.width, this.height);
    }

    moveUp() {
        if (this.buttonSelected.y != 0){
            this.buttonSelected.y -=100;
        }   
    }

    moveDown() {
        if (this.buttonSelected.y === 0){
            this.buttonSelected.y +=100;
        }
    }
    
    select() {
        if (this.buttonSelected.y === 0){
            this.stop();
            this.state = false;
            game.start(1);
        } else {
            this.stop();
            this.state = false;
            game.start(2);
        }
    }
}