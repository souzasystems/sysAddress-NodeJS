function controlPesquisaEstados(application, request, response) {
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);
 
    dbSysAddress.getEstados(function(error, result) {    
        response.render('pesquisas/viewPesquisaEstados', {estados: result[0]});
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaEstados: controlPesquisaEstados
}