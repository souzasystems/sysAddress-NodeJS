function controlPesquisaEstadosCivis(application, require, response) {
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getEstadosCivis(function(error, result) {
        response.render('pesquisas/viewPesquisaEstadosCivis', {estadosCivis: result[0]});
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}                              

module.exports = {
    viewPesquisaEstadosCivis: controlPesquisaEstadosCivis
}