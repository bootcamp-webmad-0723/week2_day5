const Game = {
  gameScreen: document.querySelector("#game-screen"),
  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  circle: undefined,

  init() {
    this.setDimensions()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },

  start() {
    this.circle = new Circle(this.gameScreen, this.gameSize)
    this.gameLoop()
  },

  gameLoop() {
    this.drawAll()
    window.requestAnimationFrame(() => this.gameLoop())
  },

  drawAll() {
    this.circle.move()
  }
}
