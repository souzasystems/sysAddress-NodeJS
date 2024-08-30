function routePesquisaCidades (application) {
    application.get('/PesquisaCidades', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaCidades.viewPesquisaCidades(application, request, response);
    });
}

module.exports = routePesquisaCidades;