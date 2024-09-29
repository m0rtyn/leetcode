/**
* @param {Array<(x:number) => number>} fns
* @return {(x:number) => number}
*/
var compose = (fns) => {
  if (fns.length === 1) return (x) => fns[0](x)

  const lastFn = fns[fns.length - 1]
  const newFns = fns.slice(0,fns.length - 1) //=
  const result = compose(newFns) //=

  return (x) => result(lastFn(x))
}

const input = [x => x + 1, x => x * x, x => 2 * x]

console.log(compose(input)(4)) //?