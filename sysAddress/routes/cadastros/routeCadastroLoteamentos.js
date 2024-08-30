function routePesquisaLoteamentos(application) {
    application.get('/PesquisaLoteamentos', function(request, response) {
        application.sysAddress.controllers.controlPesquisaLoteamentos.viewPesquisaLoteamentos(application, request, response);
    });
}

module.exports = routePesquisaLoteamentos;