var Singleton = function (name) {
    this.name = name;
    this.instance = null
}

Singleton.prototype.getName = function () {
    return this.name
}
Singleton.getInstance = function (name) {
    if (!this.instance) this.instance = new Singleton(name)
    console.log('this指向', this)
    return this.instance
}

var a = Singleton.getInstance('zqh') //this指向构造函数

var b = Singleton.getInstance('lyc')

console.log(a === b) //true
console.log(a.getName()) //zqh
console.log(b.getName()) //zqh
//是否被继承

// 惰性单例，需要的时候才创建对象实例(cached)

function getSingle(fn) {
    let res = null
    return function () {
        return res || (res = fn.apply(this, arguments))
    }
}

