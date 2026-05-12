# Vinheria Agnello - CP1 - Front-end Design e Web Development
Este projeto consiste na criação de um e-commerce de uma Vinheria on-line, visando a aplicação de aprendizado teórico na prática. E também, na implementação de um sistema básico para cadastro e análise de vinhos artesanais da Vinheria Agnello. 

# Requisitos obrigatórios para o projeto de Front-end Design:

- 5 Arquivos HTML criados (index.html, products.html, history.html, team.html e contact.html);
- index.html com navegação para as demais páginas;
- Heading tags e parágrafos aplicados;
- Lista ul/ol usada em pelo menos uma das páginas (history.html);
- Tabela HTML com conteúdo relevante (products.html);
- Formulário com input, textarea e botão (contact.html);
- Tags semânticas aplicadas corretamente;
- Meta tags (keywords, description) em cada página;
- Estilos com CSS usando classes e ids;
- Imagens em todas as páginas;
- Vídeo inserido;
- Menu de navegação funcional;
- Links internos e externos funcionando;
- Cada integrante com pelo menos 2 commits;
- Projeto publicado no GitHub Pages;

# Requisitos obrigatórios para o projeto de Web Development:

## Checkpoint 01:
- As informações devem ser solicitadas ao usuário usando prompt();
- Após o cadastro, exiba um alert() informando: "Cadastro realizado! Veja os detalhes no console.";
- Sempre que alguma informação for exibida no console, deve haver um alert() antes avisando o usuário, como por exemplo: "A seguir, veja os detalhes do vinho no console.";
- Informações obrigatórias a serem coletadas: - Nome do vinho/ Tipo (Tinto, Branco, Rosé)/ Safra (ano)/ Quantidade em estoque;
- Exiba todas as informações no console.log() de forma clara e organizada;
## Checkpoint 02 (contém o que foi implementado): 
- O sistema deve funcionar via prompt() e alert() como no CP01.
- Reaproveite a ideia de cadastro de vinhos, mas agora:
    Permita o cadastro de vários vinhos em sequência, perguntando ao final se deseja cadastrar outro.
- Crie funções reutilizáveis:
    Para validar entradas
    Para verificar se o estoque está baixo (menos de 5)
    Para classificar o vinho (jovem, amadurecido, antigo)
    Para mostrar os dados no console com aviso por alert()
- Evite repetir código: funções são obrigatórias.
- Escopo deve ser respeitado:
    Variáveis declaradas dentro das funções devem ser usadas localmente
    Ao final, exiba:
        Quantos cadastros foram feitos
        Quantos vinhos têm estoque baixo
        O vinho com a safra mais antiga (comparando manualmente dentro das iterações)


## Sobre o projeto:

### Estrutura:

```
bash
.
├── src/
│   ├── assets/
│   │   └── imgs/
│   ├── css/
│   │   ├── local/
│   │   │   ├── sections/
│   │   │   │   ├── footer.css
│   │   │   │   └── header.css
│   │   │   ├── contact.css
│   │   │   │── efeitos.css
│   │   │   ├── main.css
│   │   │   ├── products.css
│   │   │   ├── style.css
│   │   │   ├── team.css
│   │   │   └── variables.css
│   │   └── global.css
│   ├── js/
│   │   └── contact.js
│   ├── pages/
│   │   ├── contact.html
│   │   ├── history.html
│   │   ├── products.html
│   │   └── team.html
│   └── index.html
├── LICENSE
└── README.md
```

### Páginas

#### index.html (Homepage)
 Essa é a página inicial, em que estão presentes imagens e vídeos convidativos, além de informações sobre a vinheria. 

#### produtos.html (Produtos)
 Esta é apágina com os produtos (vinhos) catalogados para compras online. Possui nomes, valores, bandeiras que representam as origens dos vinhos.

#### hamonizacao.html (Hamonizações)
página voltada a tentar reproduzir a experiência de compra na loja física, em que os clientes recebem orientações sobre as melhores combinações de vinhos para determinados pratos e ocasiões (harmonizações). 

#### sobre-nos.html (Sobre Nós)
Apresenta os donos da Vinheria e um pouco sobre sua história.

#### contato.html (Contato)
página dedicada a um formulário para o cliente informar os dados e ser, posteriormente, contatado pela vinheria.

#### Efeitos Visuais
Nesta seção, detalhamos as implementações de CSS avançado aplicadas para melhorar a experiência do usuário e a estética do projeto Vinheria Agnello.

### 1. Pseudo-classes
Utilizadas para criar interatividade baseada no estado dos elementos:
* **`:hover`**: Aplicado em links de menu, botões de formulário e cards de produtos para fornecer feedback visual imediato com mudanças de cor e transições.
* **`:focus`**: Implementado nos campos de formulário (`input` e `textarea`) para destacar o campo ativo com a cor dourada `#C9A96E`.
* **`:checked`**: Personaliza a cor dos botões de rádio para manter a identidade visual da marca.
* **`:user-invalid`**: Utilizado para validação em tempo real, destacando erros de preenchimento em vermelho.
* **`:nth-child(even)`**: Aplicado na página "Sobre Nós" para diferenciar parágrafos pares e melhorar a leitura do texto.

### 2. Pseudo-elementos
Utilizados para adicionar refinamentos visuais sem poluir o HTML:
* **`::before`**: Aplicado ao `body` para criar uma camada de fundo semitransparente que melhora o contraste.
* **`::after`**: Utilizado em títulos `h2` para gerar uma linha decorativa abaixo do texto.
* **`::selection`**: Customiza a cor de destaque quando o usuário seleciona um texto no site.
* **`::first-letter`**: Implementado com a fonte clássica *Pinyon Script* para criar uma capitular elegante no início de parágrafos.
* **`::placeholder`**: Personaliza a cor do texto de exemplo quando os campos de entrada estão inválidos.

### 3. Animações e Transformações
Criação de movimento e dinamismo através de `@keyframes` e propriedades de transformação:
* **`@keyframes subirConteudo`**: Animação de *fade-in* e deslocamento vertical que faz o conteúdo surgir suavemente ao carregar a página.
* **`@keyframes carrossel-animado`**: Gerencia o movimento automático das imagens no banner principal.
* **`@keyframes pulsoVinho`**: Aplicado aos links do rodapé, criando um efeito de brilho pulsante sutil.
* **`transform: scale()`**: Utilizado em imagens e blocos de conteúdo para criar um efeito de zoom suave ao passar o mouse.
* **`transform: rotate()`**: Aplicado em botões e imagens para criar leves inclinações interativas.
* **`transition`**: Todas as mudanças de estado possuem transições suaves entre 0.2s e 0.5s para evitar saltos bruscos de estilo.

### Como Testar o Sistema de Vinhos:

1. Ao abrir o site, o sistema solicitará seu nome para o cadastro inicial.
2. Siga as instruções dos alertas na tela.
3. Quando solicitado o tipo de vinho, tente digitar de formas diferentes (ex: "TINTO" ou "rosé").
4. *Importante:* Clique com o botão direito > Inspecionar > Console,  para visualizar a tabela detalhada de marcas e safras que o sistema gera automaticamente.

## Integrantes do projeto:
- Laura de Siqueira Silva: [Git Hub](https://github.com/LauradSiqueira)
- Giovanna Nunes Leme: [Git Hub](https://github.com/GiovannaNLeme)
- Flavia Camerim de Sousa: [Git Hub](https://github.com/flacamerim)

## Link do site
Veja o projeto funcionando aqui: [[link](https://lgf-corporation.github.io/vinheria-agnello-checkpoint02/index.html)]
