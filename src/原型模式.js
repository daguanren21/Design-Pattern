class Parent {
    constructor() {
        this.firstName = "张"
    }
    sayLanguage() {
        console.log("说中文")
    }
}

class Child extends Parent {
    constructor() {
        super()
        this.lastName ="奇慧"
    }
    secondLanguage(){
        console.log("say EngLish")
    }
}

