function routePesquisaTiposZona(application) {
    application.get('/PesquisaTiposZona', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaTiposZona.viewPesquisaTiposZona(application, request, response);
    });
}

module.exports = routePesquisaTiposZona;