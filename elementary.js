const multiply = (a, b) => {
    let bul = false;
    if (b < 0) {
        b = -b;
        bul = true;
    }
    let count = 0;
    let res = 0;
    while (count < b) {
        res += a;
        count++;
    }
    if (bul) {
        res = -res;
    }
    return res;
};

const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }

    let negativeResult = false;
    if (a < 0 && b > 0 || a > 0 && b < 0) {
        negativeResult = true;
    }

    a = Math.abs(a);
    b = Math.abs(b);

    let count = 0;
    while (a >= b) {
        a -= b;
        count++;
    }

    return negativeResult ? -count : count;
};

const modulo = (a, b) => {
    if (b === 0) {
        throw new Error("Modulo by zero is not allowed");
    }

    const isNegative = a < 0;

    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b) {
        a -= b;
    }

    return isNegative ? -a : a;
};
