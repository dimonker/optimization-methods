const phi = 0.5 * (1 + Math.sqrt(5))
const gss = (f, a, b, e) => {
  while (Math.abs(b - a) > e) {
    let c = b - (b - a) / phi
    let d = a + (b - a) / phi 
    if (f(c) < f(d))
        b = d
    else
        a = c
  }

  return (b + a) / 2
}

//gss(Math.sin, -(Math.PI/2), Math.PI / 2, 0.01)

export { gss }
