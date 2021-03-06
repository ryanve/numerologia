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

assert.ok(api.key("0") === 0)
assert.ok(api.key(0) === 0)
assert.ok(api.key(9) === 9)
assert.ok(api.key(3) === 3)
assert.ok(api.key(12) === 3)
assert.ok(api.key(21) === 3)
assert.ok(api.key(28) === 1)
assert.ok(api.key(90) === 9)
assert.ok(api.key(99) === 9)
console.log("ok key")

assert.ok(api.show("  ") === "00")
assert.ok(api.show("..") === "00")
assert.ok(api.show("DJ") === "41")
assert.ok(api.show("a11y") === "1117")
assert.ok(api.show("grace") === "79135")
assert.ok(api.show("blink-182") === "239520182")
assert.ok(api.show("space cadet") === "17135031452")
console.log("ok show")

assert.ok(api.suma(99) === 18)
assert.ok(api.suma("99") === 18)
assert.ok(api.suma("FF") === 12)
assert.ok(api.suma("firefox") === 47)
console.log("ok suma")

assert.ok(api.numero(911) === 11)
assert.ok(api.numero("911") === 11)
assert.ok(api.numero("FF") === 3)
assert.ok(api.numero("firefox") === 11)
console.log("ok numero")

assert.ok(api.raiz(29) === 2)
assert.ok(api.raiz("29") === 2)
assert.ok(api.raiz("99") === 9)
assert.ok(api.raiz("FF") === 3)
assert.ok(api.raiz("firefox") === 2)
console.log("ok raiz")

if (api.base === api.bass) {
  assert.ok(api.bass("música"), "musica")
  assert.ok(api.bass("Áá"), "Aa")
  assert.ok(api.bass("¡!"), "¡!")
  assert.ok(api.bass(11), "11")
  assert.ok(api.bass(0), "0")
  console.log("ok bass")
} else assert.ok(api.base === api.basic)

console.log("ok base")
assert.ok(api.basic("saxofón"), "saxofón")
assert.ok(api.basic(11), "11")
assert.ok(api.basic(0), "0")
console.log("ok basic")

assert.ok(api.raiz === api.root)
assert.ok(api.numero === api.num)
assert.ok(api.suma === api.sum)
console.log("ok alias")

assert.ok(api("raiz", 11) === api.raiz("11"))
assert.ok(api.create("!@#").raiz("!!") === 2)
console.log("ok api")

console.log("=)\n")
