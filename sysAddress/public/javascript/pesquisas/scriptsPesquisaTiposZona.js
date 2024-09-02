$(document).ready(function() {
  $('#modalTiposZona').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalTiposZona').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function carregaGridTiposZona(tiposZona) {
  const gridTiposZona = document.getElementById('gridTiposZona');

  tiposZona.forEach(tipoZona => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(quadra.ID_TIPO_ZONA, 3);
    idCell.id          = 'idTipoZona';
    idCell.className   = 'align-middle';

    const descTipoZonaCell       = document.createElement('td');
    descTipoZonaCell.textContent = quadra.DESCRICAO_TIPO_ZONA;
    descTipoZonaCell.className   = 'align-middle';

    const tipoZonaInativa       = document.createElement('td');
    tipoZonaInativa.textContent = quadra.INATIVA ? 'NÃO' : 'SIM';
    tipoZonaInativa.id          = 'tipoZonaInativa';
    tipoZonaInativa.className   = 'align-middle';
    
    const actionsCell         = document.createElement('td');
    actionsCell.className     = 'acoes-col';
    actionsCell.innerHTML     = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(descTipoZonaCell);
    row.appendChild(tipoZonaInativaInativa);
    row.appendChild(actionsCell);

    gridTiposZona.appendChild(row);
  });
}
