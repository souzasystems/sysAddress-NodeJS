function controlCadastroTiposEndereco(application, require, response) {
    console.log('Hello');
    response.render('cadastros/viewCadastroTiposEndereco', {}, 'C');
}

module.exports = {
    viewConsultaTipoEndereco: controlCadastroTiposEndereco
}