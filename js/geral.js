let botaoAdd = document.querySelector('#adicionar-desenvolvedor')
botaoAdd.addEventListener('click', function (evento) {

    evento.preventDefault()

    let form = document.querySelector('#tarefa-adiciona')

    let desenvolvedor = getValueForm(form)

    addDesenvolvedor(desenvolvedor)

     

})




//-------------------------Montar um bagulho---------------------------


function addDesenvolvedor(desenvolvedor) {
    let desenvolvedorTr = montarTr(desenvolvedor)
    let tabela = document.querySelector('#tabelaLucas')

    tabela.appendChild(desenvolvedorTr)
}

//----------------------Montar uma linha da tabela------------------------


function montarTr(desenvolvedor) {
    let desenvolvedorTr = document.createElement('tr')
    desenvolvedorTr.classList.add('desenvolvedor')

    
    desenvolvedorTr.appendChild(montarTd(desenvolvedor.tarefa, 'info-tarefa'))
    desenvolvedorTr.appendChild(montarTd(desenvolvedor.desenvresp, 'info-responsavel'))
    desenvolvedorTr.appendChild(montarTd(desenvolvedor.datainicio, 'info-datainicio'))
    desenvolvedorTr.appendChild(montarTd(desenvolvedor.conclusao, 'info-conclusao'))
    desenvolvedorTr.appendChild(montarTd(desenvolvedor.status, 'info-status'))
    

    return desenvolvedorTr
}

//----------------------Montar uma celula da linha------------------------


function montarTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}

//----------------------Receber valores para tabela------------------------


function getValueForm(form) {
    let desenvolvedor = {
        tarefa: form.tarefa.value,
        desenvresp: form.desenvresp.value,
        datainicio: form.datainicio.value,
        conclusao: form.conclusao.value, 
        status: form.status.value, 
    }
    return desenvolvedor
}



