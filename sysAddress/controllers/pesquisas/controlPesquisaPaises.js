function controlPesquisaPaises(application, request, response) {
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);
 
    dbSysAddress.getPaises(function(error, result) {    
        response.render('pesquisas/viewPesquisaPaises', {paises: result[0]});
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaPaises: controlPesquisaPaises

}