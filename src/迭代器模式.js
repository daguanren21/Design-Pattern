//

let obj = {
    data: ["1", "2", "3", "4"],
    [Symbol.iterator]() {
        const self = this;
        let index = 0;
        return {
            next() {
                if (index < self.data.length) {
                    return {
                        value: self.data[index++],
                        done: false
                    }
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }

            }
        }
    }
}

for (let item of obj) {
    console.log(item)
}



let keys = ['a', 'f', 'd', 'm']

keys.sort((a, b) => b > a ? 1 : -1)

console.log(keys)