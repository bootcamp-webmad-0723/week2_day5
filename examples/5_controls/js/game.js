const Game = {
  gameScreen: document.querySelector("#game-screen"),
  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  square: undefined,

  keys: { LEFT: 'ArrowLeft', RIGHT: 'ArrowRight' },

  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },

  start() {
    this.createElements()
    this.setEventListeners()
    this.gameLoop()
  },

  setEventListeners() {
    document.onkeyup = event => {
      switch (event.code) {
        case this.keys.LEFT:
          this.square.moveLeft()
          break;
        case this.keys.RIGHT:
          this.square.moveRight()
          break;
      }
    }
  },

  createElements() {
    this.square = new Square(this.gameScreen, this.gameSize, this.keys)
  },

  gameLoop() {
    this.drawAll()
    window.requestAnimationFrame(() => this.gameLoop())
  },

  drawAll() {
    this.square.move()
  }
}
