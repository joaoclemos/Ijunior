// ============================================================================
// EXERCÍCIOS DE TYPESCRIPT - 2
// ============================================================================
// Bem-vindo(a) ao seu primeiro conjunto de exercícios de programação! 🎉
//
// IMPORTANTE: Não se preocupe se algo parecer confuso no início.
// Programação é como aprender um novo idioma - leva tempo e prática.
//
// COMO USAR ESTE ARQUIVO:
// 1. Leia cada seção com atenção
// 2. Complete os exercícios substituindo 'any' ou os comentários
// 3. Rode o arquivo para testar: npx ts-node exercicios.ts
// 4. Verifique se os resultados batem com o "esperado"
//
// DICAS:
// - Leia os comentários com atenção - eles são seus guias!
// - Se travar, respire fundo e releia o enunciado
// - Errar faz parte do processo de aprendizado
// - Peça ajuda sempre que precisar!
// ============================================================================

// ============================================================================
// SEÇÃO 1: TIPOS PRIMITIVOS
// ============================================================================
// Em TypeScript, todo valor tem um "tipo". Os tipos mais básicos são:
// - string: texto entre aspas ("olá" ou 'olá')
// - number: números (42, 3.14, -7)
// - boolean: verdadeiro ou falso (true ou false)
//
// Seu trabalho aqui é CORRIGIR os tipos 'any' para o tipo correto.
// ============================================================================

// Exercício 1.1: Corrija o tipo de 'meuNome'
// Dica: Nomes são textos, então use o tipo que representa texto
let meuNome: string = "João Silva";

// Exercício 1.2: Corrija o tipo de 'minhaIdade'
// Dica: Idade é um número
let minhaIdade: number = 25;

// Exercício 1.3: Corrija o tipo de 'estouAprendendo'
// Dica: Perguntas que têm resposta sim/não usam um tipo específico
let estouAprendendo: boolean = true;

// Exercício 1.4: Corrija o tipo de 'temperaturaHoje'
// Dica: Temperatura pode ter casas decimais (como 23.5°C)
let temperaturaHoje: number = 23.5;

// Exercício 1.5: Corrija o tipo de 'mensagemMotivacional'
let mensagemMotivacional: string = "Você consegue! Continue praticando.";

// Exercício 1.6: Corrija o tipo de 'tenhoExperiencia'
// Dica: Esta variável responde à pergunta "Tenho experiência?" - sim ou não
let tenhoExperiencia: boolean = false;

// ============================================================================
// SEÇÃO 2: OPERADORES E CONDICIONAIS (if/else)
// ============================================================================
// Condicionais permitem que seu programa tome decisões!
// A estrutura básica é:
//
//   if (condição) {
//     // código executado se a condição for verdadeira
//   } else {
//     // código executado se a condição for falsa
//   }
//
// Operadores de comparação úteis:
// - >= (maior ou igual)
// - <= (menor ou igual)
// - === (igual a)
// - !== (diferente de)
// - > (maior que)
// - < (menor que)
// ============================================================================

