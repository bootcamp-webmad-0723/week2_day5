class Figure {

  constructor(gameScreen, gameSize) {

    this.gameScreen = gameScreen;
    this.gameSize = gameSize;

    this.figureSize = {
      w: 100,
      h: 100
    }
    this.figurePos = {
      left: 100,
      top: 100
    }

    this.init()
  }

  init() {

    this.figureElement = document.createElement('img')
    this.figureElement.src = './img/mario03.png'

    this.figureElement.style.position = "absolute"
    this.figureElement.style.width = `${this.figureSize.w}px`
    this.figureElement.style.height = `${this.figureSize.h}px`
    this.figureElement.style.left = `${this.figurePos.left}px`
    this.figureElement.style.top = `${this.figurePos.top}px`

    this.gameScreen.appendChild(this.figureElement)
  }
}