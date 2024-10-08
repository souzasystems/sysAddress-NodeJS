

$(document).ready(function() {
  $('#modalPaises').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalPaises').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function consultaPaisPorNome() {
  const edtNomePais    = document.getElementById('edtNomePais').value;
  const chkPaisInativo = document.getElementById('chkPaisInativo').checked;
  const gridPaises     = document.getElementById('gridPaises');

  function limpaGridPaises() {
    gridPaises.innerHTML = '';
  }
  
  if (edtNomePais.length >= 3) {
    fetch('/consultaPaisesPorNome', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nomePais: edtNomePais, paisInativo: chkPaisInativo })
    })
    .then(response => response.json())
    .then(paisesEncontrados => {
      limpaGridPaises();
      carregaGridPaises(paisesEncontrados);
    })
    .catch(error => {
      console.error('Houve um erro na consulta de países. Motivo: ' + error);
    })
  }
  else {
    limpaGridPaises();
    return;
  }
}

document.getElementById('edtNomePais').addEventListener('input', function() {
  consultaPaisPorNome();  
});

document.getElementById('chkPaisInativo').addEventListener('click', function() {
  consultaPaisPorNome();
})

function carregaGridPaises(paises) {
  const tableBody = document.getElementById('gridPaises');

  paises.forEach(pais => {
    const row                 = document.createElement('tr');
    const idCell              = document.createElement('td');
    idCell.textContent        = strZeros(pais.ID_PAIS, 3);
    idCell.id                 = 'idPais';
    idCell.className          = 'align-middle';

    const nomePaisCell       = document.createElement('td');
    nomePaisCell.textContent = pais.NOME_PAIS;
    nomePaisCell.className   = 'align-middle';

    const sigla03cell         = document.createElement('td');
    sigla03cell.textContent   = pais.SIGLA_03;
    sigla03cell.id            = 'sigla03';    
    sigla03cell.className     = 'align-middle';

    const numeroDDIcell         = document.createElement('td');
    numeroDDIcell.textContent   = pais.NUMERO_DDI;
    numeroDDIcell.id            = 'numeroDDI';    
    numeroDDIcell.className     = 'align-middle';

    const paisInativo         = document.createElement('td');
    paisInativo.textContent   = pais.INATIVO ? 'NÃO' : 'SIM';
    paisInativo.id            = 'paisInativo';    
    paisInativo.className     = 'align-middle';
    
    const actionsCell         = document.createElement('td');
    actionsCell.className     = 'acoes-col';
    actionsCell.innerHTML     = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(nomePaisCell);
    row.appendChild(sigla03cell);
    row.appendChild(numeroDDIcell);
    row.appendChild(paisInativo);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });
}
