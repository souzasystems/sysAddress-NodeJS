function routePesquisaPaises(application) {
    application.get('/PesquisaPaises', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaPaises.viewPesquisaPaises(application, request, response);
    });
}

module.exports = routePesquisaPaises;