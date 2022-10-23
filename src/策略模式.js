//Crypto模块 根据不同模式进行不同的方法实现

function getSalleryRate(kpi, base) {
    if (kpi === 'A') {
        return base * 18
    }
    if (kpi === 'B') {
        return base * 8
    }
    if (kpi === 'C') {
        return base * 2
    }
    if (kpi === 'D') {
        return base * 0.5
    }

}
let strategies = {
    'A': function (base) {
        return base * 18
    },
    'B': function (base) {
        return base * 8
    },
    'C': function (base) {
        return base * 2
    },
    'D': function (base) {
        return base * 0.5
    }
}

function calcMoney(kpi, base) {
    return strategies[kpi](base)
}

calcMoney('B', 20000);









