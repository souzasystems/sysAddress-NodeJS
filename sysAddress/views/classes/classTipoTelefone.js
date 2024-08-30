class TipoTelefone {
    constructor(idTipoTelefone, descricaoTipoTelefone, mascaraTelefone) {
        this.idTipoTelefone        = idTipoTelefone;
        this.descricaoTipoTelefone = descricaoTipoTelefone;
        this.mascaraTelefone       = mascaraTelefone;
    }

    // Getters
    getIdTipoTelefone() {
        return this.idTipoTelefone;
    }

    getDescricaoTipoTelefone() {
        return this.descricaoTipoTelefone;
    }

    getMascaraTelefone() {
        return this.mascaraTelefone;
    }

    // Setters
    setIdTipoTelefone(idTipoTelefone) {
        this.idTipoTelefone = idTipoTelefone;
    }

    setDescricaoTipoTelefone(descricaoTipoTelefone) {
        this.descricaoTipoTelefone = descricaoTipoTelefone;
    }

    setMascaraTelefone(mascaraTelefone) {
        this.mascaraTelefone = mascaraTelefone;
    }
}
