function routeCadastroTiposEndereco(application) {
<<<<<<< HEAD
    
=======
    application.get('/InsereTipoEndereco', function (request, response, opcaoSel) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewInsereTipoEndereco(application, request, response, opcaoSel);
    });

    application.get('/AlteraTipoEndereco', function (request, response, tipoEndereco, opcaoSel) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewAlteraTipoEndereco(application, request, response, tipoEndereco, opcaoSel);
    });

    application.get('/ExcluiTipoEndereco', function (request, response, tipoEndereco, opcaoSel) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewExcluiTipoEndereco(application, request, response, tipoEndereco, opcaoSel);
    });

    application.get('/ConsultaTipoEndereco', function (request, response) {
        console.log(request.query);
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewConsultaTipoEndereco(application, request, response);
    });
>>>>>>> d5f51c4464128e656224b23b80068f7785e08afa
}

module.exports = routeCadastroTiposEndereco;