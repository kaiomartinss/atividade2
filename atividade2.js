const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pessoas = [];
let numPessoas = 0;

function solicitarDadosPessoa() {
  rl.question(`Informe a altura da pessoa ${numPessoas + 1}: `, (altura) => {
    rl.question(`Informe o sexo da pessoa ${numPessoas + 1} (M ou F): `, (sexo) => {
      pessoas.push({ altura: parseFloat(altura), sexo });
      numPessoas++;

      if (numPessoas < 15) {
        solicitarDadosPessoa();
      } else {
        rl.close();
        calcularResultados();
      }
    });
  });
}

function calcularResultados() {
  let maiorAltura = pessoas[0].altura;
  let menorAltura = pessoas[0].altura;
  let somaAlturaHomens = 0;
  let numHomens = 0;
  let numMulheres = 0;

  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].altura > maiorAltura) {
      maiorAltura = pessoas[i].altura;
    }
    if (pessoas[i].altura < menorAltura) {
      menorAltura = pessoas[i].altura;
    }
    if (pessoas[i].sexo === 'M') {
      somaAlturaHomens += pessoas[i].altura;
      numHomens++;
    } else {
      numMulheres++;
    }
  }

  const mediaAlturaHomens = somaAlturaHomens / numHomens;

  console.log('Maior altura do grupo:', maiorAltura);
  console.log('Menor altura do grupo:', menorAltura);
  console.log('Média de altura dos homens:', mediaAlturaHomens);
  console.log('Número de mulheres:', numMulheres);
  console.log('Número de mulheres:', numHomens);
}

solicitarDadosPessoa();
