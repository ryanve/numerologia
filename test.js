let api = require(".")
let assert = require("assert")

assert.ok(api.rep("111"))
assert.ok(!api.rep("9"))
assert.ok(api.rep("99"))
assert.ok(api.rep("00"))
assert.ok(!api.rep("0"))
assert.ok(api.rep("zz"))
assert.ok(api.rep("ZZ"))
assert.ok(!api.rep("zZ"))
assert.ok(!api.rep("zZZ"))
console.log("ok rep")

assert.ok(api.modulo("0") === 0)
assert.ok(api.modulo(0) === 0)
assert.ok(api.modulo(9) === 9)
assert.ok(api.modulo(3) === 3)
assert.ok(api.modulo(12) === 3)
assert.ok(api.modulo(21) === 3)
assert.ok(api.modulo(28) === 1)
assert.ok(api.modulo(90) === 9)
assert.ok(api.modulo(99) === 9)
console.log("ok modulo")

assert.ok(api.suma(99) === 18)
assert.ok(api.suma("99") === 18)
assert.ok(api.suma("FF") === 12)
assert.ok(api.suma("firefox") === 47)
console.log("ok suma")

assert.ok(api.vida(911) === 11)
assert.ok(api.vida("911") === 11)
assert.ok(api.vida("FF") === 3)
assert.ok(api.vida("firefox") === 11)
console.log("ok vida")

assert.ok(api.raiz(29) === 2)
assert.ok(api.raiz("29") === 2)
assert.ok(api.raiz("99") === 9)
assert.ok(api.raiz("FF") === 3)
assert.ok(api.raiz("firefox") === 2)
console.log("ok raiz")

assert.ok(api.grapheme("Áá"), "Aa")
console.log("ok grapheme")

assert.ok(api.raiz === api.root)
assert.ok(api.vida === api.life)
assert.ok(api.suma === api.sum)
console.log("ok alias")

assert.ok(api("raiz", 11) === api.raiz("11"))
console.log("ok api")

console.log("=)\n")