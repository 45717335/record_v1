input.onButtonPressed(Button.A, function () {
    i1 = i1 + i2
    shownum2(noice_list[i1], i1)
})
input.onButtonPressed(Button.AB, function () {
    if (i2 == 1) {
        i2 = 10
        startbit.startbit_setPixelRGB(StartbitLights.Light2, StartbitRGBColors.Green)
    } else if (i2 == 10) {
        i2 = 100
        startbit.startbit_setPixelRGB(StartbitLights.Light2, StartbitRGBColors.Red)
    } else {
        i2 = 1
        startbit.startbit_clearLight()
    }
    startbit.startbit_showLight()
})
input.onButtonPressed(Button.B, function () {
    i1 = i1 - i2
    shownum2(noice_list[i1], i1)
})
function shownum2 (数字: number, 数字2: number) {
    basic.clearScreen()
    if (数字 < 0) {
        led.plot(0, 0)
    } else {
        if (数字 % 2 ** 9 >= 2 ** 8) {
            led.plot(1, 0)
        }
        if (数字 >= 2 ** 7) {
            led.plot(2, 0)
        }
        if (数字 % 2 ** 7 >= 2 ** 6) {
            led.plot(3, 0)
        }
        if (数字 % 2 ** 6 >= 2 ** 5) {
            led.plot(4, 0)
        }
        if (数字 % 2 ** 5 >= 2 ** 4) {
            led.plot(0, 1)
        }
        if (数字 % 2 ** 4 >= 2 ** 3) {
            led.plot(1, 1)
        }
        if (数字 >= 2 ** 2) {
            led.plot(2, 1)
        }
        if (数字 % 2 ** 2 >= 2 ** 1) {
            led.plot(3, 1)
        }
        if (数字 % 2 ** 1 >= 2 ** 0) {
            led.plot(4, 1)
        }
    }
    if (数字2 < 0) {
        led.plot(0, 2)
    } else {
        if (数字2 % 2 ** 14 >= 2 ** 13) {
            led.plot(1, 2)
        }
        if (数字2 % 2 ** 13 >= 2 ** 12) {
            led.plot(2, 2)
        }
        if (数字2 % 2 ** 12 >= 2 ** 11) {
            led.plot(3, 2)
        }
        if (数字2 % 2 ** 11 >= 2 ** 10) {
            led.plot(4, 2)
        }
        if (数字2 % 2 ** 10 >= 2 ** 9) {
            led.plot(0, 3)
        }
        if (数字2 % 2 ** 9 >= 2 ** 8) {
            led.plot(1, 3)
        }
        if (数字2 % 2 ** 8 >= 2 ** 7) {
            led.plot(2, 3)
        }
        if (数字2 % 2 ** 7 >= 2 ** 6) {
            led.plot(3, 3)
        }
        if (数字2 % 2 ** 6 >= 2 ** 5) {
            led.plot(4, 3)
        }
        if (数字2 % 2 ** 5 >= 2 ** 4) {
            led.plot(0, 4)
        }
        if (数字2 % 2 ** 4 >= 2 ** 3) {
            led.plot(1, 4)
        }
        if (数字2 >= 2 ** 2) {
            led.plot(2, 4)
        }
        if (数字2 % 2 ** 2 >= 2 ** 1) {
            led.plot(3, 4)
        }
        if (数字2 % 2 ** 1 >= 2 ** 0) {
            led.plot(4, 4)
        }
    }
    basic.pause(500)
}
let noice_list: number[] = []
let i2 = 0
let i1 = 0
startbit.startbit_Init()
i1 = 1
i2 = 1
basic.showArrow(ArrowNames.East)
noice_list.push(startbit.startbit_getSoundVolume())
noice_list.push(startbit.startbit_getSoundVolume())
noice_list.push(startbit.startbit_getSoundVolume())
noice_list.push(startbit.startbit_getSoundVolume())
noice_list.push(startbit.startbit_getSoundVolume())
