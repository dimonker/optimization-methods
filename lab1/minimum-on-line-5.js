//

function solve5(fun, δ, x0, xn) {
  let h;
  let x1;
  if (fun(x0) > fun(x0 + δ)) {
    x1 = x0 + δ;
    h = δ;
  } else {
    x1 = x0 - δ;
    h = -δ;
  }

  let xk = x1;
  do {
    xk += h;
  } while (fun(xk) > fun(xk + h));
  return {
    a: xk - h,
    b: xk
  };
}

// console.log(solve5(f, 0.0005, -Math.PI / 2))

// console.log(solve5(f, 0.0005, Math.PI))
// console.log((Math.PI * 3) / 2)

export { solve5 };
