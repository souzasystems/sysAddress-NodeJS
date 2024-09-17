function strZeros(campoStr, quantZeros) {
    return String(campoStr).padStart(quantZeros, '0');
}

function habilitaDesabilitaBotoes(opcaoSel) {
    switch (opcaoSel) {
        case 'I':
        case 'A':
            console.log('INSERÇÃO OU ALTERAÇÃO');
            document.getElementById('btnInserir').disabled = true;
            document.getElementById('btnAlterar').disabled = true;
            document.getElementById('btnExcluir').disabled = true;
            document.getElementById('btnSalvar').disabled = false;
            break;
        case 'C':
            console.log('CONSULTA');
            document.getElementById('btnInserir').disabled = false;
            document.getElementById('btnAlterar').disabled = false;
            document.getElementById('btnExcluir').disabled = false;
            document.getElementById('btnSalvar').disabled = true;
            break;
    }
}