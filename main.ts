input.onButtonPressed(Button.A, function () {
	
})
let sprite: game.LedSprite = null
for (let index = 0; index < 3; index++) {
    sprite = game.createSprite(4, 0)
    for (let index = 0; index < 4; index++) {
        sprite.move(-1)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        sprite.turn(Direction.Right, 45)
        sprite.move(1)
        basic.pause(100)
        sprite.turn(Direction.Left, 45)
    }
    sprite.turn(Direction.Left, 45)
    for (let index = 0; index < 4; index++) {
        sprite.move(1)
        basic.pause(100)
    }
    sprite.turn(Direction.Right, 45)
    for (let index = 0; index < 4; index++) {
        sprite.turn(Direction.Left, 45)
        basic.pause(100)
        sprite.move(-1)
        sprite.turn(Direction.Right, 45)
        basic.pause(100)
    }
    sprite.turn(Direction.Right, 45)
    for (let index = 0; index < 4; index++) {
        sprite.move(-1)
        basic.pause(100)
    }
    sprite.delete()
}
basic.forever(function () {
	
})
