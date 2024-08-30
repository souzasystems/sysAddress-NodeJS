$(document).ready(function() {
    console.log("OI");
    // Mostrar o modal automaticamente ao carregar a página
    $('#modalCadastroTipoEndereco').modal('show');
 
    // Redirecionar para /TelaInicial ao fechar o modal
    $('#modalCadastroTipoEndereco').on('hidden.bs.modal', function () {
      console.log('Clicou no botão "Fechar"');
      window.location.href = '/TelaInicial';
    });
  
    // Evitar qualquer ação ao clicar fora do modal, mantendo-o aberto
    $('#modalCadastroTipoEndereco').on('click', function (e) {
      console.log($(e.target).hasClass);
      if ($(e.target).hasClass('modal')) {
        e.preventDefault(); // Impede o fechamento do modal e mantém a página atual
      }
    });
  });
  
