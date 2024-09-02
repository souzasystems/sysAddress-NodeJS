$(document).ready(function() {
  $('#modalQuadras').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalQuadras').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function carregaGridQuadras(quadras) {
  const gridQuadras = document.getElementById('gridQuadras');

  quadras.forEach(quadra => {
    const row                 = document.createElement('tr');
    const idCell              = document.createElement('td');
    idCell.textContent        = strZeros(quadra.ID_QUADRA, 3);
    idCell.id                 = 'idQuadra';
    idCell.className          = 'align-middle';

    const nomeQuadraCell       = document.createElement('td');
    nomeQuadraCell.textContent = quadra.DESCRICAO_QUADRA;
    nomeQuadraCell.className   = 'align-middle';

    const bairrocell       = document.createElement('td');
    bairrocell.textContent = quadra.NOME_BAIRRO;
    bairrocell.className   = 'align-middle';

    const quadraInativa       = document.createElement('td');
    quadraInativa.textContent = quadra.INATIVA ? 'NÃO' : 'SIM';
    quadraInativa.id          = 'quadraInativa';
    quadraInativa.className   = 'align-middle';
    
    const actionsCell         = document.createElement('td');
    actionsCell.className     = 'acoes-col';
    actionsCell.innerHTML     = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(nomeQuadraCell);
    row.appendChild(bairrocell);
    row.appendChild(quadraInativa);
    row.appendChild(actionsCell);

    gridQuadras.appendChild(row);
  });
}
