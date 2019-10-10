input.onGesture(Gesture.TiltRight, function () {
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
    for (let i = 0; i < 8; i++) {
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
})
let push = false
let ghost = input.isGesture(Gesture.LogoDown)
let door = input.isGesture(Gesture.LogoUp)
let loop = input.isGesture(Gesture.TiltLeft)
let skull = input.isGesture(Gesture.TiltRight)
let wave = input.isGesture(Gesture.Shake)
basic.forever(function () {
    push = input.buttonIsPressed(Button.A)
    if (push) {
        basic.pause(2000)
        basic.showString("Start")
    }
})
