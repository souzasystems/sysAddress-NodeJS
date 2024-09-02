let currentPage      = 1;
const recordsPerPage = 10;
let lstLogradouros   = [];

$(document).ready(function() {
  $('#modalLogradouros').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalLogradouros').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function iniciaVariaveis(logradouros) {
  lstLogradouros = logradouros;
}

function displayPage(page) {  
  const startIndex = (page -1) * recordsPerPage;
  const endIndex   = startIndex + recordsPerPage;
  const pageDate   = lstLogradouros.slice(startIndex, endIndex);

  const tableLogradouros     = document.getElementById('gridLogradouros');
  tableLogradouros.innerHTML = '';

  loadTableData(pageDate);

  document.getElementById('btnAnterior').disabled = page === 1;
  document.getElementById('btnProximo').disabled  = page === Math.ceil(lstLogradouros.length / recordsPerPage);
}

document.getElementById('btnAnterior').addEventListener('click', function() {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
  }
});

document.getElementById('btnProximo').addEventListener('click', function() {
  if (currentPage < Math.ceil(lstLogradouros.length / recordsPerPage)) {
    currentPage++;
    displayPage(currentPage);
  }
});

function loadTableData(lstLogradouros) {
  const tableLogradouros = document.getElementById('gridLogradouros');

  lstLogradouros.forEach(logradouro => {
    const row = document.createElement('tr');
    
    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(logradouro.ID_LOGRADOURO, 3);
    idCell.id          = 'idLogradouro';
    idCell.className   = 'align-middle';
    
    const descricaoCell       = document.createElement('td');
    descricaoCell.textContent = logradouro.DESCRICAO_LOGRADOURO;
    descricaoCell.className   = 'align-middle';
    
    const abreviaturaCell       = document.createElement('td');
    abreviaturaCell.textContent = logradouro.ABREVIATURA_LOGRADOURO;
    abreviaturaCell.className   = 'align-middle';

    const inativoCell       = document.createElement('td');
    inativoCell.textContent = logradouro.INATIVO ? 'NÃO' : 'SIM';
    inativoCell.id          = 'lograInativo';
    inativoCell.className   = 'align-middle';
        
    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm alterarBtn">ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm excluirBtn">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(descricaoCell);
    row.appendChild(abreviaturaCell);
    row.appendChild(inativoCell);
    row.appendChild(actionsCell);

    tableLogradouros.appendChild(row);
  });
}