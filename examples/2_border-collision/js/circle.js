class Circle {

  constructor(gameScreen, gameSize) {

    this.gameScreen = gameScreen
    this.gameSize = gameSize

    this.circleSize = {
      w: 40,
      h: 40
    }
    this.circlePos = {
      left: 0,
      top: 0
    }

    this.circleVel = {
      left: 10,
      top: 7
    }

    this.init()
  }

  init() {

    this.circleElement = document.createElement('div')

    this.circleElement.style.position = "absolute"
    this.circleElement.style.width = `${this.circleSize.w}px`
    this.circleElement.style.height = `${this.circleSize.h}px`
    this.circleElement.style.left = `${this.circlePos.left}px`
    this.circleElement.style.top = `${this.circlePos.top}px`
    this.circleElement.style.backgroundColor = `red`
    this.circleElement.style.borderRadius = `50%`

    this.gameScreen.appendChild(this.circleElement)
  }

  move() {
    this.checkBorderCollision()

    this.circlePos.left += this.circleVel.left
    this.circlePos.top += this.circleVel.top

    this.updatePosition()
  }

  checkBorderCollision() {

    if (
      this.circlePos.top > this.gameSize.h - this.circleSize.h ||
      this.circlePos.top < 0
    ) {
      this.circleVel.top *= -1
    }

    if (
      this.circlePos.left >= this.gameSize.w - this.circleSize.w ||
      this.circlePos.left < 0
    ) {
      this.circleVel.left *= -1
    }
  }

  updatePosition() {
    this.circleElement.style.left = `${this.circlePos.left}px`
    this.circleElement.style.top = `${this.circlePos.top}px`
  }
}