function ipToInt(ip = "127.0.0.1") {
  return ip
    .split(".")
    .map(Number)
    .reduce((acc, num, i) => acc + (num << (8 * (3 - i))), 0);
}

module.exports = ipToInt;
