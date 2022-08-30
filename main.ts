input.onButtonPressed(Button.A, function () {
    factor_1 = 5
    factor_2 = randint(0, 10)
    basic.showNumber(factor_1)
    basic.pause(500)
    basic.showString("X")
    basic.showNumber(factor_2)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(factor_1 * factor_2)
    basic.pause(500)
    basic.clearScreen()
})
let factor_2 = 0
let factor_1 = 0
basic.showString("tabla de multiplicar del 5")
basic.clearScreen()
