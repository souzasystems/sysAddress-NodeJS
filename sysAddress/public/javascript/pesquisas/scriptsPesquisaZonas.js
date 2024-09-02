$(document).ready(function() {
  $('#modalZonas').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalZonas').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function carregaGridZonas(zonas) {
  const gridZonas = document.getElementById('gridZonas');

  zonas.forEach(zona => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(zona.ID_ZONA, 3);
    idCell.id          = 'idZona';
    idCell.className   = 'align-middle';

    const descZonaCell       = document.createElement('td');
    descZonaCell.textContent = zona.DESCRICAO_ZONA;
    descZonaCell.className   = 'align-middle';

    const zonaInativa       = document.createElement('td');
    zonaInativa.textContent = zona.INATIVA ? 'NÃO' : 'SIM';
    zonaInativa.id          = 'zonaInativa';
    zonaInativa.className   = 'align-middle';
    
    const actionsCell         = document.createElement('td');
    actionsCell.className     = 'acoes-col';
    actionsCell.innerHTML     = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(descZonaCell);
    row.appendChild(zonaInativa);
    row.appendChild(actionsCell);

    gridZonas.appendChild(row);
  });
}
