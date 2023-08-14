const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const arrowUp = document.querySelector(".up-bttn");
const arrowLeft = document.querySelector(".left-bttn");
const arrowRight = document.querySelector(".right-bttn");
const arrowDown = document.querySelector(".down-bttn");

const menu = new Menu (menu_background, menu_buttons, menu_selected);
const game = new Game (game_background, game_player1, game_player2);

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
                game.moveP1("up");
                break;
            case "ArrowLeft":
                game.moveP1("left");
                break;
            case "ArrowRight":
                game.moveP1("right");
                break;
            case "ArrowDown":
                game.moveP1("down");
                break;

            // Player 2
            case "w":
                if(game.playerCount === 1) {
                    game.moveP1("up");
                } else {
                    game.moveP2("up");
                }
                break;
            case "a":
                if(game.playerCount === 1) {
                    game.moveP1("left");
                } else {
                    game.moveP2("left");
                }
                break;
            case "d":
                if(game.playerCount === 1) {
                    game.moveP1("right");
                } else {
                    game.moveP2("right");
                }
                break;
            case "s":
                if(game.playerCount === 1) {
                    game.moveP1("down");
                } else {
                    game.moveP2("down");
                }
                break;
    }}
});