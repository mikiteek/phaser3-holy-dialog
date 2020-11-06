import {Scene} from "phaser";
import config from "../config";
import devicePixelScaleHelper from "../helpers/devicePixelScaleHelper";
import bg from "../../assets/Backgrounds/ons-lux-party-balcony-7.jpg";
import bodyImgBase from "../../assets/MAINHERO/start/body/1/face_f_1_body_f_regular_white_1.png";
import clothesImgBase from "../../assets/MAINHERO/start/clothes/cloths_f_regular_8.png";
import hairImgBase from "../../assets/MAINHERO/start/hair/front/hair_f_3.png";

import bodyWhite from "../../assets/MAINHERO/start/body/1/face_f_1_body_f_regular_white_1.png";
import bodyLatinos from "../../assets/MAINHERO/start/body/3/face_f_3_body_f_regular_latino_3.png";
const clothesImg = require.context("../../assets/MAINHERO/start/clothes", false, /\.(png|jpe?g)$/);
const hairBackImg = require.context("../../assets/MAINHERO/start/hair/back", false, /\.(png|jpe?g)$/);
const hairFrontImg = require.context("../../assets/MAINHERO/start/hair/front", false, /\.(png|jpe?g)$/);

export class StartScene extends Scene {
  constructor() {
    super({key: "StartScene"});
  }
  preload() {
    this.load.image("background", bg);
    this.load.image("bodyImg", bodyImgBase);
    this.load.image("clothesImg", clothesImgBase);
    this.load.image("hairImg", hairImgBase);
  }

  create() {
    this.createBackground();
    this.createHeroBase();
  }

  createBackground() {
    const {width, height} = config;
    const scale = devicePixelScaleHelper();

    this.add.sprite(width / 2, height / 2, "background").setScale(1 / 2 * scale, 1 / 2 * scale);
  }

  createHeroBase() {
    const {width, height} = config;
    const scale = devicePixelScaleHelper();

    this.add.sprite(width / 4, height / 2, "bodyImg").setScale(1 / 2 * scale, 1 / 2 * scale);
    this.add.sprite(width / 4, height / 2, "clothesImg").setScale(1 / 2 * scale, 1 / 2 * scale);
    this.add.sprite(width / 4, height / 2, "hairImg").setScale(1 / 2 * scale, 1 / 2 * scale);
  }




}