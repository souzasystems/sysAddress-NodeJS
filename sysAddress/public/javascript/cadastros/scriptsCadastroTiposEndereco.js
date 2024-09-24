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
      document.getElementById('edtDescricaoTipoEndereco').disabled          = false;
      break;
    case 'A':
      document.getElementById('modalCadastroTipoEnderecoLabel').textContent = 'TIPOS DE ENDEREÇO - ALTERAÇÃO';
      document.getElementById('edtDescricaoTipoEndereco').disabled          = false;
      break;
    case 'C':
      document.getElementById('modalCadastroTipoEnderecoLabel').textContent = 'TIPOS DE ENDEREÇO - CONSULTA';
      document.getElementById('edtDescricaoTipoEndereco').disabled          = true;
      break;
  }
}

function carregaDados(tipoEndereco) {
  document.getElementById('edtIdTipoEndereco').value        = strZeros(tipoEndereco[0].ID_TIPO_ENDERECO, 3);
  document.getElementById('edtDescricaoTipoEndereco').value = tipoEndereco[0].DESCRICAO_TIPO_ENDERECO;
}