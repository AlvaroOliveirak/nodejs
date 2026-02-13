require("./soma")
require("./sub")
require("./multi")
require("./div")

//exportando as funções como modulos para esse arquivo. pode ser feito diretamente no arquivo da função, mas aqui é mais organizado.
module.exports = {
    soma,
    sub,
    multi,
    div
}

calcsoma =soma(1,2)
calcsub = sub(1,2) 
calcdiv = div(1,2)
calcmulti =multi(1,2); 

console.log(calcsoma)
console.log(calcsub)
console.log(calcdiv)
console.log(calcmulti)
