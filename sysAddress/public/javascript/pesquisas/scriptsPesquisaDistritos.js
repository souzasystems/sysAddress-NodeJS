$(document).ready(function() {
  $('#modalDistritos').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalDistritos').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function carregaGridDistritos(distrios) {
  const gridDistritos = document.getElementById('gridCondominios');

  distritos.forEach(distrito => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(distrito.ID_DISTRITO, 3);
    idCell.id          = 'idDistrito';
    idCell.className   = 'align-middle';

    const nomeDistritoCell       = document.createElement('td');
    nomeDistritoCell.textContent = distrito.NOME_DISTRITO;
    nomeDistritoCell.className   = 'align-middle';

    const cidadeCell       = document.createElement('td');
    cidadeCell.textContent = cidade.NOME_CIDADE;
    cidadeCell.className   = 'align-middle';

    const cidadeInativo       = document.createElement('td');
    cidadeInativo.textContent = cidade.INATIVO ? 'NÃO' : 'SIM';
    cidadeInativo.id          = 'cidadeInativo';    
    cidadeInativo.className   = 'align-middle';
    
    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(nomeDistritoCell);
    row.appendChild(cidadeCell);
    row.appendChild(cidadeInativo);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}