// Exercício 2.1: Complete a função isMaiorDeIdade
// A função deve retornar true se a idade for >= 18, e false caso contrário
function isMaiorDeIdade(idade: number): boolean {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

// Exercício 2.2: Complete a função verificarTemperatura
// A função deve retornar:
// - "Calor" se temperatura >= 25
// - "Agradável" se temperatura >= 15 e < 25
// - "Frio" se temperatura < 15
function verificarTemperatura(temperatura: number): string {
  if(temperatura >= 25) {
    return "Calor";
  } else if(temperatura >= 15) {
    return "Agradável";
  } else {
    return "Frio";
  }
}

// Exercício 2.3: Complete a função podeDirigir
// A função deve retornar true apenas se:
// - idade >= 18 E
// - temCarteira === true
// Dica: Use o operador && (E lógico) para combinar condições
function podeDirigir(idade: number, temCarteira: boolean): boolean {
  if (idade >= 18 && temCarteira === true) {
    return true;
  } else {
    return false;
  }
}

// Exercício 2.4: Complete a função avaliarNota
// A função deve retornar:
// - "Aprovado com distinção" se nota >= 9
// - "Aprovado" se nota >= 7 e < 9
// - "Recuperação" se nota >= 5 e < 7
// - "Reprovado" se nota < 5
function avaliarNota(nota: number): string {
  if (nota >= 9) {
    return "Aprovado com distinção";
  } else if (nota >= 7) {
    return "Aprovado";
  } else if (nota >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

// Exercício 2.5: Complete a função ehParOuImpar
// A função deve retornar "Par" se o número for par, "Ímpar" se for ímpar
// Dica: Um número é par se o resto da divisão por 2 é zero
// Para calcular o resto, use o operador % (exemplo: 10 % 2 resulta em 0)
function ehParOuImpar(numero: number): string {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
// ============================================================================
// SEÇÃO 3: ARRAYS E LOOPS (for)
// ============================================================================
// Arrays são listas de valores. Exemplo: [1, 2, 3, 4, 5]
// Loops permitem "percorrer" cada item de um array, um por vez.
//
// Estrutura básica de um loop for:
//
//   for (let i = 0; i < array.length; i++) {
//     // array[i] é o item atual
//   }
//
// Explicação:
// - let i = 0: começa na posição 0 (primeiro item)
// - i < array.length: continua enquanto i for menor que o tamanho do array
// - i++: incrementa i em 1 a cada iteração
// - array[i]: acessa o item na posição i
// ============================================================================

// Exercício 3.1: Complete a função somarArray
// A função deve somar todos os números de um array e retornar o total
function somarArray(numeros: number[]): number {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

// Exercício 3.2: Complete a função encontrarMaiorNumero
// A função deve retornar o maior número de um array
function encontrarMaiorNumero(numeros: number[]): number {
  let maior = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }
  return maior;
}

// Exercício 3.3: Complete a função contarPares
// A função deve contar quantos números pares existem no array
function contarPares(numeros: number[]): number {
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      contador++;
    }
  }
  return contador;
}

// Exercício 3.4: Complete a função encontrarMenorNumero
// A função deve retornar o menor número de um array
function encontrarMenorNumero(numeros: number[]): number {
  let menor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

// Exercício 3.5: Complete a função calcularMedia
// A função deve calcular a média dos números de um array
// Média = soma de todos os números / quantidade de números
function calcularMedia(numeros: number[]): number {
  let soma = somarArray(numeros);
  return soma / numeros.length;
}

// Exercício 3.6: Complete a função filtrarPositivos
// A função deve retornar um novo array contendo apenas os números positivos
function filtrarPositivos(numeros: number[]): number[] {
  let positivos: number[] = [];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
      positivos.push(numeros[i]);
    }
  }
  return positivos;
}

// ============================================================================
// SEÇÃO 4: INTERFACES E OBJETOS
// ============================================================================
// Interfaces são como "moldes" ou "contratos" que definem a estrutura
// de um objeto. Elas dizem quais propriedades o objeto deve ter e seus tipos.
//
// Exemplo:
//   interface Carro {
//     marca: string;
//     ano: number;
//   }
//
// Um objeto é uma coleção de propriedades:
//   const meuCarro: Carro = {
//     marca: "Toyota",
//     ano: 2020
//   };
// ============================================================================

// Exercício 4.1: Complete a interface Usuario
// Um usuário deve ter:
// - nome (string)
// - idade (number)
// - email (string)
// - ativo (boolean) - indica se o usuário está ativo no sistema
interface Usuario {
  nome: string;
  idade: number;
  email: string;
  ativo: boolean;
}

// Exercício 4.2: Crie um objeto do tipo Usuario
// Preencha com seus próprios dados ou dados fictícios
const usuario1: Usuario = {
  nome: "João Lemos",
  idade: 18,
  email: "joaoclemoss@gmail.com",
  ativo: true
};

// Exercício 4.3: Complete a interface Produto
// Um produto deve ter:
// - nome (string)
// - preco (number)
// - emEstoque (boolean)
// - categoria (string)
interface Produto {
  nome: string;
  preco: number;
  emEstoque: boolean;
  categoria: string;
}

// Exercício 4.4: Crie um objeto do tipo Produto
const produto1: Produto = {
  nome: "Notebook",
  preco: 3000,
  emEstoque: true,
  categoria: "Eletrônicos"
};

// Exercício 4.5: Complete a interface Endereco
// Um endereço deve ter:
// - rua (string)
// - numero (number)
// - cidade (string)
// - estado (string)
// - cep (string)
interface Endereco {
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
  cep: string;
}

// Exercício 4.6: Complete a interface Pessoa
// Uma pessoa deve ter:
// - nome (string)
// - idade (number)
// - endereco (Endereco) - note que usamos a interface que você criou acima!
interface Pessoa {
  nome: string;
  idade: number;
  endereco: Endereco;
}

// Exercício 4.7: Crie um objeto do tipo Pessoa com um endereço completo
const pessoa1: Pessoa = {
  nome: "Maria Silva",
  idade: 30,
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "São Paulo",
    estado: "SP",
    cep: "12345-678"
  }
};

