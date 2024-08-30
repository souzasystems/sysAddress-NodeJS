function routePesquisaTiposTelefone(application) {   
     application.get('/PesquisaTiposTelefone', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaTiposTelefone.viewPesquisaTiposTelefone(application, request, response);
     });
}

module.exports = routePesquisaTiposTelefone;