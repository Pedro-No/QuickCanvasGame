const menuBackground = new Image();
menuBackground.addEventListener("load", () => {
    this.menuBackground = menuBackground;});
menuBackground.src = '../menuAssets/background.png';

const menuButtons = new Image();
menuButtons.addEventListener("load", () => {
    this.menuButtons = menuButtons;});
menuButtons.src = '../menuAssets/buttons.png';

const menuSelected = new Image();
menuSelected.addEventListener("load", () => {
    this.menuSelected = menuSelected;});
menuSelected.src = '../menuAssets/selected.png';

const menu_background = new Sprite(0, 0, menuBackground);

const menu_buttons = new Sprite(0, 0, menuButtons);
const menu_selected = new Sprite(0, 0, menuSelected);