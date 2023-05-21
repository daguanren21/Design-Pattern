//工厂模式就是使用同一类型的类，以便于接口统一方便调用，同时修改以及扩展时更加方便

class Shop {
    constructor() {
        return this[name].apply(this, [...arguments]);
    }

    Steak(name, price, time) {
        this.name = name;
        this.price = price;
        this.time = time;
    }
    Nodoles() {}
}

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
        console.log(`苹果尝起来很${this.flavour}`);
    }
}

class Orange extends Plant {
    constructor(flavour) {
        super("橘子");
        this.flavour = flavour;
    }
    taste() {
        console.log(`橘子尝起来很${this.flavour}`);
    }
}

class OrangeFactory {
    static create() {
        return new Orange("酸");
    }
}
class AppleFactory {
    static create() {
        return new Apple("甜");
    }
}
let apple = AppleFactory.create("apple");
apple.taste();