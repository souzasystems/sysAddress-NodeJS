function routePesquisaQuadras(application) {
    application.get('/PesquisaQuadras', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaQuadras.viewPesquisaQuadras(application, request, response);
    });
}

module.exports = routePesquisaQuadras;