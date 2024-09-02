$(document).ready(function() {
  $('#modalLoteamentos').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalLoteamentos').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function carregaGridLoteamentos(loteamentos) {
  const gridLoteamentos = document.getElementById('gridLoteamentos');

  loteamentos.forEach(loteamento => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(loteamento.ID_LOTEAMENTO, 3);
    idCell.id          = 'idLoteamento';
    idCell.className   = 'align-middle';

    const nomeLoteamentoCell       = document.createElement('td');
    nomeLoteamentoCell.textContent = loteamento.NOME_LOTEAMENTO;
    nomeLoteamentoCell.className   = 'align-middle';

    const bairroCell       = document.createElement('td');
    bairroCell.textContent = loteamento.NOME_BAIRRO;
    bairroCell.className   = 'align-middle';

    const loteamentoInativo       = document.createElement('td');
    loteamentoInativo.textContent = loteamento.INATIVO ? 'NÃO' : 'SIM';
    loteamentoInativo.id          = 'loteamentoInativo';    
    loteamentoInativo.className   = 'align-middle';
    
    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(nomeLoteamentoCell);
    row.appendChild(bairroCell);
    row.appendChild(loteamentoInativo);
    row.appendChild(actionsCell);

    gridLoteamentos.appendChild(row);
  });
}
