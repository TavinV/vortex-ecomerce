var endereco_dados = `https://raw.githubusercontent.com/TavinV/vortex-produtos/refs/heads/main/produtos.json`

// Testando os dados da API

function criarElementoHtml(html){
    const template = document.createElement("template")
    template.innerHTML = html.trim()
    
   return template.content.firstElementChild
}   

function carregar_produto_por_JSON(produto){
    return criarElementoHtml(`
       <a target="_blank" href="${produto.link_produto}" class="produto">
          <div class="img-container">
            <img class="${produto.img_class}"  src="${produto.imagem}"></img>
            </div>
            <span class="informacoes-produto">
            <h2>${produto.nome}</h2>
            </span>
            
            <p class="valor">  R$ ${produto.valor}</p>
            ${produto["frete-gratis"] ? ` 
              <div class="propriedade">
                Frete grátis
                <i class="bx bx-package"></i>
            </div>` : `
            <div class="propriedade">
              Envio para todo o país
              <i class='bx bxs-plane-alt'></i>
            </div>`} 
            
            <div class="propriedade">
              ${produto["cores-disponiveis"]} Cores disponíveis
              <i class="bx bxs-adjust-alt"></i>
            </div>
            <button>Comprar Agora</button>
            </a>
            `)
          }
          
          
          fetch(endereco_dados).then(resposta => resposta.json()).then(dados =>{
            console.log(dados)
            // Carregando as informações e adicionando à aba de produtos
            
            total_produtos = 0
    dados.forEach(produto => {
        total_produtos++
        document.getElementById("produtos").append(carregar_produto_por_JSON(produto))
    });
    document.getElementById("produtos_encontrados").innerHTML = total_produtos + " Produtos encontrados."
})
