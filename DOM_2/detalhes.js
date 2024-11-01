const params = new URLSearchParams(window.location.search)
const id = params.get("id")

console.log(params.get("id"))

const pega_json = async (caminho) => {

    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;

}

const montapagina = (dados) => {
    const body = document.body;
    body.innerHTML = "";

    const nome = document.createElement('h1')
    nome.innerHTML = dados.nome
    body.appendChild(nome)
    const imagem = document.createElement('img')
    imagem.src = dados.imagem
    body.appendChild(imagem)
    const descri = document.createElement("p");
    descri.innerHTML = dados.detalhes
    body.appendChild(descri);
    const posi = document.createElement("p");
    posi.innerHTML = dados.posicao
    body.appendChild(posi);

}



pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then( (r) => montapagina(r))