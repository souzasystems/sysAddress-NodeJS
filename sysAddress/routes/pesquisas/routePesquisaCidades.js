function routePesquisaCidades (application) {
    application.get('/PesquisaCidades', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaCidades.viewPesquisaCidades(application, request, response);
    });

    application.post('/consultaCidadesPorNome', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaCidades.consultaCidadesPorNome(application, request, response);
    });
}

module.exports = routePesquisaCidades;