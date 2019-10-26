function deepClone(sourse) {
    if (sourse instanceof Object) {
        const dist = new Object()
        for (let key in sourse) {
            dist[key] = deepClone(sourse[key])
        }
        return dist
    }
    return sourse
}

module.exports = deepClone


