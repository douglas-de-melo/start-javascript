//Obtenha os lados do triângulo usando o pormpt
const ladoA = parseFloat(prompt("Digite o comprimento do lado A"));
const ladoB = parseFloat(prompt("Digite o comprimento do lado B"));
const ladoC = parseFloat(prompt("Digite o comprimento do lado C"));

//Calcula o perímetro do triângulo
const perimetro = ladoA + ladoB + ladoC;

//Calcula a área usando a fórmula de Heron
const sp = perimetro / 2;  // Semiperímetro
const area = Math.sqrt(sp * (sp - ladoA) * (sp - ladoB) * (sp - ladoC));

//Exibe os resultados em um alert
alert(`perírimetro do triângulo: ${perimetro}\nÀrea do triângulo: ${area}`);

