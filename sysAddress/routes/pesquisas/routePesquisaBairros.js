function routePesquisaBairros (application) {
    application.get('/PesquisaBairros', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaBairros.viewPesquisaBairros(application, request, response);
    });
}

module.exports = routePesquisaBairros;
