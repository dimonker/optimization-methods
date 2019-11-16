const gradientDescent = (f1, f2, x0, x1, precision, gamma) => {
  let curX0 = x0;
  let curX1 = x1;
  let x0PreviousStepSize = 2 * precision;
  let x1PreviousStepSize = 2 * precision;



  while (x0PreviousStepSize > precision && x1PreviousStepSize > precision) {
      let prevX0 = curX0;
      let prevX1 = curX1;
      curX0 -= gamma * f1(prevX0, prevX1);
      curX1 -= gamma * f2(prevX0, prevX1);
      x0PreviousStepSize = Math.abs(curX0 - prevX0);
      x1PreviousStepSize = Math.abs(curX1 - prevX1);
      console.log(curX0+" "+curX1);
  }

  return {
    curX0,
    curX1,
  }
}

let df1 = (x0, x1) => 400*x0*(Math.pow(x0, 2)+x1)-2*(1-x0);
let df2 = (x0, x1) => 200*(x1+(Math.pow(x0, 2)));

let res = gradientDescent(df1, df2, -50, -55, 0.01, 0.000001);

export {gradientDescent}