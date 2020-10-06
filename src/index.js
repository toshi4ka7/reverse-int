module.exports = function reverse (n) {
    n += '';
    n = n.split('').reverse().join('');
    console.log(n[n.length - 1]);
    if (n[n.length - 1] === '-') {
      n = n.substring(0, n.length - 1);
    }
    return +n;
}
