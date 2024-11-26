$(document).ready(function() {
  $('#modalTiposTelefone').modal('show'); //Esse código é em jQuery.

  $('#modalTiposTelefone').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function insereTipoTelefone() {
  window.location.href = "/InsereTipoTelefone";
};

function alteraTipoTelefone(idTipoTelefone, opcaoSel) {
  consultaTipoTelefone(idTipoTelefone, opcaoSel);
};

function excluiTipoTelefone(idTipoTelefone, descricaoTipoTelefone) {
  Swal.fire({
    title: 'Deseja realmente excluir o registro ' + strZeros(idTipoTelefone, 3) + ' - ' + descricaoTipoTelefone + '?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SIM',
    cancelButtonText: 'NÃO',
    width: '80%',
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`/ExcluiTipoTelefone/${idTipoTelefone}`, {method: 'DELETE'})
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
              if (result.isConfirmed) {
                  window.location.href = '/PesquisaTiposTelefone';
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

function consultaTipoTelefone(idTipoTelefone, opcaoSel) {
  fetch(`/ConsultaTipoTelefone?idTipoTelefone=${idTipoTelefone}&opcaoSel=${opcaoSel}`)
  .then(response => {
    if (!(response.ok)) {
      return response.json().then(error => {
        throw new Error(error.message);
      });
    }
    
    return response.json();
  })
  .then(dadosTipoTelefone => {
    const queryString = new URLSearchParams({
      idTipoTelefone: dadosTipoTelefone.tipoTelefone[0].ID_TIPO_ENDERECO,
      descricaoTipoTelefone: dadosTipoTelefone.tipoTelefone[0].DESCRICAO_TIPO_ENDERECO,
      opcaoSel: dadostipoTelefone.opcaoSel
    }).toString();
    
    //const queryString = `estadoCivil=${encodeURIComponent(JSON.stringify(dadosEstadoCivil.estadoCivil))}&opcaoSel=${encodeURIComponent(dadosEstadoCivil.opcaoSel)}`;

    window.location.href = `/AbreConsultaTipoTelefone?${queryString}`; 
  })
  .catch(error => console.error('Houve um erro ao realizar a consulta do tipo de telefone. Motivo: ' + error));
};

document.getElementById('btnInsereTipoTelefone').addEventListener('click', function () {
  insereTipoTelefone();
});

function carregaGridTiposTelefone(tiposTelefone) {
  const gridTiposTelefone = document.getElementById('gridTiposTelefone');

  tiposTelefone.forEach(tipoTelefone => {
    const row = document.createElement('tr');

    const idCell       = document.createElement('td');
    idCell.textContent = strZeros(tipoTelefone.ID_TIPO_TELEFONE, 3);
    idCell.id          = 'idTipoTelefone';
    idCell.className   = 'align-middle';
    
    const descricaoCell       = document.createElement('td');
    descricaoCell.textContent = tipoTelefone.DESCRICAO_TIPO_TELEFONE;
    descricaoCell.className   = 'align-middle';
    
    const mascaraCell       = document.createElement('td');
    mascaraCell.textContent = tipoTelefone.MASCARA_TELEFONE;
    mascaraCell.id          = 'mascaraTipoTelefone';    
    mascaraCell.className   = 'align-middle';    
    
    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm btnAlterar" data-id=${tipoTelefone.ID_TIPO_TELEFONE}>ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm btnExcluir" data-id=${tipoTelefone.ID_TIPO_TELEFONE} data-descricao="${tipoTelefone.DESCRICAO_TIPO_TELEFONE}">EXCLUIR</button>
      `;
    
    row.appendChild(idCell);
    row.appendChild(descricaoCell);
    row.appendChild(mascaraCell);
    row.appendChild(actionsCell);

    gridTiposTelefone.appendChild(row);
  });
}

function adicionaRotasBotoes() {
  const buttonsEdit   = document.getElementsByClassName('btnAlterar');
  const buttonsDelete = document.getElementsByClassName('btnExcluir');

  for (let x = 0; x < buttonsEdit.length; x++) {
    buttonsEdit[x].addEventListener('click', function () {
      alteraTipoTelefone(this.getAttribute('data-id'), 'A');
    });
  };

  for (let x = 0; x < buttonsDelete.length; x++) {
    buttonsDelete[x].addEventListener('click', function () {
      excluiTipoTelefone(this.getAttribute('data-id'), this.getAttribute('data-descricao'));
    });
  };
};

function adicionaRotasGrid() {
  document.querySelectorAll('#gridTiposEndereco tr').forEach(function (row) {
    row.addEventListener('click', function () {
      if (event.target.tagName === 'TD') {
        const indexCol = event.target.cellIndex;

        if ((indexCol === 0) || (indexCol === 1)) {
          consultaTipoTelefone(this.getAttribute('data-code'), 'C');
        }
      }
    });
  });
}