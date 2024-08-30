function routePesquisaEstadosCivis(application) {
    application.get('/PesquisaEstadosCivis', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaEstadosCivis.viewPesquisaEstadosCivis(application, request, response);
    });
}

module.exports = routePesquisaEstadosCivis;