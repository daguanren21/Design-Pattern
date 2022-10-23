//代理模式示例: 实现虚拟代理实现图片懒加载

// var myImage = (function () {
//     var imageNode = document.createElement('img');
//     document.body.appendChild(imageNode)
//     return {
//         setSrc: function (src) {
//             imageNode.src = src
//         }
//     }
// }())

// var proxyImage = (function () {
//     var img = new Image;
//     img.onload = function () {
//         myImage.setSrc(this.src)
//     }
//     return {
//         setSrc: function (src) {
//             myImage.setSrc("file://C:/Users/svenzeng/Deskstop/loading.gif");
//             img.src = src
//         }
//     }
// })()

// proxyImage.setSrc("http://imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg");


//缓存代理

var mult = function () {
    console.log("开始计算")
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i]
    }
    return a
}

var proxyMult = (function () {
    var cache = {}
    return function () {
        var args = Array.prototype.join.call(arguments, ',')
        if (args in cache) {
            return cache[args]
        }
        return cache[args] = mult.apply(this, arguments)
    }
}())

let result = proxyMult(1, 2, 3, 4)
console.log(result)