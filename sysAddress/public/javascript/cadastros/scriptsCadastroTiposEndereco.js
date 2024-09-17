$(document).ready(function() {
    $('#modalCadastroTipoEndereco').modal('show');
  
    // Redirecionar para /PesquisaTiposEndereo ao fechar o modal
    $('#modalCadastroTipoEndereco').on('hide.bs.modal', function (event) {
      if ($(event.target).hasClass('modal')) {
        window.location.href = '/PesquisaTiposEndereco';
      }
    });
  
  });
  
