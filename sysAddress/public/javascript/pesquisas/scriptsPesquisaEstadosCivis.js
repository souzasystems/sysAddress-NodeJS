$(document).ready(function () {
  $('#modalEstadosCivis').modal('show'); //Esse código é em jQuery.

  // Redirecionar para /TelaInicial ao fechar o modal
  $('#modalEstadosCivis').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/TelaInicial';
    }
  });
});

function insereEstadoCivil() {
  window.location.href = "/InsereEstadoCivil";
};

function alteraEstadoCivil(idEstadoCivil, opcaoSel) {
  consultaEstadoCivil(idEstadoCivil, opcaoSel);
};

function excluiEstadoCivil(idEstadoCivil, descricaoEstadoCivil) {
  Swal.fire({
    title: 'Deseja realmente excluir o registro ' + strZeros(idEstadoCivil, 3) + ' - ' + descricaoEstadoCivil + '?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SIM',
    cancelButtonText: 'NÃO',
    width: '80%',
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`/ExcluiEstadoCivil/${idEstadoCivil}`, { method: 'DELETE' })
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

function consultaEstadoCivil(idEstadoCivil, opcaoSel) {
  fetch(`/ConsultaEstadoCivil?idEstadoCivil=${idEstadoCivil}&opcaoSel=${opcaoSel}`)
    .then(response => {
      if (!(response.ok)) {
        return response.json().then(error => {
          throw new Error(error.message);
        });
      }
      return response.json();
    })
    .then(dadosEstadoCivil => {
      const queryString = new URLSearchParams({
        idEstadoCivil: dadosEstadoCivil.estadoCivil[0].ID_TIPO_ENDERECO,
        descricaoEstadoCivil: dadosEstadoCivil.estadoCivil[0].DESCRICAO_TIPO_ENDERECO,
        opcaoSel: dadosEstadoCivil.opcaoSel
      }).toString();
      window.location.href = `/AbreConsultaEstadoCivil?${queryString}`;
    })
    .catch(error => console.error('Houve um erro ao realizar a consulta de estado civil. Motivo: ' + error));
};

document.getElementById('btnInsereEstadoCivil').addEventListener('click', function () {
  insereEstadoCivil();
});

function carregaGridEstadosCivis(estadosCivis) {
  const gridEstadosCivis = document.getElementById('gridEstadosCivis');

  estadosCivis.forEach(estadoCivil => {
    const row        = document.createElement('tr');
    row.dataset.code = estadoCivil.ID_ESTADO_CIVIL;

    const idEstadoCivilCell       = document.createElement('td');
    idEstadoCivilCell.textContent = strZeros(estadoCivil.ID_ESTADO_CIVIL, 3);
    idEstadoCivilCell.id          = 'idEstadoCivil';
    idEstadoCivilCell.className   = 'align-middle';

    const descricaoCell       = document.createElement('td');
    descricaoCell.textContent = estadoCivil.DESCRICAO_ESTADO_CIVIL;
    descricaoCell.className   = 'align-middle';

    const actionsCell     = document.createElement('td');
    actionsCell.className = 'acoes-col';
    actionsCell.innerHTML = `
        <button type="button" class="btn btn-secondary btn-sm btnAlterar" data-id=${estadoCivil.ID_ESTADO_CIVIL}>ALTERAR</button>
        <button type="button" class="btn btn-danger btn-sm btnExcluir" data-id=${estadoCivil.ID_ESTADO_CIVIL} data-descricao=${estadoCivil.DESCRICAO_ESTADO_CIVIL}>EXCLUIR</button>
      `;

    row.appendChild(idEstadoCivilCell);
    row.appendChild(descricaoCell);
    row.appendChild(actionsCell);

    gridEstadosCivis.appendChild(row);
  });
}

function adicionaRotasBotoes() {
  const buttonsEdit   = document.getElementsByClassName('btnAlterar');
  const buttonsDelete = document.getElementsByClassName('btnExcluir');

  for (let x = 0; x < buttonsEdit.length; x++) {
    buttonsEdit[x].addEventListener('click', function () {
      alteraEstadoCivil(this.getAttribute('data-id'), 'A');
    });
  };

  for (let x = 0; x < buttonsDelete.length; x++) {
    buttonsDelete[x].addEventListener('click', function () {
      excluiEstadoCivil(this.getAttribute('data-id'), this.getAttribute('data-descricao'));
    });
  };
};

function adicionaRotasGrid() {
  document.querySelectorAll('#gridTiposEndereco tr').forEach(function (row) {
    row.addEventListener('click', function () {
      if (event.target.tagName === 'TD') {
        const indexCol = event.target.cellIndex;
        if ((indexCol === 0) || (indexCol === 1)) {
          consultaEstadoCivil(this.getAttribute('data-code'), 'C');
        }
      }
    });
  });
}
