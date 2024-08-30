function controlHome(application, require, response) {
    response.render('outros/viewHome', { userSenhaInfos: {} });
}

function validaUsuarioSenha(application, require, response) {
    const dadosUserSenha = require.body;
    const connectionDB   = application.config.dbConnection();
    const dbSysAddress   = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getUsuarioByNome(dadosUserSenha.username, dadosUserSenha.password, function(error, result) {
        let userSenhaInfos = {
            usuarioEncontrado: result[0].length !== 0,
            username: dadosUserSenha.username,
            password: dadosUserSenha.password
        };

        response.json(userSenhaInfos);
    });
}

module.exports = {
    viewHome: controlHome,
    validarUsuarioSenha: validaUsuarioSenha
}