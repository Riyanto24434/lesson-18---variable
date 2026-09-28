let drink = 0
let teman = 0
input.onButtonPressed(Button.A, function () {
    drink = randint(0, 2)
    if (drink == 0) {
        basic.showString("ES TEH")
    } else if (drink == 1) {
        basic.showString("SUSU")
    } else if (drink == 2) {
        basic.showString("JUS")
    } else {
        basic.showString("AIR MINERAL")
    }
})
input.onButtonPressed(Button.B, function () {
    teman = randint(0, 2)
    if (teman == 0) {
        basic.showString("ARIS")
    } else if (teman == 1) {
        basic.showString("RIYANTO")
    } else if (teman == 2) {
        basic.showString("NISKALA")
    } else {
        basic.showString("ZAVIAN")
    }
})
