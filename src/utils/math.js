export function random(lower, upper, isIncludeUpper) {
  let count = (upper - lower)
  if(!!isIncludeUpper) count += 1
  return Math.floor(Math.random() * count + lower)
}