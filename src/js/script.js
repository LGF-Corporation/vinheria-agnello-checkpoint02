// // Galera: [ Requisitos do Sistema ] ===============================================================================================
// O sistema deve funcionar via prompt() e alert() como no CP01.   [OK] < --- Verifiquem se concordam com a forma que eu fiz -- Gi 
// Reaproveite a ideia de cadastro de vinhos, mas agora:
// Permita o cadastro de vários vinhos em sequência, perguntando ao final se deseja cadastrar outro.       [OK] < --- Verifiquem se concordam com a forma que eu fiz -- Gi 
// Crie funções reutilizáveis: <-----------------------------------------------------
// Para validar entradas                                      [A FAZER]
// Para verificar se o estoque está baixo (menos de 5)        [A FAZER]
// Para classificar o vinho (jovem, amadurecido, antigo)      [OK]     < --- Verifiquem se concordam com a forma que eu fiz -- Gi 
// Para mostrar os dados no console com aviso por alert()     [OK]     < --- Verifiquem se concordam com a forma que eu fiz -- Gi 
// Evite repetir código: funções são obrigatórias. 
// Escopo deve ser respeitado: 
// Variáveis declaradas dentro das funções devem ser usadas localmente
// Ao final, exiba: <-----------------------------------------------------
// Quantos cadastros foram feitos                            [A FAZER]
// Quantos vinhos têm estoque baixo                          [A FAZER]                     
// O vinho com a safra mais antiga (comparando manualmente dentro das iterações)   [A FAZER]
// ⚠️ Não é permitido usar arrays nem objetos!
// Todas as informações devem ser armazenadas e manipuladas por variáveis únicas (ex: nome1, nome2, quant1, etc.)


// Mensagem inicial: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let nome = prompt("Bem-vindo(a) de volta. Por favor insira o seu nome: ");    


// Mensagem de cadastro realizado >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

alert("Olá, " + nome + "! Cadastro realizado com sucesso! Veja os detalhes no Console.");  

// Lógica para Cadastro dos vinhos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function solicitaVinho() {            //   Criando uma função para usarmos depois 
    let tipoVinho = prompt('Qual tipo de vinho você deseja cadastrar? (Tinto, Branco ou Rosé)')
    let safraVinho = parseInt(prompt('Qual a safra do vinho?'))
    let qtdEstoque = prompt('Qual a quantidade em estoque?')

    mostraDados(tipoVinho, safraVinho, qtdEstoque, classifVinho(safraVinho));     //  função de mostrar os dados no console e alert 

}

solicitaVinho();                //    Aqui é pra chamar a função criada para solicitar os dados ao administrador
let cadastrarOutro = prompt('Deseja cadastrar outro vinho? \n 1 - Sim \n 2 - Não'); 

while (cadastrarOutro == '1') {             //  Aqui é pra permitir que o usuário decida cadastrar mais vinhos ou não 
    solicitaVinho();
    cadastrarOutro = prompt('Deseja cadastrar outro vinho? \n 1 - Sim \n 2 - Não');
}

// Classificação do vinho (jovem, amadurecido e antigo) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function classifVinho(safraVinho) {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    let subit = anoAtual - safraVinho;     //  subtração do ano atual pela safra do vinho para determinar a idade do vinho 

    // Dados fictícios, já que não sabemos a classificação real de idades, supus que poderiam ser esses valores -----------------------
    if (subit <= 5) {              // Explicação: Se for menor ou igual a 5 classificaremos como jovem
        return "Jovem";
    } else if (subit >= 6 && subit <= 12) {       // Explic: se for entre 6 e 12 classificaremos como amadurecido
        return "Amadurecido";
    } else {
        return "Antigo";           // Explic: se for diferente dos casos anteriores, classificaremos como antigo
    }
}

// Criando função para mostrar dados no console por alert 

function mostraDados(tipoVinho, safraVinho, qtdEstoque, classificacao) {
    console.log('Tipo de vinho: ' + tipoVinho);
    console.log('Safra do vinho: ' + safraVinho);
    console.log('Quantidade em estoque: ' + qtdEstoque);
    console.log('Classificação: ' + classificacao);
    console.log('--------------------------------');

    alert(
        'Tipo de vinho: ' + tipoVinho + '\n' +
        'Safra do vinho: ' + safraVinho + '\n' +
        'Quantidade em estoque: ' + qtdEstoque + '\n' +
        'Classificação: ' + classificacao
    )
} 