// ============================================================================
// SEÇÃO 5: FUNÇÕES (PARÂMETROS E RETORNO)
// ============================================================================
// Funções são blocos de código reutilizáveis que podem:
// - Receber valores de entrada (parâmetros)
// - Processar esses valores
// - Retornar um resultado
//
// Exemplo:
//   function somar(a: number, b: number): number {
//     return a + b;
//   }
// ============================================================================

// Exercício 5.1: Complete a função formatarSaudacao
// A função deve retornar uma saudação personalizada
// Exemplo: se o nome for "João", retornar "Olá, João! Bem-vindo(a)!"
function formatarSaudacao(nome: string): string {
  return `Olá, ${nome}! Bem-vindo(a)!`;
}

// Exercício 5.2: Complete a função apresentarUsuario
// A função deve retornar uma string com as informações do usuário
// Exemplo: "João Silva tem 25 anos e seu email é joao@email.com"
function apresentarUsuario(usuario: Usuario): string {
  // ... complete aqui ...
  // Dica: Acesse as propriedades do objeto com usuario.nome, usuario.idade, etc.
  return `${usuario.nome} tem ${usuario.idade} anos e seu email é ${usuario.email}`;
}

// Exercício 5.3: Complete a função calcularDesconto
// A função deve calcular o preço com desconto
// Exemplo: precoOriginal = 100, percentualDesconto = 10 → retorna 90
function calcularDesconto(
  precoOriginal: number,
  percentualDesconto: number
): number {
  const desconto = precoOriginal * (percentualDesconto / 100);
  return precoOriginal - desconto;
}

// Exercício 5.4: Complete a função ehUsuarioAtivo
// A função deve retornar true se o usuário estiver ativo E for maior de idade
function ehUsuarioAtivo(usuario: Usuario): boolean {
  return usuario.ativo === true && usuario.idade >= 18;
}

// Exercício 5.5: Complete a função obterIniciais
// A função deve retornar as iniciais de um nome completo
// Exemplo: "João Silva Santos" → "JSS"
function obterIniciais(nomeCompleto: string): string {

  // ... complete aqui ...
  // Dica Avançada: Use split(" ") para separar o nome em palavras
  // Depois, pegue a primeira letra de cada palavra
   let palavras = nomeCompleto.split(" ");
   let iniciais = "";
   for (let i = 0; i < palavras.length; i++) {
     iniciais += palavras[i][0];
   }
   return iniciais.toUpperCase();
}

// Exercício 5.6: Complete a função criarUsuario
// A função deve criar e retornar um objeto Usuario com os dados fornecidos
function criarUsuario(nome: string, idade: number, email: string): Usuario {
  
  // ... complete aqui ...
  // Dica: Retorne um objeto com as propriedades preenchidas
   return {
     nome: nome,
     idade: idade,
     email: email,
     ativo: true  // por padrão, novos usuários são ativos
  };
}

// Exercício 5.7: Complete a função formatarEndereco
// A função deve retornar o endereço formatado como uma string
// Exemplo: "Rua das Flores, 123 - São Paulo/SP - CEP: 01234-567"
function formatarEndereco(endereco: Endereco): string {

  // ... complete aqui ...
  // Dica: Use template strings para concatenar as propriedades
  return `${endereco.rua}, ${endereco.numero} - ${endereco.cidade}/${endereco.estado} - CEP: ${endereco.cep}`;
}

// Exercício 5.8: Complete a função calcularIdadeEmMeses
// A função deve calcular quantos meses a pessoa tem de vida
function calcularIdadeEmMeses(idade: number): number {

  // ... complete aqui ...
  // Dica: 1 ano = 12 meses
  return idade * 12;
}

// Exercício 5.9: Complete a função aplicarDescontoEmProdutos
// A função deve retornar um novo array com os preços dos produtos após desconto
function aplicarDescontoEmProdutos(
  produtos: Produto[],
  percentualDesconto: number
): number[] {
  let novosPrecos: number[] = [];
  
  for (let i = 0; i < produtos.length; i++) {
    let desconto = produtos[i].preco * (percentualDesconto / 100);
    let precoFinal = produtos[i].preco - desconto;
    novosPrecos.push(precoFinal);
  }
  
  return novosPrecos;
}

