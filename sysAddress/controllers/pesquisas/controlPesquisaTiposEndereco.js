function controlPesquisaTiposEndereco(application, require, response) {
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);
    
    dbSysAddress.getTiposEndereco(function(error, result) {
        response.render('pesquisas/viewPesquisaTiposEndereco', {tiposEndereco: result[0]});
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaTiposEndereco: controlPesquisaTiposEndereco
}
