//简单工厂
// 开闭原则（对修改关闭，对扩展开放）
class Plant {
    constructor(name) {
        this.name = name;
    }
    grow() {}
}

class Apple extends Plant {
    constructor(flavour) {
        super("苹果");
        this.flavour = flavour;
    }
    taste() {
        console.log("苹果尝起来很甜");
    }
}

class Orange extends Plant {
    constructor(flavour) {
        super("橘子");
        this.flavour = flavour;
    }
    taste() {
        console.log("橘子尝起来很酸");
    }
}

class Factory {
    static create(type) {
        switch (type) {
            case "apple":
                return new Apple('甜');
                break;
            case "orange":
                return new Orange('酸');
                break;
            default:
                throw new Error("不存在此物品");
                break;
        }
    }
}

let apple = Factory.create('apple')
console.log(apple.flavour)