// ============================================================================
// SEÇÃO 6: CALLBACKS (FUNÇÕES COMO PARÂMETROS)
// ============================================================================
// Callbacks são funções que você passa como PARÂMETRO para outras funções.
// Isso permite que uma função "chame de volta" (call back) outra função.
//
// Exemplo simples:
//   function executar(callback: () => void) {
//     callback(); // Executa a função que foi passada
//   }
//
//   executar(() => {
//     console.log("Olá!");
//   });
//
// Callbacks são muito usados em JavaScript/TypeScript para:
// - Processamento assíncrono
// - Manipulação de eventos
// - Transformação de dados
// ============================================================================

// Exercício 6.1: Complete a função executarParaCadaNumero
// A função deve executar o callback para cada número do array
// O callback recebe um número e não retorna nada (void)
function executarParaCadaNumero(
  numeros: number[],
  callback: (numero: number) => void
): void {

  // ... complete aqui ...
  // Dica: Use um loop for para percorrer o array
  // Para cada número, chame: callback(numeros[i])
  for (let i = 0; i < numeros.length; i++) {
    callback(numeros[i]);
  }
}

// Exercício 6.2: Complete a função dobrarNumeros
// A função deve usar um callback para transformar cada número
// O callback recebe um número e retorna um número transformado
function dobrarNumeros(numeros: number[]): number[] {

  // ... complete aqui ...
  // Dica: Crie um array vazio 'resultado'
  // Para cada número, chame o callback que dobra (numero * 2)
  // Adicione o resultado ao array
  // Ou simplesmente implemente sem callback:
   let resultado: number[] = [];
   for (let i = 0; i < numeros.length; i++) {
     resultado.push(numeros[i] * 2);
   }
   return resultado;
}

// Exercício 6.3: Complete a função filtrarComCallback
// A função deve filtrar o array usando um callback
// O callback recebe um número e retorna true/false (se deve manter ou não)
function filtrarComCallback(
  numeros: number[],
  callback: (numero: number) => boolean
): number[] {
  let resultado: number[] = [];
  
  for (let i = 0; i < numeros.length; i++) {
    if (callback(numeros[i])) {
      resultado.push(numeros[i]);
    }
  }
  
  return resultado;
}

// Exercício 6.4: Complete a função processarUsuarios
// A função deve processar cada usuário usando um callback
// O callback recebe um Usuario e não retorna nada
function processarUsuarios(
  usuarios: Usuario[],
  callback: (usuario: Usuario) => void
): void {

  // ... complete aqui ...
  // Dica: Percorra o array de usuários e execute callback(usuarios[i]) para cada um
  for (let i = 0; i < usuarios.length; i++) {
    callback(usuarios[i]);
  }
}

// Exercício 6.5: Complete a função transformarNomes
// A função deve transformar os nomes dos usuários usando um callback
// O callback recebe uma string (nome) e retorna uma string transformada
function transformarNomes(
  usuarios: Usuario[],
  callback: (nome: string) => string
): string[] {
  let resultado: string[] = [];
  
  for (let i = 0; i < usuarios.length; i++) {
    resultado.push(callback(usuarios[i].nome));
  }
  
  return resultado;
}

// Exercício 6.6: Complete a função calcularComOperacao
// A função deve calcular um resultado usando uma operação customizada (callback)
// O callback recebe dois números e retorna o resultado da operação
function calcularComOperacao(
  a: number,
  b: number,
  operacao: (x: number, y: number) => number
): number {
  return operacao(a, b);
}

  // ... complete aqui ...
  // Dica: Simplesmente retorne operacao(a, b)
  // Isso permite que quem chama a função decida a operação:
  // calcularComOperacao(5, 3, (x, y) => x + y) // soma
  // calcularComOperacao(5, 3, (x, y) => x * y) // multiplicação

// ============================================================================
// SEÇÃO 7: DESAFIOS EXTRAS (OPCIONAL)
// ============================================================================
// Se você chegou até aqui, parabéns! 🎉
// Estes exercícios são um pouco mais desafiadores, mas use tudo que aprendeu!
// ============================================================================

// Desafio 7.1: Complete a função buscarUsuarioPorEmail
// A função deve procurar um usuário em um array pelo email
// Se encontrar, retorne o usuário. Se não encontrar, retorne null.
function buscarUsuarioPorEmail(
  usuarios: Usuario[],
  email: string
): Usuario | null {
  // ... complete aqui ...
  // Dica: Use um loop for para percorrer o array de usuários
  // Para cada usuário, verifique se usuario.email === email
  // Se encontrar, retorne o usuário imediatamente
  // Se o loop terminar sem encontrar, retorne null
}

