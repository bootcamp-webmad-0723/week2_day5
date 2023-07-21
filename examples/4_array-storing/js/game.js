const Game = {
  gameScreen: document.querySelector("#game-screen"),
  gameSize: {
    w: window.innerWidth,
    h: window.innerHeight
  },

  keys: { SPACE: 'Space' },

  circles: [],

  init() {
    this.setDimensions()
    this.setEventListeners()
    this.start()
  },

  setDimensions() {
    this.gameScreen.style.width = `${this.gameSize.w}px`
    this.gameScreen.style.height = `${this.gameSize.h}px`
  },

  setEventListeners() {

    document.onkeyup = event => {
      switch (event.code) {
        case this.keys.SPACE:
          this.createCircle()
          break
      }
    }
  },

  createCircle() {
    const newCircle = new Circle(this.gameScreen, this.gameSize)
    this.circles.push(newCircle)
  },

  start() {
    this.gameLoop()
  },

  gameLoop() {
    this.drawAll()
    this.clearAll()
    window.requestAnimationFrame(() => this.gameLoop())
  },

  drawAll() {
    this.circles.forEach(eachCircle => eachCircle.move())
  },

  clearAll() {
    this.circles.forEach((eachCircle, idx) => {
      if (eachCircle.circlePos.left >= this.gameSize.w) {
        this.circles.splice(idx, 1)         // Eliminar del array
        eachCircle.circleElement.remove()   // Eliminar del DOM
      }
    })
  }
}