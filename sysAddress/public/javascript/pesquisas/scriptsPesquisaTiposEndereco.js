$(document).ready(function() {
  $('#modalTiposEndereco').modal('show'); //Esse código é em jQuery

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalTiposEndereco').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function insereTipoEndereco() {
  window.location.href = "/InsereTipoEndereco";
};

function alteraTipoEndereco(idTipoEndereco) {
  window.location.href = `/AlteraTipoEndereco?idTipoEndereco=${idTipoEndereco}`;
};

function excluiTipoEndereco(idTipoEndereco) {
  window.location.href = `/ExcluiTipoEndereco?idTipoEndereco=${idTipoEndereco}`;
};

function consultaTipoEndereco(idTipoEndereco) { 
  window.location.href = `/ConsultaTipoEndereco?idTipoEndereco=${idTipoEndereco}`;
};

document.getElementById('btnInsereTipoEndereco').addEventListener('click', function() {
  insereTipoEndereco();
});

function carregaGridTiposEndereco(tiposEndereco) {
  const gridTiposEndereco = document.getElementById('gridTiposEndereco');

  tiposEndereco.forEach(tipoEndereco => {
    const row        = document.createElement('tr');    
    row.dataset.code = tipoEndereco.ID_TIPO_ENDERECO;
    //row.setAttribute('data-code', tipo.ID_TIPO_ENDERECO); Outra forma de inserir o data-code

    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(tipoEndereco.ID_TIPO_ENDERECO, 3);
    idCell.id          = 'idTipoEndereco';
    idCell.className   = 'align-middle';
    
    const descricaoCell       = document.createElement('td');
    descricaoCell.textContent = tipoEndereco.DESCRICAO_TIPO_ENDERECO;
    descricaoCell.className   = 'align-middle';
    
    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm btnAlterar" data-id=${tipoEndereco.ID_TIPO_ENDERECO}>ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm btnExcluir" data-id=${tipoEndereco.ID_TIPO_ENDERECO}>EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(descricaoCell);
    row.appendChild(actionsCell);

    gridTiposEndereco.appendChild(row);
  });
};

function adicionaRotasBotoes() {
  const buttonsEdit   = document.getElementsByClassName('btnAlterar');
  const buttonsDelete = document.getElementsByClassName('btnExcluir');
  
  for (let x = 0; x < buttonsEdit.length; x++) {
    buttonsEdit[x].addEventListener('click', function() {      
      alteraTipoEndereco(this.getAttribute('data-id'));
    });
  };

  for (let x = 0; x < buttonsDelete.length; x++) {
    buttonsDelete[x].addEventListener('click', function() {
      excluiTipoEndereco(this.getAttribute('data-id'));
    });
  };
};

function adicionaRotasGrid() {
  document.querySelectorAll('#gridTiposEndereco tr').forEach(function(row) {
    row.addEventListener('click', function() {
      if (event.target.tagName === 'TD') {
        const indexCol = event.target.cellIndex;

        if ((indexCol === 0) || (indexCol === 1)) {
          consultaTipoEndereco(this.getAttribute('data-code'));
        }
      }
    });
  });
}

/*
function consultaTipoEndereco(idTipoEndereco) { 
    fetch(`/ConsultaTipoEndereco?idTipoEndereco=${idTipoEndereco}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.log('Houve um erro ao realizar a consulta do tipo de endereço selecionado. Motivo: ' + error));
*/