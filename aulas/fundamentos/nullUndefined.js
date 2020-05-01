let valor //não inicializada
console.log(valor)

valor = null //ausencia de valor
console.log(valor)
// console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log (!!produto.preco)
console.log(produto)

// null : valor primitivo que representa a ausencia intencional de um valor de objeto
// undefined : valor primitivo utilizado quando uma variavel não teve valor atribuido

