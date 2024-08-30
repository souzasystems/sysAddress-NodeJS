function routePesquisaCondominios (application) {
    application.get('/PesquisaCondominios', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaCondominios.viewPesquisaCondominios(application, request, response);
    });
}

module.exports = routePesquisaCondominios;