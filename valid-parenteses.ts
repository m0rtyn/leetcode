function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  
  let stack: string[] = [];
  const arr = s.split('')
  arr.forEach(paren => {
    const lastInStack = stack[stack.length - 1]
    if (paren === ')' && lastInStack === '(') return stack.pop()
    if (paren === ']' && lastInStack === '[') return stack.pop()
    if (paren === '}' && lastInStack === '{') return stack.pop()

    stack.push(paren)
    return
  });

  return stack.length === 0;
}

isValid("[()()]"); //?
isValid("()[]{}"); //?
isValid("([{}])"); //?

isValid("([}}])"); //?
