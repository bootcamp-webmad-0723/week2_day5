class Square {

  constructor(gameScreen, gameSize) {

    this.gameScreen = gameScreen
    this.gameSize = gameSize

    this.squareSize = {
      w: 300,
      h: 100
    }

    this.squarePos = {
      left: 200,
      top: gameSize.h - this.squareSize.h
    }

    this.init()
  }

  init() {

    this.squareElement = document.createElement('div')

    this.squareElement.style.position = "absolute"
    this.squareElement.style.width = `${this.squareSize.w}px`
    this.squareElement.style.height = `${this.squareSize.h}px`
    this.squareElement.style.left = `${this.squarePos.left}px`
    this.squareElement.style.top = `${this.squarePos.top}px`
    this.squareElement.style.backgroundColor = `black`

    this.gameScreen.appendChild(this.squareElement)
  }
}