$(document).ready(function () {
  $('#modalLancamento').modal('show');

  $('#modalLancamento').on('hide.bs.modal', function (event) {
    if ($(event.target).hasClass('modal')) {
      window.location.href = '/PesquisaBancos';
    }
  });
});

window.onload = function () {
  const dataEmissaoInput = document.getElementById("edtDataEmissao");
  const dataAtual        = new Date().toISOString().split("T")[0];
  dataEmissaoInput.value = dataAtual;
};