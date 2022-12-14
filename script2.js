function pow(n, p) {
    if (p === 1)
        return n;
    else
        return (n * pow(n, p - 1));
}
function nod(a, b) {
    if (b == 0)
        return a;
    else
        return nod(b, a % b);
}

function maxDigit(n, max = -1){
    if(n<10&& n<max)
    return max

    temp = n % 10;
    
    if(temp > max)
    max = temp;

    return maxDigit(Math.floor(n/10), max);
}