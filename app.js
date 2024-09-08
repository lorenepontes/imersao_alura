/**
 * Executa a pesquisa e atualiza a seção de resultados.
 *
 * Itera sobre um array de dados e cria elementos HTML para cada resultado.
 * Adiciona os elementos HTML gerados à seção de resultados.
 */
function executarpesquisa() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if(campoPesquisa ==""){
        section.innerHTML = "<p>Nenhuma informação foi encontrada.</p>";
        section.style.color = "white";        
        return;
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let regiao = "";
    let tags = "";

    // Itera sobre cada dado no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        regiao = dado.regiao.toLowerCase();
        tags = dado.tags.toLowerCase();

      //  dado.titulo.includes(campoPesquisa);

      if (titulo.includes(campoPesquisa) || regiao.includes(campoPesquisa) || tags.includes(campoPesquisa)){


        // Cria uma string HTML para um resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta"  style="font-weight: 700">${dado.regiao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }
  
      };

      if(!resultados){
        section.innerHTML = "<p>Nenhuma informação foi encontrada.</p>";
        section.style.color = "white";        
        return;
    };

        // Atualiza o conteúdo HTML da seção com os resultados
        section.innerHTML = resultados;

}

