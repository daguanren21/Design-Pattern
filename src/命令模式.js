//命令模式：发送请求，不知道接收这是谁，也不知道请求的操作是什么，一种松耦合的方式设计程序，使得请求发送者和请求接受者消除耦合关系

// let MenuBar = {
//     refresh: function () {
//         console.log("make the menu's page refresh")
//     }
// }

// var RefreshMenuBarCommand = function (receiver) {
//     return {
//         excute: function () {
//             receiver.refresh()
//         }
//     }
// }

// var setCommand = function (button, command) {
//     button.click = function () {
//         command.excute();
//     }
// }

// var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar)

// let oDiv = document.getElementById('app')
// setCommand(button,refreshMenuBarCommand)


var Ryu = {
    attack: function () {
        console.log("攻击")
    },
    defense: function () {
        console.log("防御")
    },
    jump: function () {
        console.log("跳跃")
    },
    crouch: function () {
        console.log("蹲下")
    }
}

var makeCommand = function (receiver, state) {
    if (receiver[state]) {
        return function () {
            receiver[state]()
        }
    } else {
        console.log("directive is not exist")
    }
}


var commands = {
    "119": "jump", //W
    "115": "croush", //S
    "97": "defence", //A
    "100": "attack" //D
}

var commandStack = [] //保存命令的堆栈

document.onkeypress = function (ev) {
    var keycode = ev.keycode,
        command = makeCommand(Ryu, commands[keycode])
    command && (command(), commandStack.push(command))
}

document.getElementById('replay').onclick = function () {
    var command;
    while (command = commandStack.shift()) {
        command()
    }
}