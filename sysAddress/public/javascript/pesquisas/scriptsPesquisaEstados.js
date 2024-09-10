$(document).ready(function() {
  $('#modalEstados').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalEstados').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function consultaEstadoPorNome() {
  const edtNomeEstado    = document.getElementById('edtNomeEstado').value;
  const chkEstadoInativo = document.getElementById('chkEstadoInativo').checked;
  const gridEstados      = document.getElementById('gridEstados');

  function limpaGridEstados() {
    gridEstados.innerHTML = '';
  }
  
  if (edtNomeEstado.length >= 3) {
    fetch('/consultaEstadosPorNome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nomeEstado: edtNomeEstado, estadoInativo: chkEstadoInativo })
    })
    .then(response => response.json())
    .then(estadosEncontrados => {
      limpaGridEstados();
      carregaGridEstados(estadosEncontrados);
    })
    .catch(error => {
      console.error('Houve um erro na consulta de estados. Motivo: ' + error);
    })
  }
  else {
    limpaGridEstados();
    return;
  }
}

document.getElementById('edtNomeEstado').addEventListener('input', function() {
  consultaEstadoPorNome();  
});

document.getElementById('chkEstadoInativo').addEventListener('click', function() {
  consultaEstadoPorNome();
})

function carregaGridEstados(estados) {
  const gridEstados = document.getElementById('gridEstados');

  estados.forEach(estado => {
    const row          = document.createElement('tr');
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(estado.ID_ESTADO, 3);
    idCell.id          = 'idEstado';
    idCell.className   = 'align-middle';

    const nomeEstadoCell       = document.createElement('td');
    nomeEstadoCell.textContent = estado.NOME_ESTADO;
    nomeEstadoCell.className   = 'align-middle';

    const nomePaisEstadoCell       = document.createElement('td');
    nomePaisEstadoCell.textContent = estado.NOME_PAIS;
    nomePaisEstadoCell.className   = 'align-middle';

    const siglacell       = document.createElement('td');
    siglacell.textContent = estado.SIGLA_ESTADO;
    siglacell.id          = 'siglaEstado';    
    siglacell.className   = 'align-middle';

    const estadoInativo       = document.createElement('td');
    estadoInativo.textContent = estado.INATIVO ? 'NÃO' : 'SIM';
    estadoInativo.id          = 'estadoInativo';    
    estadoInativo.className   = 'align-middle';
    
    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(nomeEstadoCell);
    row.appendChild(nomePaisEstadoCell);
    row.appendChild(siglacell);
    row.appendChild(estadoInativo);
    row.appendChild(actionsCell);

    gridEstados.appendChild(row);
  });
}
