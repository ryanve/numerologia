!function(esta) {
  var api = esta.numerologia
  var form = document.getElementById("formulario")
  var key = "_"
  var text = form[key]
  var raiz = form.raiz
  var numero = form.numero
  var suma = form.suma
  var title = "numerología: "
  var params = new URLSearchParams(location.search)
  var saved = params.get(key)

  update(text, saved)

  function update(element, value) {
    value = value || 0
    element.value == value || (element.value = value)
  }

  function calc() {
    var v = text.value
    v = v || v === 0 ? v : saved || 0
    document.title = title + v
    var calc = {
      suma: api.suma(v),
      numero: api.numero(v),
      raiz: api.raiz(v)
    }
    suma.hidden = calc.suma === calc.raiz
    numero.hidden =
      calc.numero === calc.raiz ||
      calc.numero === calc.suma
    update(suma, calc.suma)
    update(numero, calc.numero)
    update(raiz, calc.raiz)
  }

  calc()

  form.oninput = calc
  form.onchange = calc
  form.onsubmit = calc
}(this)
