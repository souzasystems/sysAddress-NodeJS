function routeCadastroBairros(application) {
/*
    application.get('/InsereTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewInsereTipoEndereco(application, request, response);
    });

    application.get('/AlteraTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewAlteraTipoEndereco(application, request, response);
    });

    application.get('/ExcluiTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewExcluiTipoEndereco(application, request, response);
    });
*/
    application.get('/ConsultaBairro', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroBairros.viewConsultaBairro(application, request, response);
    });
}

module.exports = routeCadastroBairros;