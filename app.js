function adicionarValor(){
    let nome = document.getElementById("nome").value;
    let valorEmprestimo = document.getElementById("valor").value;
    let dataEmprestimo = document.getElementById("data").value;
    let descricaoEmprestimo = document.getElementById("descricao").value;

    // VALIDANDO CAMPOS
    if(nome === "" || valorEmprestimo === "" || dataEmprestimo === ""){
        alert("Preencha ao menos os campos 'Nome', 'Valor' e 'Data'!");
        return;
    }

    const tabela = document.getElementById("tabelaEmprestimos");
    
    tabela.innerHTML += `
            <tr>
            <td>${nome}</td>
            <td>${valorEmprestimo}</td>
            <td>${dataEmprestimo}</td>
            <td>${descricaoEmprestimo}</td>
            <td><button onclick="marcarPagamento(this)">✅</button></td>
            </tr>
        
    `
    document.getElementById("nome").value = "";

    document.getElementById("valor").value = "";

    document.getElementById("data").value = "";

    document.getElementById("descricao").value = "";


    let totalPendente = document.getElementById("total");

    totalPendente.innerHTML = (Number(totalPendente.innerHTML) || 0) + Number(valorEmprestimo);
}

function marcarPagamento(botao){

    let confirmacaoPagamento = window.confirm("Deseja CONFIRMAR o pagamento?");

    if(confirmacaoPagamento == true){
    let linha = botao.parentElement.parentElement;

    // USANDO CELLS PARA PEGAR VALOR DO INDICE 1
    let valor = Number(linha.cells[1].innerHTML);

    linha.remove();

     let totalPendente = document.getElementById("total");

    totalPendente.innerHTML = Number(totalPendente.innerHTML) - valor;
    } else{
        return;
    };

}


