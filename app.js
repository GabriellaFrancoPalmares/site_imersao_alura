// codigo da função pesquisa

function pesquisa() {

let section = document.getElementById("resultados");

let campoPesquisa = document.getElementById("campo_pesquisa").value;

let resultado = "";
let titulo = "";
let descricao = "";
let tags = "";
let campoPesquisaMinusculo = campoPesquisa.toLowerCase();

if(campoPesquisa == "" || campoPesquisaMinusculo == " "){
    section.innerHTML = "<p>Não tem nada digitado na aba de pesquisa. É preciso digitar algo para fazer a pesquisa.</p>";
    return
}

for(let dado of dados) {

    // tornar tudo minusculo

    tags = dado.tags.toLowerCase();
    titulo = dado.titulo.toLowerCase(); 
    descricao = dado.descricao.toLowerCase();

    //codigo para pesquisar

    if(titulo.includes(campoPesquisaMinusculo) || descricao.includes(campoPesquisaMinusculo) || tags.includes(campoPesquisaMinusculo)){

        resultado += `<div class="item-resultado">
                    <h2>${dado.titulo}, <a href="${dado.link}" target="_blank">Wiki</a></h2>
                <p class="descricao-meta">${dado.descricao}
                </p>
                </div>`
    
    //  Caso a pesquisa seja apenas um espaço ou não tenha resultado

    }
    if(resultado == ""){
        resultado = "<p>Não foi encontrado nenhum resultado no nosso banco de dados. Tente mudar as palavras, pode ser algo digitado errado ou podem ter muitos espaços em brancos.</p>"
    } 
}
    if(resultado != ""){
        section.innerHTML = resultado;
    }
    
    
}



