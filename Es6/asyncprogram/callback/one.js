let calc = (a,b,operation) =>{
    if (operation == 'sum') {
        return a +b
    }
    if (operation == 'multi') {
        return a * b
    }
}

let r1 = calc(20,30,'sum');
let r2 = calc(20,30,'multi');
console.log(r1)
console.log(r2)