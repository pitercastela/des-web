const container = document.getElementById("container");

let conteudo = "";

const montacard = (atleta) =>`
<div>
<h1>${atleta.nome}</h1>
<img src='${atleta.imagem}'>
<p>${atleta.detalhes}</p>
</div>
`;

dados.forEach(
    (ele) => conteudo += montacard(ele)
)
container.innerHTML = conteudo;
   

