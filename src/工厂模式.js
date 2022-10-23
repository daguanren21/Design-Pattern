//工厂模式就是使用同一类型的类，以便于接口统一方便调用，同时修改以及扩展时更加方便


class Shop {

    constructor() {
        return this[name].apply(this, [...arguments])
    }

    Steak(name,price,time){
        this.name = name
        this.price = price
        this.time =time
    }
    Nodoles(){
        
    }
}