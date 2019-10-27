let cache = []
function deepClone(sourse) {
    if (sourse instanceof Object) {
        let cachedDist = findCache(sourse)
        if (cachedDist) { return cachedDist }
        else {
            let dist
            if (sourse instanceof Array) {
                dist = new Array()
            }
            else if (sourse instanceof Function) {
                dist = function () { return sourse.apply(this, arguments) }
            } else if (sourse instanceof RegExp) {
                dist = new RegExp(sourse.source, sourse.flags)
            } else if (sourse instanceof Date) {
                dist = new Date(sourse)
            }
            else {
                dist = new Object()
            }
            cache.push([sourse, dist])
            for (let key in sourse) { // 默认会遍历原型上的属性
                if (sourse.hasOwnProperty(key)) { // 排除原型上的属性
                    dist[key] = deepClone(sourse[key])
                }
            }
            return dist
        }
    }
    return sourse
}

function findCache(sourse) {
    for (let i = 0; i < cache.length; i++) {
        if (cache[i][0] === sourse) {
            return cache[i][1]
        }
    }
    return undefined
}

module.exports = deepClone


