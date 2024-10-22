function routeCadastroTiposEndereco(application) {
  application.get('/InsereTipoEndereco', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.modalInsercaoTipoEndereco(application, request, response);
  });

  application.get('/ConsultaTipoEndereco', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewConsultaTipoEndereco(application, request, response);
  });

  application.get('/AbreConsultaTipoEndereco', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.modalConsultaTipoEndereco(application, request, response);
  }); 

  application.post('/RealizaInsercaoTipoEndereco', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewInsereTipoEndereco(application, request, response);
  });

  application.put('/RealizaAlteracaoTipoEndereco', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewAlteraTipoEndereco(application, request, response);
  });

  application.delete('/ExcluiTipoEndereco/:idTipoEndereco', function (request, response) {
    application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewExcluiTipoEndereco(application, request, response);
  });
}

module.exports = routeCadastroTiposEndereco;