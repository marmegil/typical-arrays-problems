
exports.min = function min (array) {
  const min = Math.min.apply(null, array);
  if (min == Infinity) return 0;
  else return min;
}

exports.max = function max (array) {
  const max = Math.max.apply(null, array);
  if (max == -Infinity) return 0;
  else return max;
}

exports.avg = function avg (array) {
  if (array == undefined) return 0;
  else if (array.length == 0) return 0;
  else return array.reduce((a, b) => (a + b)) / array.length;;
}
