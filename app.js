function pesquisar() {     
    // Obtém a seção HTML onde os resultados serão exibidos.
      let section = document.getElementById("resultados-pesquisa");     
    //console.log(section);
    // Loga a seção no console para fins de depuração.     
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value
    
    //se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma fruta ou verdura</p>"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada item de dados.
        
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase ()
        descrição = dado.descrição.toLowerCase ()
        tags = dado.tags.toLowerCase ()      
          // se titulo includes campoPesquisa
          if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += ` 
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank"> ${dado.titulo}</a>
                </h2>
                <p class="descrição-meta"> ${dado.descrição}</p>
                <a href= ${dado.link} target="_blank">Veja um vídeo de como fazer</a>
                </div>
    `;
          } 
        }
    
        if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
    
              
    // Atribui o HTML construído à seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
    }