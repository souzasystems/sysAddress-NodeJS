function routeCadastroTiposEndereco(application) {
    application.get('/InsereTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewInsereTipoEndereco(application, request, response);
    });

    application.get('/AlteraTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewAlteraTipoEndereco(application, request, response);
    });
/*
    application.get('/ExcluiTipoEndereco', function (request, response, tipoEndereco, opcaoSel) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewExcluiTipoEndereco(application, request, response, tipoEndereco, opcaoSel);
    });
*/
    application.get('/ConsultaTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewConsultaTipoEndereco(application, request, response);
    });
}

module.exports = routeCadastroTiposEndereco;