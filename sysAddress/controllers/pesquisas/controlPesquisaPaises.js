function controlPesquisaPaises(application, request, response) {
    response.render('pesquisas/viewPesquisaPaises', {paises: null});
}

function consultaPaisesPorNome(application, require, response) {
    const dadosPais    = require.body;
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getPaises(dadosPais.inputNomePais, function(error, result) {
        let paisesEncontrados = result[0];

        if (paisesEncontrados.length !== 0) {
            response.render('pesquisas/viewPesquisaPaises', {paises: paisesEncontrados});
        } else {
            response.render('pesquisas/viewPesquisaPaises', {paises: null});
        }
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaPaises: controlPesquisaPaises,
    consultaPaisesPorNome: consultaPaisesPorNome
}