// Desafio 7.2: Complete a função contarUsuariosAtivos
// A função deve contar quantos usuários estão ativos no array
function contarUsuariosAtivos(usuarios: Usuario[]): number {
  // ... complete aqui ...
}

// Desafio 7.3: Complete a função calcularTotalEmEstoque
// A função deve somar o preço de todos os produtos que estão em estoque
function calcularTotalEmEstoque(produtos: Produto[]): number {
  // ... complete aqui ...
  // Dica: Use um loop e uma condicional
  // Apenas some o preço se produto.emEstoque === true
}

// Desafio 7.4: Complete a função criarRelatorioDeUsuarios
// A função deve retornar uma string com um resumo dos usuários
// Exemplo: "Total: 3 usuários (2 ativos, 1 inativo)"
function criarRelatorioDeUsuarios(usuarios: Usuario[]): string {
  // ... complete aqui ...
  // Dica: Conte o total, os ativos e calcule os inativos
  // Use template strings para formatar a resposta
}

// ============================================================================
// ÁREA DE TESTES
// ============================================================================
// Descomente (remova o //) as linhas abaixo para testar seus exercícios!
// Execute o arquivo com: npx ts-node exercicios.ts
// ============================================================================

console.log("\n=== TESTES - SEÇÃO 1: TIPOS PRIMITIVOS ===");
// Após corrigir os tipos, estes logs devem mostrar os valores corretos
console.log("1.1 - Meu nome:", meuNome); // esperado: "João Silva"
console.log("1.2 - Minha idade:", minhaIdade); // esperado: 25
console.log("1.3 - Estou aprendendo:", estouAprendendo); // esperado: true
console.log("1.4 - Temperatura hoje:", temperaturaHoje); // esperado: 23.5
console.log("1.5 - Mensagem:", mensagemMotivacional); // esperado: "Você consegue! Continue praticando."
console.log("1.6 - Tenho experiência:", tenhoExperiencia); // esperado: false

console.log("\n=== TESTES - SEÇÃO 2: CONDICIONAIS ===");
 console.log("2.1 - É maior de idade (18)?", isMaiorDeIdade(18)); // esperado: true
 console.log("2.1 - É maior de idade (15)?", isMaiorDeIdade(15)); // esperado: false
 console.log("2.2 - Temperatura 30°C:", verificarTemperatura(30)); // esperado: "Calor"
 console.log("2.2 - Temperatura 20°C:", verificarTemperatura(20)); // esperado: "Agradável"
 console.log("2.2 - Temperatura 10°C:", verificarTemperatura(10)); // esperado: "Frio"
 console.log("2.3 - Pode dirigir (20 anos, tem carteira)?", podeDirigir(20, true)); // esperado: true
 console.log("2.3 - Pode dirigir (20 anos, sem carteira)?", podeDirigir(20, false)); // esperado: false
 console.log("2.4 - Nota 9.5:", avaliarNota(9.5)); // esperado: "Aprovado com distinção"
 console.log("2.4 - Nota 7.5:", avaliarNota(7.5)); // esperado: "Aprovado"
 console.log("2.4 - Nota 6:", avaliarNota(6)); // esperado: "Recuperação"
 console.log("2.4 - Nota 4:", avaliarNota(4)); // esperado: "Reprovado"
 console.log("2.5 - 10 é par ou ímpar?", ehParOuImpar(10)); // esperado: "Par"
 console.log("2.5 - 7 é par ou ímpar?", ehParOuImpar(7)); // esperado: "Ímpar"

console.log("\n=== TESTES - SEÇÃO 3: ARRAYS E LOOPS ===");
 console.log("3.1 - Soma [1,2,3,4,5]:", somarArray([1, 2, 3, 4, 5])); // esperado: 15
 console.log("3.2 - Maior número [3,7,2,9,1]:", encontrarMaiorNumero([3, 7, 2, 9, 1])); // esperado: 9
 console.log("3.3 - Contar pares [1,2,3,4,5,6]:", contarPares([1, 2, 3, 4, 5, 6])); // esperado: 3
 console.log("3.4 - Menor número [3,7,2,9,1]:", encontrarMenorNumero([3, 7, 2, 9, 1])); // esperado: 1
 console.log("3.5 - Média [10,20,30]:", calcularMedia([10, 20, 30])); // esperado: 20
 console.log("3.6 - Filtrar positivos [-2,-1,0,1,2]:", filtrarPositivos([-2, -1, 0, 1, 2])); // esperado: [1, 2]

