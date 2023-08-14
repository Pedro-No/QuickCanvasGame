const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const arrowUp = document.querySelector(".up-bttn");
const arrowLeft = document.querySelector(".left-bttn");
const arrowRight = document.querySelector(".right-bttn");
const arrowDown = document.querySelector(".down-bttn");

const menu = new Menu (menu_background, menu_buttons, menu_selected);
const game = new Game (game_background, game_player1, game_player2);

let pressedP1 = {
    up: false,
    left: false,
    right: false,
    down: false,
};

let pressedP2 = {
    up: false,
    left: false,
    right: false,
    down: false,
};

window.onload = () => {
    menu.start();
}

document.addEventListener("keydown", (e) => {
    // Menu 
    if (game.state === false) {
        if (e.key === "Enter") {
            menu.select();
        } else if (e.key === "ArrowUp" || e.key === "w") {
            menu.moveUp();
        } else if (e.key === "ArrowDown" || e.key === "s") {
            menu.moveDown();
        }
    }
    if (game.state === true) {
        switch (e.key) {
            
            // Player 1
            case "ArrowUp":
                pressedP1.up = true;
                break;
            case "ArrowLeft":
                pressedP1.left = true;
                break;
            case "ArrowRight":
                pressedP1.right = true;
                break;
            case "ArrowDown":
                pressedP1.down = true;
                break;

            // Player 2
            case "w":
                if(game.playerCount === 1) {
                    pressedP1.up = true;
                } else {
                    pressedP2.up = true;
                }
                break;
            case "a":
                if(game.playerCount === 1) {
                    pressedP1.left = true;
                } else {
                    pressedP2.left = true;
                }
                break;
            case "d":
                if(game.playerCount === 1) {
                    pressedP1.right = true;
                } else {
                    pressedP2.right = true;
                }
                break;
            case "s":
                if(game.playerCount === 1) {
                    pressedP1.down = true;
                } else {
                    pressedP2.down = true;
                }
                break;
    }}
});

document.addEventListener("keyup", (e) => {
    if (game.state === true) {
        switch (e.key) {
            
            // Player 1
            case "ArrowUp":
                pressedP1.up = false;
                break;
            case "ArrowLeft":
                pressedP1.left = false;
                break;
            case "ArrowRight":
                pressedP1.right = false;
                break;
            case "ArrowDown":
                pressedP1.down = false;
                break;

            // Player 2
            case "w":
                if(game.playerCount === 1) {
                    pressedP1.up = false;
                } else {
                    pressedP2.up = false;
                }
                break;
            case "a":
                if(game.playerCount === 1) {
                    pressedP1.left = false;
                } else {
                    pressedP2.left = false;
                }
                break;
            case "d":
                if(game.playerCount === 1) {
                    pressedP1.right = false;
                } else {
                    pressedP2.right = false;
                }
                break;
            case "s":
                if(game.playerCount === 1) {
                    pressedP1.down = false;
                } else {
                    pressedP2.down = false;
                }
                break;
    }}
})