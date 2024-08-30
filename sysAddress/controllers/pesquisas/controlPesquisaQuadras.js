function controlPesquisaQuadras(application, request, response) {
    response.render('pesquisas/viewPesquisaQuadras');
}

module.exports = {
    viewPesquisaQuadras: controlPesquisaQuadras
}