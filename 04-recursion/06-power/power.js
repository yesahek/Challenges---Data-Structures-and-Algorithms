function power(num, expo) {
    if (expo === 0 ) {
        return 1;
    }

    return num * power(num, expo - 1);
}
module.exports = power;