const gameBackground = new Image();
gameBackground.addEventListener("load", () => {
    this.gameBackground = gameBackground;});
gameBackground.src = '../gameAssets/gameSky.png';

const gameFloor = new Image();
gameFloor.addEventListener("load", () => {
    this.gameFloor = gameFloor;});
gameFloor.src = '../gameAssets/gameFloor.png';

const player1Sprite = new Image();
player1Sprite.addEventListener("load", () => {
    this.player1Sprite = player1Sprite;});
player1Sprite.src = '../gameAssets/player1.png';

const player2Sprite = new Image();
player2Sprite.addEventListener("load", () => {
    this.player2Sprite = player2Sprite;});
player2Sprite.src = '../gameAssets/player2.png';

const enemyPCSprite = new Image();
enemyPCSprite.addEventListener("load", () => {
    this.enemyPCSprite = enemyPCSprite;});
enemyPCSprite.src = '../gameAssets/ai1.png';

const sword1Img = new Image();
sword1Img.addEventListener("load", () => {
    this.sword1Img = sword1Img;});
sword1Img.src = '../gameAssets/sword1.png';

const sword2Img = new Image();
sword2Img.addEventListener("load", () => {
    this.sword2Img = sword2Img;});
sword2Img.src = '../gameAssets/sword2.png';

const game_background = new Sprite(0, 0, gameBackground);

const game_floor = new Sprite(0, 0, gameFloor);

const game_player1 = new Sprite(0, 0, player1Sprite);
const game_sword1 = new Sprite(0, 0, sword1Img);
const game_player2 = new Sprite(0, 0, player2Sprite);
const game_sword2 = new Sprite(0, 0, sword2Img);
const game_enemyPC = new Sprite(0, 0, enemyPCSprite);