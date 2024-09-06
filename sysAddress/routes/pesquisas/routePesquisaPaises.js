function routePesquisaPaises(application) {
    application.get('/PesquisaPaises', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaPaises.viewPesquisaPaises(application, request, response);
    });

    application.post('/consultaPaisesPorNome', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaPaises.consultaPaisesPorNome(application, request, response);
    });
}

module.exports = routePesquisaPaises;