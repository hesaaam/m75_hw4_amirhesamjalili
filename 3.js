function Based(Num, n, k) {
    let convert = parseInt(Num, n)
    return convert.toString(k)

};

console.log(Based(350, 10, 2));