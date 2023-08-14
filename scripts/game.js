class Game {
    constructor(background, player1, player2) {
        this.state = false;
        
        this.width = canvas.width;
        this.height = canvas.height;
        
        this.frames = 0;
        this.intervalRender = null;

        this.background = background;

        this.player1 = player1;
        this.player2 = player2;

        this.playerCount = 1;
    
        this.movementSpeed = 10;
    }

    start(choice) {
        if (choice === 2) {
            this.playerCount = 2;
        }
        
        this.state = true;

        this.intervalRender = setInterval(this.update, 10);
    }

    update = () => {
        this.frames++;
        this.clear();

        this.background.draw();
        this.player1.draw();
        if (this.playerCount === 2) this.player2.draw();

        if (pressedP1.up === true) this.moveP1("up");
        if (pressedP1.left === true) this.moveP1("left");
        if (pressedP1.right === true) this.moveP1("right");
        if (pressedP1.down === true) this.moveP1("down");

        if (pressedP2.up === true) this.moveP2("up");
        if (pressedP2.left === true) this.moveP2("left");
        if (pressedP2.right === true) this.moveP2("right");
        if (pressedP2.down === true) this.moveP2("down");
    }

    stop() {
        clearInterval(this.intervalPhysics);
        clearInterval(this.intervalRender);
    }

    clear() {
        ctx.clearRect(0, 0, this.width, this.height);
    }

    moveP1(direction) {
        switch (direction) {
            case "up":
                this.player1.y -= this.movementSpeed;
                break;
            case "left":
                this.player1.x -= this.movementSpeed;
                break;
            case "right":
                this.player1.x += this.movementSpeed;
                break;
            case "down":
                this.player1.y += this.movementSpeed;
                break;
        }
    }

    moveP2(direction) {
        switch (direction) {
            case "up":
                this.player2.y -= this.movementSpeed;
                break;
            case "left":
                this.player2.x -= this.movementSpeed;
                break;
            case "right":
                this.player2.x += this.movementSpeed;
                break;
            case "down":
                this.player2.y += this.movementSpeed;
                break;
        }
    }
}