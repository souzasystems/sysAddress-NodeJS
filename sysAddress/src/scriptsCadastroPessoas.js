$(document).ready(function () {
  $('#modalCadastroPessoa').modal('show');

  $('#modalCadastroPessoa').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/PesquisaBancos';
    }
  });
});


window.onload = function () {
  const dataCadastroInput = document.getElementById("edtDataCadastro");
  const dataAtual         = new Date().toISOString().split("T")[0];
  dataCadastroInput.value = dataAtual;
};


/*
function habilitaDesabilitaCampos(opcaoSel) {
  switch (opcaoSel) {
    case 'I':
      document.getElementById('modalCadastroEstadoCivilLabel').textContent = 'ESTADOS CIVIS - INSERÇÃO';
      document.getElementById('modalCadastroEstadoCivil').disabled         = false;
      break;
    case 'A':
      document.getElementById('modalCadastroEstadoCivilLabel').textContent = 'ESTADOS CIVIS - ALTERAÇÃO';
      document.getElementById('modalCadastroEstadoCivil').disabled         = false;
      break;
    case 'C':
      document.getElementById('modalCadastroEstadoCivilLabel').textContent = 'ESTADOS CIVIS - CONSULTA';
      document.getElementById('modalCadastroEstadoCivil').disabled         = true;
      break;
  }
}

function carregaDados(estadoCivil) {
  document.getElementById('edtIdEstadoCivil').value        = strZeros(estadoCivil.ID_ESTADO_CIVIL, 3);
  document.getElementById('edtDescricaoEstadoCivil').value = estadoCivil.DESCRICAO_ESTADO_CIVIL;
}

function validaDados() {
  const descricaoEstadoCivil = document.getElementById('edtDescricaoEstadoCivil').value;

  if (descricaoEstadoCivil === '') {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "A descrição do estado civil não pode ficar em branco!",
      showConfirmButton: true,
      width: "500px"
    });

    return false;
  }
}

document.getElementById('btnSalvar').addEventListener('click', function () {
  validaDados();

  if (opcaoSel == 'I') {
    fetch('/RealizaInsercaoEstadoCivil', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        descricaoTipoEndereco: (document.getElementById('edtDescricaoEstadoCivil').value).toUpperCase(),
        logIdUsuario: 1
      })
    })
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
          title: "Registro inserido!",
          text: dados.message,
          icon: "success",
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/PesquisaEstadosCivis';
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
  else if (opcaoSel == 'A') {
    fetch('/RealizaAlteracaoEstadoCivil', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idTipoEndereco: parseInt(document.getElementById('edtIdEstadoCivil').value),
        descricaoTipoEndereco: (document.getElementById('edtDescricaoEstadoCivil').value).toUpperCase(),
        logIdUsuario: 1
      })
    })
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
          title: "Alteração realizada!",
          text: dados.message,
          icon: "success",
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/PesquisaEstadosCivis';
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
});
*/