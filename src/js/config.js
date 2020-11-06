import {GameScene} from "./scenes/GameScene";
import {StartScene} from "./scenes/StartScene"
import devicePixelScaleHelper from "./helpers/devicePixelScaleHelper";


export default {
  type: Phaser.AUTO,
  parent: "Holy dialogue",
  width: window.innerWidth * devicePixelScaleHelper(),
  height: window.innerHeight * devicePixelScaleHelper(),
  scene: [StartScene]
}