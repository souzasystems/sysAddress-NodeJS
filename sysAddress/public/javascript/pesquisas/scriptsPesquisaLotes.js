$(document).ready(function() {
  $('#modalLotes').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalLotes').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function carregaGridLotes(lotes) {
  const gridLotes = document.getElementById('gridLotes');

  lotes.forEach(lote => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(lote.ID_LOTE, 3);
    idCell.id          = 'idLote';
    idCell.className   = 'align-middle';

    const nomeLoteCell       = document.createElement('td');
    nomeLoteCell.textContent = lote.NOME_LOTE;
    nomeLoteCell.className   = 'align-middle';

    const loteamentoCell       = document.createElement('td');
    loteamentoCell.textContent = lote.NOME_LOTEAMENTO;
    loteamentoCell.className   = 'align-middle';

    const loteInativo       = document.createElement('td');
    loteInativo.textContent = lote.INATIVO ? 'NÃO' : 'SIM';
    loteInativo.id          = 'loteInativo';    
    loteInativo.className   = 'align-middle';
    
    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(nomeLoteCell);
    row.appendChild(loteamentoCell);
    row.appendChild(loteInativo);
    row.appendChild(actionsCell);

    gridLotes.appendChild(row);
  });
}
