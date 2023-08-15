class Game {
    constructor(player1, player2, enemyPC, weapon1, weapon2) {
        //game stuff
        this.state = false;
        this.playerCount = 1;
        
        //render Stuff
        this.frames = 0;
        this.renderInterval = null;

        //sprites
        this.player1 = player1;
        this.weapon1 = weapon1;

        this.player2 = player2;
        this.enemyPC = enemyPC;
        this.weapon2 = weapon2;

        //physics stuff
        this.clock = 0;
        this.physicsInterval = null;

        this.playerSize = 50;
        this.weaponSize = 70;
        this.blockSize = 40;
        this.ground = (canvas.height - this.playerSize - this.blockSize);
        
        this.gravity = 10;
        this.movementSpeed = 10;
        this.jump = 50;
    }

    start(choice) {
        if (choice === 2) {
            this.playerCount = 2;
        }
        
        this.state = true;

        this.renderInterval = setInterval(this.renderUpdate, 1);
        this.physicsInterval = setInterval(this.physicsUpdate, 20);

        //player starting positions
        this.player1.x = (canvas.width / 6);
        this.player1.y = this.ground;

        this.player2.x = (canvas.width - (canvas.width / 6) - this.playerSize);
        this.player2.y = this.ground;

        this.enemyPC.x = (canvas.width - (canvas.width / 6) - this.playerSize);
        this.enemyPC.y = this.ground;
    }

    renderUpdate = () => {
        this.frames++;
        this.clear();
        game_background.draw();

        // Render Players
        if (this.playerCount === 1) {
            this.player1.draw();
            this.enemyPC.draw();
            if (pressedP1.attack === true) this.weapon1.draw();
            if (pressedP2.attack === true) this.weapon2.draw();
        }
        if (this.playerCount === 2) {
            this.player1.draw();
            this.player2.draw();
            if (pressedP1.attack === true) this.weapon1.draw();
            if (pressedP2.attack === true) this.weapon2.draw();
        }

        game_floor.draw();
    }

    physicsUpdate = () => {
        this.clock++;

        //Player Movement (left, right, jump)
        if (pressedP1.left === true) this.moveP1("left");
        if (pressedP1.right === true) this.moveP1("right");
        if (pressedP1.jump === true) this.player1.y -= this.jump;;

        if (pressedP2.left === true) this.moveP2("left");
        if (pressedP2.right === true) this.moveP2("right");
        if (pressedP2.jump === true) this.player2.y -= this.jump;;
        

        //Gravity
        if (this.player1.y < this.ground) {
            this.player1.y += this.gravity;
        };
        if (this.player2.y < this.ground) {
            this.player2.y += this.gravity;
        };

        this.updateWeaponPositions();
    }

    reset() {
        clearInterval(this.physicsInterval);
        clearInterval(this.renderInterval);       
    }

    clear() {
        ctx.clearRect(0, 0, this.width, this.height);
    }

    moveP1(direction) {
        switch (direction) {
            case "left":
                if (this.player1.x > 0) {
                    this.player1.x -= this.movementSpeed;
                }
                break;
            case "right":
                if (this.player1.x < (canvas.width - this.playerSize))
                this.player1.x += this.movementSpeed;
                break;
        }
    }

    moveP2(direction) {
        switch (direction) {
            case "left":
                if (this.player2.x > 0) {
                    this.player2.x -= this.movementSpeed;
                }
                break;
            case "right":
                if (this.player2.x < (canvas.width - this.playerSize)) {
                    this.player2.x += this.movementSpeed;
                }
                break;
        }
    }

    attackP1() {
        pressedP1.attack = true;
        setTimeout(() => {pressedP1.attack = false;},500);
    }

    attackP2() {
        pressedP2.attack = true;
        setTimeout(() => {pressedP2.attack = false;},500);
    }

    jumpP1() {
        if (this.player1.y > 0 && this.player1.y === this.ground) {
            pressedP1.jump = true;
            setTimeout(() => {pressedP1.jump = false;},50);
        }
    }

    jumpP2() {
        if (this.player2.y > 0 && this.player2.y === this.ground) {
            pressedP2.jump = true;
            setTimeout(() => {pressedP2.jump = false;},50);
        }
    }

    updateWeaponPositions() {
        this.weapon1.x = this.player1.x
        this.weapon1.y = (this.player1.y - this.weaponSize - 10);

        this.weapon2.x = this.player2.x
        this.weapon2.y = (this.player2.y - this.weaponSize - 10);
    };
}