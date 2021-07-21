!function(scope) {
  var latin = "abcdefghijklmnopqrstuvwxyz"
  var bet = latin
  var join = "".join
  var split = "".split
  var lower = "".toLowerCase
  var digit = /^\d+$/
  var round = Math.round
  var repeating = /^(.)\1+$/
  var glyph = /[\u0300-\u036f]/g
  var norm = "".normalize

  function grapheme(txt) {
    return digit.test(txt) ? "" + txt :
      norm.call(txt, "NFD").replace(glyph, "")
  }

  function modulo(n) {
    n = digit.test(n) ? n : place(n)
    return +n ? n % 9 || 9 : 0
  }

  function place(letter) {
    letter = grapheme(lower.call(letter))
    return bet.indexOf(letter) + 1
  }

  function stack(txt) {
    var how = txt instanceof Array ? join : split
    return how.call(txt, "")
  }

  function suma(txt) {
    txt = stack(txt)
    var i = txt.length
    var suma = 0
    var next
    while (i--) {
      next = txt[i]
      next =  modulo(next)
      suma += next > 0 ? +next : 0
    }
    return round(suma)
  }

  function raiz(txt) {
    var n = suma(txt)
    return n < 10 ? n : raiz(n)
  }

  function vida(txt) {
    var n = suma(txt)
    return n < 10 || rep(n) ? n : vida(n)
  }

  function rep(dig) {
    return repeating.test(dig)
  }

  function api(method, txt) {
    return api[method](txt)
  }

  api.grapheme = grapheme
  api.life = vida
  api.modulo = modulo
  api.raiz = raiz
  api.rep = rep
  api.root = raiz
  api.sum = suma
  api.suma = suma
  api.vida = vida

  typeof module != "undefined" && module.exports
    ? module.exports = api
    : scope.numerologia = api
}(this)
