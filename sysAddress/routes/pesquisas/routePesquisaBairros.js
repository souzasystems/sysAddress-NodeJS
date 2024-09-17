function routePesquisaBairros (application) {
    application.get('/PesquisaBairros', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaBairros.viewPesquisaBairros(application, request, response);
    });

    application.post('/consultaBairrosPorNome', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaBairros.consultaBairrosPorNome(application, request, response);
    });
}

module.exports = routePesquisaBairros;
