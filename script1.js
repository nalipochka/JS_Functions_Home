function returnBigger(n1, n2){
    if(n1===n2)
    return 0;
    else if(n1>n2)
    return 1;
    else
    return -1;
}

function threeInOne(n1, n2, n3){
    return Number(`${n1}${n2}${n3}`);
}

function square(){
    if(arguments.length > 1){
        return arguments[0] * arguments[1];
    }
    else{
        return Math.pow(arguments[0], 2);
    }
} 

function isPerfect(n){
    sum = 0;
    for(i = 0; i < n; i++){
        if(n%i==0)
        sum +=i;
    }
    if(sum==n)
    return true;
    else
    return false;
}

function perfectRange(n1, n2){
    str ="";
    if(n1<n2){
        for(i = n1; i<n2;i++){
            if(isPerfect(i))
            str +=`${i} `;
        }
        return str;
    }
    else{
        for(i = n2; i<n1;i++){
            if(isPerfect(i))
            str +=`${i} `;
        }
        return str;
    }
}
