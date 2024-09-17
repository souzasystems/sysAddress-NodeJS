$(document).ready(function() {
  $('#modalTiposEndereco').modal('show'); //Esse código é em jQuery

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalTiposEndereco').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function carregaGridTiposEndereco(tiposEndereco) {
  const gridTiposEndereco = document.getElementById('gridTiposEndereco');

  tiposEndereco.forEach(tipo => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(tipo.ID_TIPO_ENDERECO, 3);
    idCell.id          = 'idTipoEndereco';
    idCell.className   = 'align-middle';
    
    const descricaoCell       = document.createElement('td');
    descricaoCell.textContent = tipo.DESCRICAO_TIPO_ENDERECO;
    descricaoCell.className   = 'align-middle';
    
    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(descricaoCell);
    row.appendChild(actionsCell);

    gridTiposEndereco.appendChild(row);
  });
}
