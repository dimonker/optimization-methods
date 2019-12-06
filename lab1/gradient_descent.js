const gradientDescent = (df1, df2, x0, x1, precision, gamma) => {
  let F = (a, b) => 100*Math.pow(b-Math.pow(a,2),2)+Math.pow((1-a),2)
  // let F = (a, b) => Math.pow(Math.E,a+b)+2*Math.pow(b,2)+Math.pow(a,2)
  let curX0 = x0;
  let curX1 = x1;
  let x0PreviousStepSize = 2 * precision;
  let x1PreviousStepSize = 2 * precision;
  let fPrevSize = 1

  while ( (fPrevSize > precision) &&  (x0PreviousStepSize > precision && x1PreviousStepSize > precision)) {
      
      let prevX0 = curX0;
      let prevX1 = curX1;
      curX0 -= gamma * df1(prevX0, prevX1);
      curX1 -= gamma * df2(prevX0, prevX1);

      x0PreviousStepSize = Math.abs(curX0 - prevX0);
      x1PreviousStepSize = Math.abs(curX1 - prevX1);
      fPrevSize = Math.abs(F(curX0, curX1)-F(prevX0, prevX1));
      // console.log(grad(0,0));
      // console.log(curX0+" "+curX1);
      console.log(F(curX0, curX1))

  }

  return {
    curX0,
    curX1,
  }
}

let df1 = (x1, x2) => 400*Math.pow(x1, 3)+(2-400*x2)*x1-2;
let df2 = (x1, x2) => 200*(x2-Math.pow(x1, 2));


// let df1 = (x0, x1) => Math.pow(Math.E, x0+x1)+2*x0;
// let df2 = (x0, x1) => Math.pow(Math.E, x0+x1)+4*x1;

let grad = (x1, x2) => df1(x1,x2) + df2(x1,x2)

console.log(grad(0,0))

// let res = gradientDescent(grad, 1.3, 1.3, 0.00000001, 0.00001);

let res = gradientDescent(df1, df2, 7, 7, 0.00000001, 0.00010);
console.log(res);

// export {gradientDescent}