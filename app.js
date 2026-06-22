function adicionarValor(){
    let nome = document.getElementById("nome").value;
    let valorEmprestimo = document.getElementById("valor").value;
    let dataEmprestimo = document.getElementById("data").value;
    let descricaoEmprestimo = document.getElementById("descricao").value;

    const tabela = document.getElementById("tabelaEmprestimos");
    
    tabela.innerHTML += `

            <td>${nome}</td>
            <td>${valorEmprestimo}</td>
            <td>${dataEmprestimo}</td>
            <td>${descricaoEmprestimo}</td>
            <td><button onclick="marcarPagamento()">✅</button></td>
        
    `
    document.getElementById("nome").value = "";

    document.getElementById("valor").value = "";

    document.getElementById("data").value = "";

    document.getElementById("descricao").value = "";

}

function marcarPagamento(){
    document.getElementById("tabelaEmprestimos").innerHTML = "";

}


