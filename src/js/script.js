// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul');


const montarListaProdutos = (listaProdutos) => {
    ul.innerHTML = '';
    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        // Adicionando o elementos para o li
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);

        // Adicionando li ao HTML
        ul.appendChild(li);
    });
}

const filtrarPorHortifruti = () => {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });
    montarListaProdutos(listaHortifruti);
    alterarPreco(listaHortifruti)
}

const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);

const filtrarTodos = () => {
    const listaTodos = produtos.filter((produto) => {
        return produto
    })
    montarListaProdutos(listaTodos)
    alterarPreco(listaTodos)
}

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
botaoMostrarTodos.addEventListener('click', filtrarTodos);

const filtrarBusca = () => {
    let campoBusca = document.querySelector('.campoBuscaPorNome').value;
    const listaBusca = produtos.filter((produto) => {
        return produto.nome.toLowerCase() === campoBusca.toLowerCase()
    })
    montarListaProdutos(listaBusca);
    alterarPreco(listaBusca);
}

const botaoBusca = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
botaoBusca.addEventListener('click', filtrarBusca);

const filtrarVermelhas = () => {
    const vermelhas = produtos.filter((produto) => {
    let frutas = produto.nome === "Morango" || produto.nome === "Maçã";
        return frutas
    })
    montarListaProdutos(vermelhas)
    alterarPreco(vermelhas)
}

const botaoVermelhas = document.querySelector('.estiloGeralBotoes--filtrarVermelhas');
botaoVermelhas.addEventListener('click', filtrarVermelhas)

const alterarPreco = (prod) => {
    let precoTotalDosProdutos = document.getElementById('precoTotal');
    let preco = prod.reduce((acc, produto) => {
        return acc + produto.preco
    },0 )
    precoTotalDosProdutos.innerText = preco
}
