function controlPesquisaBairros(application, request, response) {
    response.render('pesquisas/viewPesquisaBairros');
}

function consultaBairrosPorNome(application, require, response) {
    const dadosBairro  = require.body;
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getBairros(dadosBairro.nomeBairro, dadosBairro.bairroInativo, function(error, result) {
        let bairrosEncontrados = result[0];

        response.json(bairrosEncontrados);
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaBairros: controlPesquisaBairros,
    consultaBairrosPorNome: consultaBairrosPorNome
}
