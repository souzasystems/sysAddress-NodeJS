function controlPesquisaTiposTelefone(application, require, response) {
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);
    
    dbSysAddress.getTiposTelefone(function(error, result) {
        response.render('pesquisas/viewPesquisaTiposTelefone', {tiposTelefone: result[0]});
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaTiposTelefone: controlPesquisaTiposTelefone
}