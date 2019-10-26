const chai = require("chai")
const sinon = require("sinon")
const sinonChai = require("sinon-chai")
chai.use(sinonChai);

const assert = chai.assert;
const deepClone = require('../src/index')

describe('deepClone', () => {
    it('是一个函数', () => {
        assert.isFunction(deepClone)
    })
    it('能够复制基本类型', () => {
        const n = 123
        const n2 = deepClone(n)
        assert(n === n2)
        const s = '12345'
        const s2 = deepClone(s)
        assert(s === s2)
        const b = false
        const b2 = deepClone(b)
        assert(b === b2)
        const u = undefined
        const u2 = deepClone(u)
        assert(u === u2)
        const empty = null
        const empty2 = deepClone(empty)
        assert(empty === empty2)
        const sym = Symbol()
        const sym2 = deepClone(sym)
        assert(sym === sym2)
    })
    describe('对象', () => {
        it('能够复制普通对象', () => {
            const a = { name: '旺旺', child: { name: '小旺' } }
            const a2 = deepClone(a)
            assert(a !== a2)
            assert(a.name === a2.name)
            assert(a.child !== a2.child)
            assert(a.child.name === a2.child.name)
        })
    })
})