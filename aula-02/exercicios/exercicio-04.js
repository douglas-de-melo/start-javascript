//Solicita ao usuário o valor da compra
let valorCompra = parseFloat(prompt("Digite o valor da compra:"));

//Solicita ao usuário a porcentagem de desconto
let porcentagemDesconto = parseFloat(prompt("Digite a porcentagem do desconto:"));

//Calcula o valor de desconto
let desconto = (porcentagemDesconto / 100) * valorCompra;

//Calcula o total de desconto aplicado
let totalComDesconto = valorCompra - desconto;

//Exibe os valores usando template strings
alert(`valor da compra: R$ ${valorCompra}
Valor do desconto: R$ ${desconto}
Valor com desconto R$ ${totalComDesconto}`);