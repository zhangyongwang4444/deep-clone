function deepClone(sourse) {
    if (sourse instanceof Object) {
        if (sourse instanceof Array) {
            const dist = new Array()
            for (let key in sourse) {
                dist[key] = deepClone(sourse[key])
            }
            return dist
        } else if (sourse instanceof Function) {
            const dist = function () {
                return sourse.apply(this, arguments)
            }
            for (let key in sourse) {
                dist[key] = deepClone(sourse[key])
            }
            return dist
        } else {
            const dist = new Object()
            for (let key in sourse) {
                dist[key] = deepClone(sourse[key])
            }
            return dist
        }
    }
    return sourse
}

module.exports = deepClone


