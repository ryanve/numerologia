# [numerología](https://ryanve.github.io/numerologia)

[<b>calculadora de numerología <br> numerology calculator</b>](https://ryanve.github.io/numerologia)

## [api](api.js)

### número de numerología <br> numerology number

```js
numerologia.numero("66") // 3
numerologia.numero("999") // 9
numerologia.numero("agua") // 12
numerologia.numero("water") // 22
numerologia.numero("2020-12-12") // 1
```

### numerología del nombre <br> name numerology <br> baby naming

```js
numerologia.numero("dounia") // 1
numerologia.numero("summer") // 8
numerologia.numero("mf doom") // 3
```

### numerología de palabras <br> word numerology

```js
numerologia.numero("fire") // 11
numerologia.numero("soul") // 4
```

### brand numerology <br> brand naming

```js
numerologia.numero("github") // 4
numerologia.numero("github.com") // 44
```

### ruta de vida <br> life path number

```js
let nacimiento = "1997-03-31"
numerologia.numero(nacimiento) // 33
```

```js
let birth = "07/13/1971"
numerologia.numero(birth) // 11
```

### show digits

```js
numerologia.show("  ") // "00"
numerologia.show("DJ") // "41"
numerologia.show("a11y") // "1117"
numerologia.show("grace") // "79135"
numerologia.show("blink-182") // "239520182"
numerologia.show("space cadet") // "17135031452"

### suma digital <br> digital sum

```js
numerologia.suma("66") // 12
numerologia.suma("999") // 27
numerologia.suma("agua") // 12
numerologia.suma("water") // 22
numerologia.suma("2020-12-12") // 10
```

### raíz digital <br> digital root

```js
numerologia.raiz("999") // 9
numerologia.raiz("bae") // 8
numerologia.raiz("agua") // 3
numerologia.raiz("water") // 4
numerologia.raiz("2020-12-12") // 1
```

### repitiendo <br> repeating <br> repdigit

```js
numerologia.rep("9") // false
numerologia.rep("99") // true
numerologia.rep("100") // false
numerologia.rep("zzz") // true
numerologia.rep("zzZ") // false
```

### [base](../../pull/11)

```js
numerologia.base("Áá") // "Aa"
numerologia.base("amoré") // "amore"
```

### key

```js
numerologia.key("d") // 4
numerologia.key("j") // 1
numerologia.key(29) // 2
numerologia.key(10) // 1
```

### [create <br> crear](../../pull/29)

- create alternate nine [api](#api) from alphabet
- default alphabet is latin

```js
let robot = numerologia.create("!@#$%^&*()")
robot.raiz("!!") // 2
```

### [npm](https://npm.im/numerologia)

```bash
npm install numerologia
```
