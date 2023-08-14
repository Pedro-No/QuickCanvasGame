const gameBackground = new Image();
gameBackground.addEventListener("load", () => {
    this.gameBackground = gameBackground;});
gameBackground.src = '../gameAssets/gameBackground.png';

const player1Sprite = new Image();
player1Sprite.addEventListener("load", () => {
    this.player1Sprite = player1Sprite;});
player1Sprite.src = '../gameAssets/player1.png';

const player2Sprite = new Image();
player2Sprite.addEventListener("load", () => {
    this.player2Sprite = player2Sprite;});
player2Sprite.src = '../gameAssets/player2.png';

const game_background = new Sprite(0, 0, gameBackground);

const game_player1 = new Sprite(50, 50, player1Sprite);
const game_player2 = new Sprite(150, 50, player2Sprite);