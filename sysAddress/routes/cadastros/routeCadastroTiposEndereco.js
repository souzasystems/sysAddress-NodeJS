function routeCadastroTiposEndereco(application) {
    application.get('/CadastroTiposEndereco', function(request, response) {
        application.sysAddress.controllers.controlCadastroTiposEndereco.viewCadastroTiposEndereco(application, request, response);
    });
}

module.exports = routeCadastroTiposEndereco;