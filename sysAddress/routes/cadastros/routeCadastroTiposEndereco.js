function routeCadastroTiposEndereco(application) {
    application.post('/RealizaInsercaoTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewInsereTipoEndereco(application, request, response);
    });

    application.get('/InsereTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.modalCadastroTipoEndereco(application, request, response);
    });

    application.get('/AlteraTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewAlteraTipoEndereco(application, request, response);
    });

    application.delete('/ExcluiTipoEndereco/:idTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewExcluiTipoEndereco(application, request, response);
    });

    application.get('/ConsultaTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewConsultaTipoEndereco(application, request, response);
    });
}

module.exports = routeCadastroTiposEndereco;