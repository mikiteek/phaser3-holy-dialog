import {Scene} from "phaser";
import config from "../config";
import devicePixelScaleHelper from "../helpers/devicePixelScaleHelper";
import bg from "../../assets/Backgrounds/ons-lux-party-balcony-7.jpg";

export class GameScene extends Scene {
  constructor() {
    super({key: "GameScene"});
  }
  preload() {
    this.load.image("background", bg);
  }

  create() {
    const {width, height} = config;
    const scale = devicePixelScaleHelper();
    this.add.sprite(width / 2, height / 2, "background")
      .setScale(1 / 2 * scale, 1 / 2 * scale);
  }


}