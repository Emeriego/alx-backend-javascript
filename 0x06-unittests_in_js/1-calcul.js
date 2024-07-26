function calculateNumber(type, a, b) {
    const y = Math.round(a);
    const x = Math.round(b);
    let c = 0;
    switch (type) {
    case 'SUM':
	c = y + x;
	break;
    case 'SUBTRACT':
	c = y - x;
	break;
    case 'DIVIDE':
      if (x === 0) {
            c = "Error";
      } else {
            c = y / x;
      }
      break;
    }
    return c;
}

module.exports = calculateNumber;
