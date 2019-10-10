let blink = false
let door = false
let loop = false
let skull = false
let wave = false
let push = false
let press = false
input.onGesture(Gesture.LogoDown, function () {
    led.enable(true)
    for (let i = 0; i < 2; i++) {
        led.toggle(2, 2)
        basic.pause(100)
        led.toggle(3, 2)
        basic.pause(100)
        led.toggle(3, 1)
        basic.pause(100)
        led.toggle(2, 1)
        basic.pause(100)
        led.toggle(1, 1)
        basic.pause(100)
        led.toggle(1, 2)
        basic.pause(100)
        led.toggle(1, 3)
        basic.pause(100)
        led.toggle(2, 3)
        basic.pause(100)
        led.toggle(3, 3)
        basic.pause(300)
        basic.clearScreen()
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            # . . . #
            . # # # .
            `)
        for (let i = 0; i < 2; i++) {
            led.toggle(1, 0)
            led.toggle(3, 0)
            led.toggle(3, 2)
            led.toggle(1, 2)
            basic.pause(200)
            led.toggle(1, 0)
            led.toggle(3, 0)
            led.toggle(3, 2)
            led.toggle(1, 2)
            basic.pause(200)
        }
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    led.enable(true)
    for (let i = 0; i < 2; i++) {
        led.toggle(4, 4)
        basic.pause(200)
        led.toggle(4, 3)
        basic.pause(150)
        led.toggle(3, 4)
        basic.pause(200)
        led.toggle(3, 3)
        basic.pause(150)
        led.toggle(2, 4)
        basic.pause(200)
        led.toggle(2, 3)
        basic.pause(150)
        led.toggle(1, 4)
        basic.pause(200)
        led.toggle(1, 3)
        basic.pause(150)
        led.toggle(0, 4)
        basic.pause(200)
        led.toggle(0, 3)
        basic.pause(200)
        basic.clearScreen()
        led.toggle(4, 4)
        basic.pause(200)
        led.toggle(4, 3)
        basic.pause(150)
        led.toggle(4, 2)
        basic.pause(200)
        led.toggle(3, 4)
        basic.pause(200)
        led.toggle(3, 3)
        basic.pause(200)
        led.toggle(3, 2)
        basic.pause(200)
        led.toggle(3, 1)
        basic.pause(150)
        led.toggle(2, 4)
        basic.pause(200)
        led.toggle(2, 3)
        basic.pause(150)
        led.toggle(1, 4)
        basic.pause(200)
        led.toggle(1, 3)
        basic.pause(150)
        led.toggle(0, 4)
        basic.pause(200)
        led.toggle(0, 3)
        basic.pause(150)
        led.toggle(1, 3)
        basic.pause(150)
        led.toggle(2, 1)
        basic.pause(150)
        led.toggle(2, 0)
        basic.pause(150)
        led.toggle(1, 0)
        basic.pause(150)
        led.toggle(4, 2)
        basic.pause(150)
        led.toggle(3, 1)
        basic.pause(150)
        led.toggle(2, 0)
        basic.pause(150)
        led.toggle(0, 3)
        basic.pause(100)
        led.toggle(2, 2)
        basic.pause(100)
        led.toggle(1, 3)
        basic.pause(150)
        led.toggle(0, 0)
        basic.pause(150)
        led.toggle(1, 1)
        basic.pause(200)
        led.toggle(0, 0)
        basic.pause(200)
        led.toggle(1, 0)
        basic.pause(200)
        led.toggle(0, 1)
        basic.pause(200)
        led.toggle(2, 1)
        basic.pause(200)
        led.toggle(0, 1)
        basic.pause(200)
        led.toggle(1, 1)
        basic.pause(200)
        led.toggle(1, 2)
        basic.pause(200)
        led.toggle(0, 3)
        basic.pause(200)
        led.toggle(1, 2)
        led.toggle(3, 2)
        basic.pause(200)
        led.toggle(2, 2)
        basic.pause(200)
        led.toggle(0, 2)
        basic.pause(150)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.TiltRight, function () {
    led.enable(true)
    basic.showLeds(`
        . # # # .
        # # . # #
        # . . . #
        . # # # .
        . # # # .
        `)
    basic.pause(200)
    led.toggle(1, 0)
    led.toggle(3, 0)
    basic.pause(75)
    led.toggle(1, 3)
    led.toggle(2, 3)
    led.toggle(3, 3)
    basic.pause(200)
    led.toggle(1, 1)
    led.toggle(2, 0)
    led.toggle(3, 1)
    basic.pause(200)
    led.toggle(3, 1)
    led.toggle(2, 1)
    led.toggle(1, 1)
    basic.pause(200)
    led.toggle(0, 1)
    led.toggle(4, 1)
    basic.pause(200)
    led.toggle(0, 0)
    led.toggle(4, 0)
    basic.pause(200)
    led.toggle(2, 2)
    led.toggle(1, 3)
    led.toggle(3, 3)
    for (let i = 0; i < 6; i++) {
        basic.pause(200)
        led.toggle(1, 2)
        led.toggle(2, 2)
        basic.pause(200)
        led.toggle(1, 2)
        led.toggle(2, 2)
        basic.pause(200)
        led.toggle(2, 2)
        led.toggle(3, 2)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    led.enable(true)
    for (let i = 0; i < 4; i++) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            # # # # #
            # . # . #
            `)
        basic.pause(1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(1)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # . # #
            . # # # .
            . . # . .
            `)
        basic.pause(1)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    for (let i = 0; i < 2; i++) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . # #
            # . . . #
            # # # # #
            `)
        basic.pause(1)
        basic.showLeds(`
            # # # # #
            # . . # #
            # . # # #
            # . . # #
            # # # # #
            `)
        basic.pause(1)
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # . #
            # . # . #
            # # # # #
            `)
        basic.pause(1)
        basic.showLeds(`
            # # # # #
            # # . . #
            # # . . #
            # # . . #
            # # # # #
            `)
        basic.pause(1)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(1)
        basic.clearScreen()
        basic.showString("BOO")
        basic.pause(1)
        basic.showLeds(`
            . # # # .
            # # . # #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
})
function screensaver () {
    blink = input.isGesture(Gesture.LogoDown)
    door = input.isGesture(Gesture.LogoUp)
    loop = input.isGesture(Gesture.TiltLeft)
    skull = input.isGesture(Gesture.TiltRight)
    wave = input.isGesture(Gesture.Shake)
}
basic.forever(function () {
    push = input.buttonIsPressed(Button.A)
    if (push) {
        basic.pause(2000)
        basic.showString("Start")
    }
    press = input.buttonIsPressed(Button.B)
    if (press) {
        led.enable(false)
        basic.clearScreen()
    }
})
