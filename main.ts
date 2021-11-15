input.onButtonPressed(Button.A, function () {
    count += 1
    if (count > Max_Count) {
        count = 10
        basic.showNumber(count)
    }
})
input.onButtonPressed(Button.B, function () {
    count += 1
    if (count < 0) {
        count = 0
        basic.showNumber(count)
    }
    basic.showNumber(count)
})
let Max_Count = 0
let count = 0
count = 0
basic.showNumber(count)
Max_Count = 10
basic.forever(function () {
    if (count == Max_Count) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
