function controlCadastroTiposEndereco(application, require, response) {
    response.render('cadastros/viewCadastroTiposEndereco');
}

module.exports = {
    viewCadastroTiposEndereco: controlCadastroTiposEndereco
}