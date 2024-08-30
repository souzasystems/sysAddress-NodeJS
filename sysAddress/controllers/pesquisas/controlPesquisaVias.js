function controlPesquisaVias(application, request, response) {
    response.render('pesquisas/viewPesquisaVias');
}

module.exports = {
    viewPesquisaVias: controlPesquisaVias
}