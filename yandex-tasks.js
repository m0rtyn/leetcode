/**
 * Нужно написать функцию get. На вход функция принимает объект и путь до поля объекта. 
 * Путь – это строка, разделенная точкой. Функция должна вернуть соответствующее поле объекта. 
 * Запрашиваемого поля в объекте может не быть.
 */

// function get(obj, path) {
//     if (!obj) return
//     if (path === '') return obj

//     const [firstItem, ...rest] = path.split('.')
//     // firstItem //?
//     // rest //?
//     const newPath = rest?.join('.') || ''

//     if (!obj) return

//     const newObj = obj[firstItem]
//     if (!newObj) return undefined

//     return get(newObj, newPath)
// }

// function get(obj, path) {
//   let state = obj
//   let counter = path
//   let prop = ''
//   let countArr = counter.split('.')

//   while(state && counter.length > 0) {
//     countArr = counter.split('.')
//     counter = countArr.slice(1).join('.')
//     prop = countArr[0] //?
//     state //?
//     state = state[prop]
//   }

//   if (path.length !== 0 && !state) return undefined

//   return state
// }

// const obj = { 
// a: { 
//   b: { 
//     c: 'd' 
//   },
//   e: 'f'
// }
// };

// // get(obj, 'a.b');   // ?
// get(obj, 'a.b.c.d'); // ?
// get(obj, 'a.e');   // ?
// get(obj, 'a.x.e'); // ?

////////////////////////////////////////////////
function createStat() {
  let counter = 0
  let stack = []

  return (arg) => {
      stack.push(arg)
      counter += 1

      this.counter = counter
      this.called = counter > 0,
      this.callCount = this.counter,
      this.callAt = (idx) => stack[idx]
  }
}

var myStat = createStat();
myStat('first call');
myStat();
myStat('third call');

myStat //?
counter //?
called //?

myStat.counter //?
myStat.called // ?    
myStat.callCount  // ?
myStat.callAt    // ?


















createStat