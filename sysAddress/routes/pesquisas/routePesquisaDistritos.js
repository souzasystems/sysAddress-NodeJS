function routePesquisaDistritos (application) {
    application.get('/PesquisaDistritos', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaDistritos.viewPesquisaDistritos(application, request, response);
    });
}

module.exports = routePesquisaDistritos;