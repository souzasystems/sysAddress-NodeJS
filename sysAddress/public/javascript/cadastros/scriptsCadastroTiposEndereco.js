$(document).ready(function () {
  $('#modalCadastroTipoEndereco').modal('show');

  // Redirecionar para /PesquisaTiposEndereo ao fechar o modal
  $('#modalCadastroTipoEndereco').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/PesquisaTiposEndereco';
    }
  });
});

function habilitaDesabilitaCampos(opcaoSel) {
  switch (opcaoSel) {
    case 'I':
      document.getElementById('modalCadastroTipoEnderecoLabel').textContent = 'TIPOS DE ENDEREÇO - INSERÇÃO';
      document.getElementById('edtDescricaoTipoEndereco').disabled = false;
      break;
    case 'A':
      document.getElementById('modalCadastroTipoEnderecoLabel').textContent = 'TIPOS DE ENDEREÇO - ALTERAÇÃO';
      document.getElementById('edtDescricaoTipoEndereco').disabled = false;
      break;
    case 'C':
      document.getElementById('modalCadastroTipoEnderecoLabel').textContent = 'TIPOS DE ENDEREÇO - CONSULTA';
      document.getElementById('edtDescricaoTipoEndereco').disabled = true;
      break;
  }
}

function carregaDados(tipoEndereco) {
  document.getElementById('edtIdTipoEndereco').value = strZeros(tipoEndereco.idTipoEndereco, 3);
  document.getElementById('edtDescricaoTipoEndereco').value = tipoEndereco.descricaoTipoEndereco;
}

function validaDados() {
  const descricaoTipoEndereco = document.getElementById('edtDescricaoTipoEndereco').value;

  if (descricaoTipoEndereco === '') {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "A descrição do tipo de endereço não pode ficar em branco!",
      showConfirmButton: true,
      width: "500px"
    });

    return false;
  }
}

document.getElementById('btnSalvar').addEventListener('click', function () {
  validaDados();

  if (opcaoSel == 'I') {
    fetch('/RealizaInsercaoTipoEndereco', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          descricaoTipoEndereco: (document.getElementById('edtDescricaoTipoEndereco').value).toUpperCase(),
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
  else if (opcaoSel == 'A') {
    fetch('/RealizaAlteracaoTipoEndereco', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idTipoEndereco: parseInt(document.getElementById('edtIdTipoEndereco').value),
        descricaoTipoEndereco: (document.getElementById('edtDescricaoTipoEndereco').value).toUpperCase(),
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
});