const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   
{
    enunciado: "Você está pensando em comprar um carro esportivo e está avaliando as opções disponíveis no mercado. Qual característica você considera mais importante?",
    alternativas: [
        {
            texto: "Desempenho e aceleração.",
            afirmacao: "Prioriza a experiência de condução e a potência do motor para obter a melhor performance possível."
        },
        {
            texto: "Design e estilo.",
            afirmacao: "Valoriza o visual do carro e a forma como ele se destaca na estrada."
        }
    ]
},
{
    enunciado: "Após escolher o carro esportivo ideal, você está participando de uma reunião de entusiastas de carros. Qual é o seu principal ponto de discussão sobre o carro?",
    alternativas: [
        {
            texto: "As tecnologias e inovações presentes no modelo.",
            afirmacao: "Foca em como o carro utiliza a tecnologia para melhorar a performance e a segurança."
        },
        {
            texto: "A tradição e o legado da marca.",
            afirmacao: "Destaca a história e o prestígio da marca que fabrica o carro, celebrando suas conquistas no automobilismo."
        }
    ]
},
{
    enunciado: "Durante um evento de carros esportivos, você é convidado a apresentar seu carro em uma competição de design. Como você aborda a apresentação?",
    alternativas: [
        {
            texto: "Foca em destacar as personalizações exclusivas e detalhes inovadores.",
            afirmacao: "Mostra o quanto o design do carro é único e adaptado às suas preferências pessoais."
        },
        {
            texto: "Destaca as especificações técnicas e a engenharia por trás do design.",
            afirmacao: "Enfatiza a performance e a construção técnica que fazem do carro uma máquina de alta performance."
        }
    ]
},
{
    enunciado: "Após um passeio com seu carro esportivo, você decide fazer algumas modificações. O que você faz?",
    alternativas: [
        {
            texto: "Instala novos componentes de performance para melhorar a aceleração.",
            afirmacao: "Busca aumentar a potência do carro para uma experiência de condução mais emocionante."
        },
        {
            texto: "Adiciona acessórios estéticos para melhorar o visual.",
            afirmacao: "Foca em personalizar o visual do carro para que ele se destaque ainda mais na estrada."
        }
    ]
},
{
    enunciado: "Você participa de uma corrida de carros esportivos e percebe que alguns competidores utilizam técnicas avançadas de condução. Como você reage?",
    alternativas: [
        {
            texto: "Estuda e adota essas técnicas para melhorar seu desempenho.",
            afirmacao: "Compromete-se a aprender e aplicar novas técnicas para se tornar um melhor piloto."
        },
        {
            texto: "Prefere manter sua própria abordagem e estilo de condução.",
            afirmacao: "Confia em seu próprio estilo e preferências, acreditando que sua abordagem pessoal é a melhor."
        }
    ]
}
```
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
