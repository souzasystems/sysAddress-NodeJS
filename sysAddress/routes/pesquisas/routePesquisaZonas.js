function routePesquisaZonas(application) {
    application.get('/PesquisaZonas', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaZonas.viewPesquisaZonas(application, request, response);
    });
}

module.exports = routePesquisaZonas;