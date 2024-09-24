function routePesquisaTiposEndereco(application) {
    application.get('/PesquisaTiposEndereco', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaTiposEndereco.viewPesquisaTiposEndereco(application, request, response);
    });
}

module.exports = routePesquisaTiposEndereco