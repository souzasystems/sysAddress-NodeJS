$(document).ready(function() {
  $('#modalBairros').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalBairros').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function carregaGridBairros(bairros) {
  const gridBairros = document.getElementById('gridBairros');

  bairros.forEach(bairro => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(bairro.ID_BAIRRO, 3);
    idCell.id          = 'idBairro';
    idCell.className   = 'align-middle';

    const nomeBairroCell       = document.createElement('td');
    nomeBairroCell.textContent = bairro.NOME_BAIRRO;
    nomeBairroCell.className   = 'align-middle';

    const cidadeCell       = document.createElement('td');
    cidadeCell.textContent = bairro.NOME_CIDADE;
    cidadeCell.className   = 'align-middle';

    const bairroInativo       = document.createElement('td');
    bairroInativo.textContent = bairro.INATIVO ? 'NÃO' : 'SIM';
    bairroInativo.id          = 'bairroInativo';    
    bairroInativo.className   = 'align-middle';
    
    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(nomeBairroCell);
    row.appendChild(bairroCell);
    row.appendChild(bairroInativo);
    row.appendChild(actionsCell);

    gridBairros.appendChild(row);
  });
}
