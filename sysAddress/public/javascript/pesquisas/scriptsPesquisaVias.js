$(document).ready(function() {
  $('#modalVias').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalVias').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function carregaGridVias(vias) {
  const gridVias = document.getElementById('gridVias');

  vias.forEach(via => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(via.ID_VIA, 6);
    idCell.id          = 'idVia';
    idCell.className   = 'align-middle';

    const logradouroCell       = document.createElement('td');
    logradouroCell.textContent = via.DESCRICAO_LOGRADOURO;
    logradouroCell.className   = 'align-middle';

    const nomeViaCell       = document.createElement('td');
    nomeViaCell.textContent = via.NOME_VIA;
    nomeViaCell.className   = 'align-middle';

    const bairroCell       = document.createElement('td');
    bairroCell.textContent = via.NOME_BAIRRO;
    bairroCell.className   = 'align-middle';

    const cepCell       = document.createElement('td');
    cepCell.textContent = via.CEP;
    idCell.id          = 'cepVia';
    cepCell.className   = 'align-middle';

    const viaInativa       = document.createElement('td');
    viaInativa.textContent = via.INATIVA ? 'NÃO' : 'SIM';
    viaInativa.id          = 'viaInativa';
    viaInativa.className   = 'align-middle';
    
    const actionsCell         = document.createElement('td');
    actionsCell.className     = 'acoes-col';
    actionsCell.innerHTML     = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(logradouroCell);
    row.appendChild(nomeViaCell);
    row.appendChild(bairroCell);
    row.appendChild(cepCell);
    row.appendChild(viaInativa);
    row.appendChild(actionsCell);

    gridVias.appendChild(row);
  });
}