console.log("\n=== TESTES - SEÇÃO 4: INTERFACES E OBJETOS ===");
 console.log("4.2 - Usuário criado:", usuario1);
 console.log("4.4 - Produto criado:", produto1);
 console.log("4.7 - Pessoa criada:", pessoa1);

console.log("\n=== TESTES - SEÇÃO 5: FUNÇÕES ===");
 console.log("5.1 - Saudação:", formatarSaudacao("Maria")); // esperado: "Olá, Maria! Bem-vindo(a)!"
 console.log("5.2 - Apresentar usuário:", apresentarUsuario(usuario1));
 console.log("5.3 - Desconto (100, 10%):", calcularDesconto(100, 10)); // esperado: 90
 console.log("5.4 - Usuário ativo?", ehUsuarioAtivo(usuario1));
 console.log("5.5 - Iniciais de 'João Silva Santos':", obterIniciais("João Silva Santos")); // esperado: "JSS"
 const novoUsuario = criarUsuario("Pedro", 30, "pedro@email.com");
 console.log("5.6 - Novo usuário criado:", novoUsuario);
 const enderecoTeste: Endereco = { rua: "Rua A", numero: 100, cidade: "BH", estado: "MG", cep: "30000-000" };
 console.log("5.7 - Endereço formatado:", formatarEndereco(enderecoTeste));
 console.log("5.8 - 25 anos em meses:", calcularIdadeEmMeses(25)); // esperado: 300
 const produtosTeste: Produto[] = [
   { nome: "Produto A", preco: 100, emEstoque: true, categoria: "X" },
   { nome: "Produto B", preco: 200, emEstoque: true, categoria: "Y" }
 ];
 console.log("5.9 - Preços com 10% desconto:", aplicarDescontoEmProdutos(produtosTeste, 10)); // esperado: [90, 180]

console.log("\n=== TESTES - SEÇÃO 6: CALLBACKS ===");
 console.log("6.1 - Executar para cada:");
 executarParaCadaNumero([1, 2, 3], (n) => console.log(`  Número: ${n}`));

 console.log("6.2 - Dobrar números [1,2,3]:", dobrarNumeros([1, 2, 3])); // esperado: [2, 4, 6]

 console.log("6.3 - Filtrar maiores que 5:", filtrarComCallback([3, 7, 2, 9, 1], (n) => n > 5)); // esperado: [7, 9]

 console.log("6.4 - Processar usuários:");
 const usuarios6: Usuario[] = [
   { nome: "Ana", idade: 20, email: "ana@email.com", ativo: true },
   { nome: "Bruno", idade: 25, email: "bruno@email.com", ativo: false }
 ];
 processarUsuarios(usuarios6, (u) => console.log(`  ${u.nome} - ${u.email}`));

 console.log("6.5 - Nomes em maiúsculo:", transformarNomes(usuarios6, (nome) => nome.toUpperCase())); // esperado: ["ANA", "BRUNO"]

 console.log("6.6 - Calcular 10 + 5:", calcularComOperacao(10, 5, (a, b) => a + b)); // esperado: 15
 console.log("6.6 - Calcular 10 * 5:", calcularComOperacao(10, 5, (a, b) => a * b)); // esperado: 50

console.log("\n=== TESTES - SEÇÃO 7: DESAFIOS ===");
 const usuariosTeste: Usuario[] = [
   { nome: "João", idade: 25, email: "joao@email.com", ativo: true },
   { nome: "Maria", idade: 30, email: "maria@email.com", ativo: false },
   { nome: "Pedro", idade: 22, email: "pedro@email.com", ativo: true }
 ];
 console.log("7.1 - Buscar por email 'maria@email.com':", buscarUsuarioPorEmail(usuariosTeste, "maria@email.com"));
 console.log("7.2 - Usuários ativos:", contarUsuariosAtivos(usuariosTeste)); // esperado: 2
 console.log("7.3 - Total em estoque:", calcularTotalEmEstoque(produtosTeste)); // esperado: 300
 console.log("7.4 - Relatório:", criarRelatorioDeUsuarios(usuariosTeste)); // esperado: "Total: 3 usuários (2 ativos, 1 inativo)"

console.log("\n=== FIM DOS TESTES ===");
console.log(
  "Dica: Descomente os testes gradualmente conforme for completando os exercícios!"
);
console.log("Continue praticando! Você está indo muito bem! 🚀\n");
