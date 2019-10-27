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
            }
            else {
                dist = new Object()
            }
            cache.push([sourse, dist])
            for (let key in sourse) {
                dist[key] = deepClone(sourse[key])
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


