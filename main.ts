input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # . # #
        # . # . #
        . # # # .
        # . # . #
        # # # # #
        `)
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
})
input.setSoundThreshold(SoundThreshold.Loud, 150)
basic.forever(function () {
	
})
