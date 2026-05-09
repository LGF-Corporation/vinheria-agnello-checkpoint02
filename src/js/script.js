// Temos que usar essas tags aqui:
// prompt();
// alert();
// console.log();
// Mensagem inicial: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var nome = prompt("Bem-vindo(a) de volta. Por favor insira o seu nome: ");    //alterado


// Mensagem de cadastro realizado >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

alert("Olá, " + nome + "! Cadastro realizado com sucesso! Veja os detalhes no Console.");  //mantido

// Lógica para Cadastro ods vinhos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function solicitaVinho() {
    let tipoVinho = prompt('Qual tipo de vinho você deseja cadastrar? (Tinto, Branco ou Rosé)')
    let safraVinho = prompt('Qual a safra do vinho?')
    let qtdEstoque = prompt('Qual a quantidade em estoque?')

    console.log('Tipo de vinho: ' + tipoVinho);
    console.log('Safra do vinho: ' + safraVinho);
    console.log('Quantidade em estoque: ' + qtdEstoque);
    console.log('--------------------------------');
}


solicitaVinho();
var cadastrarOutro = prompt('Deseja cadastrar outro vinho? \n 1 - Sim \n 2 - Não)');

while (cadastrarOutro == '1') {
    solicitaVinho();
    cadastrarOutro = prompt('Deseja cadastrar outro vinho? \n 1 - Sim \n 2 - Não)');
}




// Lógica de busca interativa >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// var tipo = prompt("Dentre as opções de vinhos: Tinto, Branco ou Rosé, qual é o tipo de vinho que você está procurando?")
//            .toLowerCase()                       
//            .normalize("NFD")                    
//            .replace(/[\u0300-\u036f]/g, "");    

// if (tipo === "tinto") {
//     alert("Há " + totalTinto + " unidades deste tipo de vinho. Veja os detalhes no Console!");
    
//     console.clear(); 
//     console.log("--- RELATÓRIO DETALHADO: VINHOS TINTOS ---");
//     console.log("Total Geral: " + totalTinto);
//     console.log("------------------------------------------");
//     console.log("ESTOQUE POR SAFRA:");
//     console.log("Safra 2025: " + totTintSaf2025);
//     console.log("Safra 2024: " + totTintSaf2024);
//     console.log("Safra 2023: " + totTintSaf2023);
//     console.log("------------------------------------------");
//     console.log("DETALHES POR MARCA:");
    
//     console.log("Casillero del Diablo - Safra 2024: " + casiDD2024);
//     console.log("Casillero del Diablo - Safra 2023: " + casiDD2023);
    
//     console.log("Pauliteiros - Safra 2025: " + paulit2025);
//     console.log("Pauliteiros - Safra 2024: " + paulit2024);
//     console.log("Pauliteiros - Safra 2023: " + paulit2023);
    
//     console.log("Casal Garcia - Safra 2023: " + casalG2023);
    
//     console.log("Garibaldi - Safra 2025: " + gariB2025);
//     console.log("Garibaldi - Safra 2024: " + gariB2024);
//     console.log("Garibaldi - Safra 2023: " + gariB2023);
// }


// else if (tipo === "branco") {
//     alert("Há " + totalBranco + " unidades deste tipo de vinho. Veja os detalhes no Console!");
    
//     console.clear();
//     console.log("--- RELATÓRIO DETALHADO: VINHOS BRANCOS ---");
//     console.log("Total Geral: " + totalBranco);
//     console.log("-------------------------------------------");
//     console.log("ESTOQUE POR SAFRA:");
//     console.log("Safra 2025: " + totBranSaf2025);
//     console.log("Safra 2024: " + totBranSaf2024);
//     console.log("-------------------------------------------");
//     console.log("DETALHES POR MARCA:");
//     console.log("Casillero del Diablo - Safra 2025: " + casiDDBran2025);
//     console.log("Casillero del Diablo - Safra 2024: " + casiDDBran2024);
//     console.log("Casal Garcia - Safra 2025: " + casalGBran2025);
//     console.log("Casal Garcia - Safra 2024: " + casalGBran2024);
// } 

// else if (tipo === "rose") {
//     alert("Há " + totalRose + " unidades deste tipo de vinho. Veja os detalhes no Console!");
    
//     console.clear();
//     console.log("--- RELATÓRIO DETALHADO: VINHOS ROSÉS ---");
//     console.log("Total Geral: " + totalRose);
//     console.log("------------------------------------------");
//     console.log("ESTOQUE POR SAFRA:");
//     console.log("Safra 2025: " + totRoseSaf2025);
//     console.log("Safra 2024: " + totRoseSaf2024);
//     console.log("Safra 2023: " + totRoseSaf2023);
//     console.log("------------------------------------------");
//     console.log("DETALHES POR MARCA:");
//     console.log("Casillero del Diablo - Safra 2025: " + casiDDRose2025);
//     console.log("Casillero del Diablo - Safra 2024: " + casiDDRose2024);
//     console.log("Casillero del Diablo - Safra 2023: " + casiDDRose2023);
//     console.log("Casal Garcia - Safra 2025: " + casalGRose2025);
//     console.log("Casal Garcia - Safra 2024: " + casalGRose2024);
//     console.log("Casal Garcia - Safra 2023: " + casalGRose2023);
// } 

// else {
//     alert("Tipo de vinho não encontrado. Tente Tinto, Branco ou Rosé.");
// }
