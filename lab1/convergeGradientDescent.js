const gradientDescent = (f, x0, precision, gamma) => {
  let curX = x0;
  let previousStepSize = 2*precision;

  while (previousStepSize > precision) {
      let prevX = curX;
      curX -= gamma * f(prevX);
      previousStepSize = Math.abs(curX - prevX);
  }
  return curX;
}
  
//let df = x => 4 * Math.pow(x, 3) - 9 * Math.pow(x, 2)
//let x0 = 1
//let gamma = 0.01;
//let precision = 0.01;
//let res = gradientDescent(df, x0, precision, gamma);

export { gradientDescent }  
