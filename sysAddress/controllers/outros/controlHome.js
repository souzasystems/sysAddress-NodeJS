function controlHome(application, request, response) {
    response.render('outros/viewHome', { userSenhaInfos: {} });
}

function validaUsuarioSenha(application, request, response) {
    const dadosUserSenha = request.query;
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);    

    dbSysAddress.getUsuarioByNome(dadosUserSenha.nomeUsuario, dadosUserSenha.senha, function(error, result) {
        let userSenhaInfos = {
            usuarioEncontrado: result[0].length !== 0,
            username: dadosUserSenha.nomeUsuario,
            password: dadosUserSenha.senha
        };

        response.json(userSenhaInfos);
    });
}

module.exports = {
    viewHome: controlHome,
    validarUsuarioSenha: validaUsuarioSenha
}