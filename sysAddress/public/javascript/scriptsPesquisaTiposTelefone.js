function strZeros(campoStr, quantZeros) {
  return String(campoStr).padStart(quantZeros, '0');
}

$(document).ready(function() {
  $('#modalTiposTelefone').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalTiposTelefone').on('hidden.bs.modal', function () {
    window.location.href = '/TelaInicial';
  });

  // Evitar qualquer ação ao clicar fora do modal, mantendo-o aberto
  $('#modalTiposTelefone').on('click', function (e) {
    if ($(e.target).hasClass('modal')) {
      e.preventDefault(); // Impede o fechamento do modal e mantém a página atual
    }
  });
});

function loadTableData(tiposTelefone) {
  const tableBody = document.getElementById('gridTiposTelefone');

  tiposTelefone.forEach(tipo => {
    const row                 = document.createElement('tr');
    const idCell              = document.createElement('td');
    idCell.textContent        = strZeros(tipo.ID_TIPO_TELEFONE, 3);
    idCell.id                 = 'idTipoTelefone';
    idCell.className          = 'align-middle';
    const descricaoCell       = document.createElement('td');
    descricaoCell.textContent = tipo.DESCRICAO_TIPO_TELEFONE;
    descricaoCell.className   = 'align-middle';
    const mascaraCell         = document.createElement('td');
    mascaraCell.textContent   = tipo.MASCARA_TELEFONE;
    mascaraCell.id            = 'mascaraTipoTelefone';    
    mascaraCell.className     = 'align-middle';    
    const actionsCell         = document.createElement('td');
    actionsCell.className     = 'acoes-col';
    actionsCell.innerHTML     = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(descricaoCell);
    row.appendChild(mascaraCell);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}

