import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  constructor() {
    super('hello-world')
  }

  preload() {
    this.load.spritesheet('tiles', 'assets/sokoban_tilesheet.png', {
      frameWidth: 64,
      startFrame: 0,
    })
  }

  create() {
    const level = [
      [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
      [100, 0, 0, 0, 0, 0, 0, 0, 0, 100],
      [100, 0, 0, 0, 0, 0, 0, 0, 0, 100],
      [100, 0, 0, 0, 0, 0, 0, 0, 0, 100],
      [100, 0, 0, 0, 0, 0, 0, 0, 0, 100],
      [100, 0, 0, 0, 0, 0, 0, 0, 0, 100],
      [100, 0, 0, 0, 0, 0, 0, 0, 0, 100],
      [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
    ]

    const map = this.make.tilemap({
      data: level,
      tileHeight: 64,
      tileWidth: 64,
    })

    const tiles = map.addTilesetImage('tiles')
    const layer = map.createLayer(0, tiles, 0, 0)
  }
}
