//建造者模式： 将复杂对象的构建与他的表示分离,使得同样的构建过程可以创建不同的表示

let Builder = function () {
    //决定房间数量
    function buildRooms() {

    }
    // 决定面积大小
    function buildFloorSpace() {

    }
    // 整体风格
    function buildStyle() {

    }
    return class {
        constructor(member, budget, style) {
            buildRooms.call(this, member)
            buildFloorSpace.call(this, budget)
            buildStyle.call(this, style)
        }
    }
}