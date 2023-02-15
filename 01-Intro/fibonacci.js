function fibonacci(n) {
  let fib = [0, 1];
  for (var i = 2; i < n; i++) {
    fib.push(fib[i - 2] + fib[i - 1]);
  }
  return fib[n - 1];
}
module.exports = fibonacci;
