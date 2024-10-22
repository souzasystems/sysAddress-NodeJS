$(document).ready(function () {
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

function alteraTipoEndereco(idTipoEndereco, opcaoSel) {
  consultaTipoEndereco(idTipoEndereco, opcaoSel);
};

function excluiTipoEndereco(idTipoEndereco, descricaoTipoEndereco) {
  Swal.fire({
    title: 'Deseja realmente excluir o registro ' + strZeros(idTipoEndereco, 3) + ' - ' + descricaoTipoEndereco + '?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SIM',
    cancelButtonText: 'NÃO',
    width: '80%',
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`/ExcluiTipoEndereco/${idTipoEndereco}`, {method: 'DELETE'})
        .then(response => {
          if (!(response.ok)) {
            return response.json().then(error => {
              throw new Error(error.message);
            });
          }
          
          return response.json();
        })
        .then(dados => {
          Swal.fire({
              title: "Excluído!",
              text: dados.message,
              icon: "success",
              confirmButtonText: 'OK'
            }).then((result) => {
              // Verifica se o botão "OK" foi clicado
              if (result.isConfirmed) {
                  window.location.href = '/PesquisaTiposEndereco';
              }
            });
          })
        .catch(error => {
          Swal.fire({
            title: "Erro!",
            text: error.message,
            icon: "error"
          });
        });
    }
    else {
      Swal.fire({
        title: "Exclusão cancelada!",
        icon: "error"
      });
    }
  });
};

function consultaTipoEndereco(idTipoEndereco, opcaoSel) {
  fetch(`/ConsultaTipoEndereco?idTipoEndereco=${idTipoEndereco}&opcaoSel=${opcaoSel}`)
  .then(response => {
    if (!(response.ok)) {
      return response.json().then(error => {
        throw new Error(error.message);
      });
    }
    
    return response.json();
  })
  .then(dadosTipoEndereco => {
    const queryString = new URLSearchParams({
      idTipoEndereco: dadosTipoEndereco.tipoEndereco[0].ID_TIPO_ENDERECO,
      descricaoTipoEndereco: dadosTipoEndereco.tipoEndereco[0].DESCRICAO_TIPO_ENDERECO,
      opcaoSel: dadosTipoEndereco.opcaoSel
    }).toString();

    window.location.href = `/AbreConsultaTipoEndereco?${queryString}`; 
  })
  .catch(error => console.error('Houve um erro ao realizar a consulta do tipo de endereço. Motivo: ' + error));
};

document.getElementById('btnInsereTipoEndereco').addEventListener('click', function () {
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
        <button type="button" class="btn btn-danger btn-sm btnExcluir" data-id=${tipoEndereco.ID_TIPO_ENDERECO} data-descricao=${tipoEndereco.DESCRICAO_TIPO_ENDERECO}>EXCLUIR</button>
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
    buttonsEdit[x].addEventListener('click', function () {
      alteraTipoEndereco(this.getAttribute('data-id'), 'A');
    });
  };

  for (let x = 0; x < buttonsDelete.length; x++) {
    buttonsDelete[x].addEventListener('click', function () {
      excluiTipoEndereco(this.getAttribute('data-id'), this.getAttribute('data-descricao'));
    });
  };
};

function adicionaRotasGrid() {
  document.querySelectorAll('#gridTiposEndereco tr').forEach(function (row) {
    row.addEventListener('click', function () {
      if (event.target.tagName === 'TD') {
        const indexCol = event.target.cellIndex;

        if ((indexCol === 0) || (indexCol === 1)) {
          consultaTipoEndereco(this.getAttribute('data-code'), 'C');
        }
      }
    });
  });
}