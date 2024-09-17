$(document).ready(function() {
  $('#modalBairros').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalBairros').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function consultaBairrosPorNome() {
  const edtNomeBairro    = document.getElementById('edtNomeBairro').value;
  const chkBairroInativo = document.getElementById('chkBairroInativo').checked;
  const gridBairros      = document.getElementById('gridBairros');

  function limpaGridBairros() {
    gridBairros.innerHTML = '';
  }
  
  if (edtNomeBairro .length >= 3) {
    fetch('/consultaBairrosPorNome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nomeBairro: edtNomeBairro, bairroInativo: chkBairroInativo })
    })
    .then(response => response.json())
    .then(bairrosEncontrados => {
      limpaGridBairros();
      carregaGridBairros(bairrosEncontrados);
    })
    .catch(error => {
      console.error('Houve um erro na consulta de nomes de bairros. Motivo: ' + error);
    })
  }
  else {
    limpaGridBairros();
    return;
  }
}

document.getElementById('edtNomeBairro').addEventListener('input', function() {
  consultaBairrosPorNome();  
});

document.getElementById('chkBairroInativo').addEventListener('click', function() {
  consultaBairrosPorNome();
})

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
    row.appendChild(cidadeCell);
    row.appendChild(bairroInativo);
    row.appendChild(actionsCell);

    gridBairros.appendChild(row);
  });
}
