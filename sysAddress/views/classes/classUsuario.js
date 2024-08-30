class Usuario {
    constructor(idUsuario, nomeUsuario, privilegio, senha, inativo, dataInicio, dataExpiracao, quantidadeConexoes, quantidadeConectado, alterarSenhaPrimeiroLogon, senhaPorTrintaDias) {
        this.idUsuario                 = idUsuario;
        this.nomeUsuario               = nomeUsuario;
        this.privilegio                = privilegio;
        this.senha                     = senha;
        this.inativo                   = inativo;
        this.dataInicio                = dataInicio;
        this.dataExpiracao             = dataExpiracao;
        this.quantidadeConexoes        = quantidadeConexoes;
        this.quantidadeConectado       = quantidadeConectado;
        this.alterarSenhaPrimeiroLogon = alterarSenhaPrimeiroLogon;
        this.senhaPorTrintaDias        = senhaPorTrintaDias;
    }

    // Getters
    getIdUsuario() {
        return this.idUsuario;
    }

    getNomeUsuario() {
        return this.nomeUsuario;
    }

    getPrivilegio() {
        return this.privilegio;
    }

    getSenha() {
        return this.senha;
    }

    getInativo() {
        return this.inativo;
    }

    getDataInicio() {
        return this.dataInicio;
    }

    getDataExpiracao() {
        return this.dataExpiracao;
    }

    getQuantidadeConexoes() {
        return this.quantidadeConexoes;
    }

    getQuantidadeConectado() {
        return this.quantidadeConectado;
    }

    getAlterarSenhaPrimeiroLogon() {
        return this.alterarSenhaPrimeiroLogon;
    }

    getSenhaPorTrintaDias() {
        return this.senhaPorTrintaDias;
    }

    // Setters
    setIdUsuario(idUsuario) {
        this.idUsuario = idUsuario;
    }

    setNomeUsuario(nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    setPrivilegio(privilegio) {
        this.privilegio = privilegio;
    }

    setSenha(senha) {
        this.senha = senha;
    }

    setInativo(inativo) {
        this.inativo = inativo;
    }

    setDataInicio(dataInicio) {
        this.dataInicio = dataInicio;
    }

    setDataExpiracao(dataExpiracao) {
        this.dataExpiracao = dataExpiracao;
    }

    setQuantidadeConexoes(quantidadeConexoes) {
        this.quantidadeConexoes = quantidadeConexoes;
    }

    setQuantidadeConectado(quantidadeConectado) {
        this.quantidadeConectado = quantidadeConectado;
    }

    setAlterarSenhaPrimeiroLogon(alterarSenhaPrimeiroLogon) {
        this.alterarSenhaPrimeiroLogon = alterarSenhaPrimeiroLogon;
    }

    setSenhaPorTrintaDias(senhaPorTrintaDias) {
        this.senhaPorTrintaDias = senhaPorTrintaDias;
    }
}
