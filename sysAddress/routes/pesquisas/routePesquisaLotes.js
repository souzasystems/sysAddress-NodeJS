function routePesquisaLotes(application) {
    application.get('/PesquisaLotes', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaLotes.viewPesquisaLotes(application, request, response);
    });
}

module.exports = routePesquisaLotes;