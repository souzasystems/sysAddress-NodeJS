function routeCadastroEstadosCivis(application) {
  application.get('/InsereEstadoCivil', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroEstadosCivis.abreModalInsercaoEstadoCivil(application, request, response);
  });

  application.get('/AbreConsultaEstadoCivil', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroEstadosCivis.abreModalConsultaEstadoCivil(application, request, response);
  });

  application.get('/ConsultaEstadoCivil', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroEstadosCivis.consultaEstadoCivil(application, request, response);
  }); 

  application.post('/RealizaInsercaoEstadoCivil', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroEstadosCivis.insereEstadoCivil(application, request, response);
  });

  application.put('/RealizaAlteracaoEstadoCivil', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroEstadosCivis.alteraTipoEndereco(application, request, response);
  });

  application.delete('/ExcluiEstadoCivil/:idEstadoCivil', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroEstadosCivis.excluiTipoEndereco(application, request, response);
  });
}

module.exports = routeCadastroEstadosCivis;