$(document).ready(function() {
  $('#modalEstadosCivis').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalEstadosCivis').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function loadTableData(estadosCivis) {
  const tableBody = document.getElementById('tableEstadosCivis');

  estadosCivis.forEach(tipo => {
    const row                 = document.createElement('tr');
    const idCell              = document.createElement('td');
    idCell.textContent        = strZeros(tipo.ID_ESTADO_CIVIL, 3);
    idCell.id                 = 'idEstadoCivil';
    idCell.className          = 'align-middle';
    const descricaoCell       = document.createElement('td');
    descricaoCell.textContent = tipo.DESCRICAO_ESTADO_CIVIL;
    descricaoCell.className   = 'align-middle';
    const actionsCell         = document.createElement('td');
    actionsCell.className     = 'acoes-col';
    actionsCell.innerHTML     = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(descricaoCell);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}
