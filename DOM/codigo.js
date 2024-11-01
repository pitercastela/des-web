const container = document.getElementById("container");

let conteudo = "";

const montacard = (atleta) =>`
<h1>${atleta.nome}</h1>
<img src='${atleta.imagem}'>
<p>${atleta.detalhes}<p>

`;

dados.forEach(
    (ele) => conteudo += montacard(ele)
)
container.innerHTML = conteudo;
   

