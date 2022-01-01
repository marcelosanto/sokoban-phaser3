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

    this.cursors = this.input.keyboard.createCursorKeys()
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

    this.player = this.add.sprite(400, 300, 'tiles', 54)

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('tiles', { start: 81, end: 83 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('tiles', { start: 78, end: 80 }),
      frameRate: 10,
      repeat: -1,
    })

    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('tiles', { start: 52, end: 54 }),
      frameRate: 10,
      repeat: -1,
    })
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('tiles', { start: 55, end: 57 }),
      frameRate: 10,
      repeat: -1,
    })
  }

  update() {
    if (!this.cursors) {
      return
    }
    if (this.cursors.left?.isDown) {
      this.player?.anims.play('left')
    }
    if (this.cursors.right?.isDown) {
      this.player?.anims.play('right')
    }
    if (this.cursors.down?.isDown) {
      this.player?.anims.play('down')
    }
    if (this.cursors.up?.isDown) {
      this.player?.anims.play('up')
    }
  }
}
