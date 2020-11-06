import {GameScene} from "./scenes/GameScene";
import devicePixelScaleHelper from "./helpers/devicePixelScaleHelper";


export default {
  type: Phaser.AUTO,
  parent: "Holy dialogue",
  width: window.innerWidth * devicePixelScaleHelper(),
  height: window.innerHeight * devicePixelScaleHelper(),
  scene: [GameScene]
}