function routePesquisaTiposEndereco(application) {
    console.log('Olá.');
    application.get('/PesquisaTiposEndereco', function(request, response) {
        application.sysAddress.controllers.pesquisas.controlPesquisaTiposEndereco.viewPesquisaTiposEndereco(application, request, response);
    });
}
/*
function routeInsereTipoEndereco(application) {
    application.get('/InsereTipoEndereco', function (request, response, opcaoSel) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewInsereTipoEndereco(application, request, response, opcaoSel);
    });
}

function routeAlteraTipoEndereco(application) {
    application.get('/AlteraTipoEndereco', function (request, response, tipoEndereco, opcaoSel) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewAlteraTipoEndereco(application, request, response, tipoEndereco, opcaoSel);
    });
}

function routeExcluiTipoEndereco(application) {
    application.get('/ExcluiTipoEndereco', function (request, response, tipoEndereco, opcaoSel) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewExcluiTipoEndereco(application, request, response, tipoEndereco, opcaoSel);
    });
}
*/
function routeConsultaTipoEndereco(application) {
    application.get('/ConsultaTipoEndereco', function (request, response) {
        application.sysAddress.controllers.cadastros.controlCadastroTiposEndereco.viewConsultaTipoEndereco(application, request, response, idTipoEndereco, opcaoSel);
    });
}

module.exports = {
    routePesquisaTiposEndereco: routePesquisaTiposEndereco,
    //routeInsereTipoEndereco: routeInsereTipoEndereco,
    //routeAlteraTipoEndereco: routeAlteraTipoEndereco,
    //routeExcluiTipoEndereco: routeExcluiTipoEndereco,
    routeConsultaTipoEndereco: routeConsultaTipoEndereco
}