function routePesquisaLogradouros(application) {
    application.get('/PesquisaLogradouros', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaLogradouros.viewPesquisaLogradouros(application, request, response);
    });
}

module.exports = routePesquisaLogradouros;