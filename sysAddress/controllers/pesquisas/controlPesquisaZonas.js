function controlPesquisaZonas(application, request, response) {
    response.render('pesquisas/viewPesquisaZonas');
}

module.exports = {
    viewPesquisaZonas: controlPesquisaZonas
}