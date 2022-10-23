let Curtains = {
    excute() {
        console.log("打开窗帘")
    }
}

let Clothes = {
    excute() {
        console.log("升上晾衣杆")
    }
}

let Tv = {
    excute() {
        console.log("打开电视机")
    }
}

class AIhome {
    constructor() {
        this.commandList = []
    }
    add(command) {
        this.commandList.push(command)
    }
    excute() {
        for (let i = 0, command; command = this.commandList[i++];) {
            console.log("excute",command)
            command.excute()
        }
    }
}

let command = new AIhome()

command.add(Clothes)
command.add(Curtains)
let command1 = new AIhome()
command1.add(Tv)
command.add(command1)
// console.log('command',command.commandList)

command.excute()