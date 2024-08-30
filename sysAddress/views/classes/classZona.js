class Zona {
    constructor(idZona, idTipoZona, descricaoZona, inativa, areaMinima, testadaMinima, complementoAreaMinima, identificadorZona) {
        this.idZona                = idZona;
        this.idTipoZona            = idTipoZona;
        this.descricaoZona         = descricaoZona;
        this.inativa               = inativa;
        this.areaMinima            = areaMinima;
        this.testadaMinima         = testadaMinima;
        this.complementoAreaMinima = complementoAreaMinima;
        this.identificadorZona     = identificadorZona;
    }

    // Getters
    getIdZona() {
        return this.idZona;
    }

    getIdTipoZona() {
        return this.idTipoZona;
    }

    getDescricaoZona() {
        return this.descricaoZona;
    }

    getInativa() {
        return this.inativa;
    }

    getAreaMinima() {
        return this.areaMinima;
    }

    getTestadaMinima() {
        return this.testadaMinima;
    }

    getComplementoAreaMinima() {
        return this.complementoAreaMinima;
    }

    getIdentificadorZona() {
        return this.identificadorZona;
    }

    // Setters
    setIdZona(idZona) {
        this.idZona = idZona;
    }

    setIdTipoZona(idTipoZona) {
        this.idTipoZona = idTipoZona;
    }

    setDescricaoZona(descricaoZona) {
        this.descricaoZona = descricaoZona;
    }

    setInativa(inativa) {
        this.inativa = inativa;
    }

    setAreaMinima(areaMinima) {
        this.areaMinima = areaMinima;
    }

    setTestadaMinima(testadaMinima) {
        this.testadaMinima = testadaMinima;
    }

    setComplementoAreaMinima(complementoAreaMinima) {
        this.complementoAreaMinima = complementoAreaMinima;
    }

    setIdentificadorZona(identificadorZona) {
        this.identificadorZona = identificadorZona;
    }
}
