
// Variaveis de Controle: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

let totalCadastros = 0; 
let totalEstoqueBaixo = 0; 
let safraMaisAntiga = 9999; // logica: iniciar com um valor alto para que a primeira safra digitada vire a referencia
let nomeVinhoMaisAntigo = "";

// Mensagem inicial: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.onload = function() {
    
    // Agora sim, começamos os prompts
    let nome = prompt("Bem-vindo(a) de volta. Por favor insira o seu nome: ");    
    while (nome === "" || nome === null || /[0-9]/.test(nome)) {
        nome = prompt("Nome inválido! Por favor, use apenas letras:");
    }

// Mensagem de cadastro realizado >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

alert("Olá, " + nome + "! Cadastro realizado com sucesso! Veja os detalhes no Console.");  

// Lógica para Cadastro dos vinhos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function solicitaVinho() {
    let tipoVinho = prompt('Qual tipo de vinho você deseja cadastrar? (Tinto, Branco ou Rosé)');
    let validaTipo = (tipoVinho || "").toLowerCase().trim();

    while (validaTipo !== "tinto" && validaTipo !== "branco" && validaTipo !== "rosé" && validaTipo !== "rose") {
        tipoVinho = prompt("OPÇÃO INVÁLIDA!\nDigite apenas: Tinto, Branco ou Rosé");
        validaTipo = (tipoVinho || "").toLowerCase().trim();
    }

    let safraInput = prompt('Qual a safra do vinho?');
    while (safraInput === "" || safraInput === null || isNaN(safraInput) || parseInt(safraInput) > 2026) {
        safraInput = prompt("Safra inválida! Digite apenas números até 2026:");
    }
    let safraVinho = parseInt(safraInput);

    let qtdInput = prompt('Qual a quantidade em estoque?');
    while (qtdInput === "" || qtdInput === null || isNaN(qtdInput)) {
        qtdInput = prompt("Quantidade inválida! Digite apenas números:");
    }
    let qtdEstoque = parseInt(qtdInput); // Criamos a variável numérica aqui

    totalCadastros++; 

    let resultadoStatus = statusEstoque(qtdEstoque); 

    // Comparando a safra mais antiga
    if (safraVinho < safraMaisAntiga) {
        safraMaisAntiga = safraVinho;
        nomeVinhoMaisAntigo = tipoVinho;
    }

    mostraDados(tipoVinho, safraVinho, qtdEstoque, classifVinho(safraVinho), resultadoStatus); 
}    //  função de mostrar os dados no console e alert 
solicitaVinho();                //    Aqui é pra chamar a função criada para solicitar os dados do adm
let cadastrarOutro = prompt('Deseja cadastrar outro vinho? \n 1 - Sim \n 2 - Não'); 

while (cadastrarOutro == '1') {             //  Aqui é pra permitir que o usuário decida cadastrar mais vinhos ou não 
    solicitaVinho();
    cadastrarOutro = prompt('Deseja cadastrar outro vinho? \n 1 - Sim \n 2 - Não');
}
alert(
    "--- RELATÓRIO FINAL DA VINHERIA ---\n" +
    "Total de cadastros realizados: " + totalCadastros + "\n" +
    "Vinhos com estoque baixo: " + totalEstoqueBaixo + "\n" +
    "Vinho mais antigo: " + nomeVinhoMaisAntigo + " (" + (safraMaisAntiga === 9999 ? "N/A" : safraMaisAntiga) + ")"
);

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
function statusEstoque(qtdEstoque) {
    let qtd = parseInt(qtdEstoque); 

   
    if (qtd <= 5) {
        totalEstoqueBaixo++; 
        return "Estoque Baixo!!";
    } else if (qtd <= 20) {
        return "Estoque Normal";
    } else {
        return "Estoque Alto";
    }
}

// Criando função para mostrar dados no console por alert 
 

function mostraDados(tipoVinho, safraVinho, qtdEstoque, classificacao, resultadoStatus) {
    console.log('------Cadastros------')
    console.log('Tipo de vinho: ' + tipoVinho);
    console.log('Safra do vinho: ' + safraVinho);
    console.log('Quantidade em estoque: ' + qtdEstoque + ' - ' + resultadoStatus);
    console.log('Classificação: ' + classificacao);
    console.log('--------------------------------');

    alert(
        'Tipo de vinho: ' + tipoVinho + '\n' +
        'Safra do vinho: ' + safraVinho + '\n' +
        'Quantidade em estoque: ' + qtdEstoque + ' (' + resultadoStatus + ')\n' + 
        'Classificação: ' + classificacao
    );
} }
