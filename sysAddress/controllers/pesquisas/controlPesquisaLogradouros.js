function controlPesquisaLogradouros(application, request, response) {
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getLogradouros(function(error, result) {
        response.render('pesquisas/viewPesquisaLogradouros', {logradouros: result[0]});
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaLogradouros: controlPesquisaLogradouros
}