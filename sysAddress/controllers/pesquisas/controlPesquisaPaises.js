function controlPesquisaPaises(application, request, response) {
    response.render('pesquisas/viewPesquisaPaises');
}

function consultaPaisesPorNome(application, require, response) {
    const dadosPais    = require.body;
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getPaises(dadosPais.nomePais, dadosPais.paisInativo, function(error, result) {
        let paisesEncontrados = result[0];

        response.json(paisesEncontrados);
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaPaises: controlPesquisaPaises,
    consultaPaisesPorNome: consultaPaisesPorNome
}