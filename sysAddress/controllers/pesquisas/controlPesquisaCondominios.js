function controlPesquisaCondominios(application, request, response) {
    response.render('pesquisas/viewPesquisaCondominios');
}

module.exports = {
    viewPesquisaCondominios: controlPesquisaCondominios
}