function routePesquisaVias(application) {
    application.get('/PesquisaVias', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaVias.viewPesquisaVias(application, request, response);
    });
}

module.exports = routePesquisaVias;