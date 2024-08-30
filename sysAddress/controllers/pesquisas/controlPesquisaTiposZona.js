function controlPesquisaTiposZona(application, request, response) {
    response.render('pesquisas/viewPesquisaTiposZona');
}

module.exports = {
    viewPesquisaTiposZona: controlPesquisaTiposZona
}