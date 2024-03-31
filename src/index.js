// module.exports = 

function reverse (n) {
    result = '';
    const number = String(n);

    for (let i = number.length - 1; i >= 0; i--) {
        result = result + number[i];
    }
    return result;
}

const flower = reverse(549);
console.log(flower);
