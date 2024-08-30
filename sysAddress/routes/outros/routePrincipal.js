function routePrincipal(application) {
    application.get('/TelaInicial', function(request, response) {
        application.sysAddress.controllers.outros.controlPrincipal.viewPrincipal(application, request, response);
    });
}

module.exports =  routePrincipal;