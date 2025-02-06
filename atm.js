// Требуется выдать запрошенную сумму купюрами в рублях начиная от более крупных к более мелким.
// В наличии имеются купюры 50 руб, 100 руб, 500 руб, 1000 руб, 5000 руб.
// У каждой купюры есть лимиты на выдачу (количество банкнот данного номинала в наличии)
// Если выдать заданную сумму нельзя — вывести сообщение об ошибке.

// Шаблон:
let limits = {
  5000: 5,
  1000: 10,
  500: 25,
  100: 10,
  50: 20,
  23: 10,
  15: 5
}

// 5000 -> 5000
// 5050 -> 5050, 50
// 6060 -> 5000, 1000, 50, 10
// 10015 -> 5000*2, 10
// - [x] 20 -> 15 -> throw error 

// 

function atm(sum, limits) {
  const result = new Map()
  let i = 0
  const banknotes = Object(limits).keys().sort((b,a) => b - a)

  while (sum > 0) {
      if (i > limits.length) {
          i = 0
          continue
      }

      const banknote = banknotes[i]

      const limit = limits[banknote]
      if (limit < 1) {
          i++
          continue
      }

      if (banknote > sum) {
          i++
          continue
      }
      if (i === banknotes.langth-1 && banknote < sum) throw Error('')


      // if (sum - banknote > banknote) // TODO
      // if (limit === 0) // TODO

      sum - banknote
      result.set(banknote, result.has(banknote) 
          ? result.get(banknote) + 1 
          : 1)
      limits[banknote] -= 1

      // for () {}
      // if (sum > banknote && sum < sum - banknote) {
      //     // TODO
      // }
      i=0
  }

  return Object.fromEntries(result.entries())
}