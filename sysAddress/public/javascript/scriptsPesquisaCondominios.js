$(document).ready(function() {
  $('#modalCondominios').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalCondominios').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function carregaGridCondominios(condominios) {
  const gridCondominios = document.getElementById('gridCondominios');

  condominios.forEach(condominio => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(condominio.ID_CONDOMINIO, 3);
    idCell.id          = 'idCondominio';
    idCell.className   = 'align-middle';

    const nomeCondominioCell       = document.createElement('td');
    nomeCondominioCell.textContent = condominio.NOME_CONDOMINIO;
    nomeCondominioCell.className   = 'align-middle';

    const bairroCell         = document.createElement('td');
    bairroCell.textContent   = condominio.NOME_BAIRRO;
    bairroCell.className     = 'align-middle';

    const condominioInativo         = document.createElement('td');
    condominioInativo.textContent   = condominio.INATIVO ? 'NÃO' : 'SIM';
    condominioInativo.id            = 'condominioInativo';    
    condominioInativo.className     = 'align-middle';
    
    const actionsCell         = document.createElement('td');
    actionsCell.className     = 'acoes-col';
    actionsCell.innerHTML     = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(nomeCondominioCell);
    row.appendChild(bairroCell);
    row.appendChild(condominioInativo);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}
