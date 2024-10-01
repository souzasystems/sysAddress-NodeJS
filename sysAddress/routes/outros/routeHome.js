function routeHome(application) {
    application.get('/', function(request, response) {
        application.sysAddress.controllers.outros.controlHome.viewHome(application, request, response);
    });

    application.get('/validarUsuarioSenha', function(request, response) {
        application.sysAddress.controllers.outros.controlHome.validarUsuarioSenha(application, request, response);
    });
};

module.exports = routeHome;