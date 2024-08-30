function routePesquisaEstados(application) {
    application.get('/PesquisaEstados', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaEstados.viewPesquisaEstados(application, request, response);
    });
}

module.exports = routePesquisaEstados;