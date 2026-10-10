const ipToInt =  (ip = '130.2.0.6') => {
    return ip
    .split('.')
    .reduce((acc, byte, index ) => {
        const num = Number(byte);
        const shift = (3 - index) * 8;
        return acc + (num << shift);
    }, 0);

};
console.log(ipToInt('130.2.0.6'));
console.log(ipToInt('21.0.5.1'));
console.log(ipToInt('122.369.0.1'));
