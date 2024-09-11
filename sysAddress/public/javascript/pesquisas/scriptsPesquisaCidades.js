$(document).ready(function() {
  $('#modalCidades').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalCidades').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function consultaCidadesPorNome() {
  const edtNomeCidade    = document.getElementById('edtNomeCidade').value;
  const chkCidadeInativa = document.getElementById('chkCidadeInativa').checked;
  const gridCidades      = document.getElementById('gridCidades');

  function limpaGridCidades() {
    gridCidades.innerHTML = '';
  }
  
  if (edtNomeCidade.length >= 3) {
    fetch('/consultaCidadesPorNome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nomeCidade: edtNomeCidade, cidadeInativa: chkCidadeInativa })
    })
    .then(response => response.json())
    .then(cidadesEncontradas => {
      limpaGridCidades();
      carregaGridCidades(cidadesEncontradas);
    })
    .catch(error => {
      console.error('Houve um erro na consulta de cidades. Motivo: ' + error);
    })
  }
  else {
    limpaGridCidades();
    return;
  }
}

document.getElementById('edtNomeCidade').addEventListener('input', function() {
  consultaCidadesPorNome();  
});

document.getElementById('chkCidadeInativa').addEventListener('click', function() {
  consultaCidadesPorNome();
})

function carregaGridCidades(cidades) {
  const gridCidades = document.getElementById('gridCidades');

  cidades.forEach(cidade => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(cidade.ID_CIDADE, 3);
    idCell.id          = 'idCidade';
    idCell.className   = 'align-middle';

    const nomeCidadeCell       = document.createElement('td');
    nomeCidadeCell.textContent = cidade.NOME_CIDADE;
    nomeCidadeCell.className   = 'align-middle';

    const estadoCell       = document.createElement('td');
    estadoCell.textContent = cidade.NOME_ESTADO;
    estadoCell.className   = 'align-middle';

    const numeroDDDCell       = document.createElement('td');
    numeroDDDCell.textContent = cidade.NUMERO_DDD;
    numeroDDDCell.id          = 'numeroDDD';
    numeroDDDCell.className   = 'align-middle';

    const cidadeInativo       = document.createElement('td');
    cidadeInativo.textContent = cidade.INATIVA ? 'NÃO' : 'SIM';
    cidadeInativo.id          = 'cidadeInativo';    
    cidadeInativo.className   = 'align-middle';
    
    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(nomeCidadeCell);
    row.appendChild(estadoCell);
    row.appendChild(numeroDDDCell);
    row.appendChild(cidadeInativo);
    row.appendChild(actionsCell);

    gridCidades.appendChild(row);
  });
}
