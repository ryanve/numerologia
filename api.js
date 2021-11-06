!function(esta) {
  var latin = "abcdefghijklmnopqrstuvwxyz"
  var join = "".join
  var split = "".split
  var lower = "".toLowerCase
  var digit = /^\d+$/
  var round = Math.round
  var repeating = /^(.)\1+$/
  var glyph = /[\u0300-\u036f]/g
  var norm = "".normalize

  function create(bet) {
    bet = bet ? lower.call(bet) : latin
    var base = norm ? bass : basic

    function bass(txt) {
      return norm.call(txt, "NFD").replace(glyph, "")
    }

    function basic(txt) {
      return "" + txt
    }

    function key(n) {
      return modulo(digit.test(n) ? n : place(n))
    }

    function modulo(n) {
      return +n ? n % 9 || 9 : 0
    }

    function place(letter) {
      letter = base(lower.call(letter))
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
        next =  key(next)
        suma += next > 0 ? +next : 0
      }
      return round(suma)
    }

    function raiz(txt) {
      var n = suma(txt)
      return n < 10 ? n : raiz(n)
    }

    function numero(txt) {
      var n = suma(txt)
      return n < 10 || rep(n) ? n : numero(n)
    }

    function show(txt) {
      txt = stack(txt)
      var over = txt.length
      var next = 0
      var show = ""
      while (next < over) {
        show += key(txt[next++])
      }
      return show
    }

    function rep(dig) {
      return repeating.test(dig)
    }

    function api(method, txt) {
      return api[method](txt)
    }

    api.base = base
    api.bass = bass
    api.basic = basic
    api.create = create
    api.key = key
    api.modulo = modulo
    api.num = numero
    api.numero = numero
    api.place = place
    api.raiz = raiz
    api.rep = rep
    api.root = raiz
    api.show = show
    api.sum = suma
    api.suma = suma
    return api
  }

  var api = create()
  var nombre = "numerologia"
  typeof module != "undefined" && module.exports
    ? module.exports = api
    : esta[nombre] = api
}(this)
