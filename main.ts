let Celsius = 0
input.onButtonPressed(Button.A, function () {
    if (Celsius == 10) {
        basic.showNumber(Celsius)
        basic.showString("Degree Celsius")
        basic.showString("Ski Time!")
    } else if (Celsius == 20) {
        basic.showNumber(Celsius)
        basic.showString("Degree Celsius")
        basic.showString("Picnic Time!")
    } else if (Celsius == 30) {
        basic.showNumber(Celsius)
        basic.showString("Degree Celsius")
        basic.showString("Beach Time!")
    } else if (Celsius == 40) {
        basic.showNumber(Celsius)
        basic.showString("Degree Celsius")
        basic.showString("Its better to stay at home")
    } else {
        basic.showNumber(Celsius)
        basic.showString("Degree Celsius")
    }
})
basic.forever(function () {
    Celsius = input.temperature()
})
