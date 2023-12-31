function decimalParaBinario(decimal){
    return parseInt(decimal).toString(2);
}

function decimalParaHexadecimal(decimal) {
    return parseInt(decimal).toString(16).toUpperCase();
}

function binarioParaDecimal(binario) {
    var decimal = 0;
    var posicao = 0;

    while (binario > 0) {
        var digito = binario % 10;
        decimal += digito * Math.pow(2, posicao);
        binario = Math.floor(binario / 10);
        posicao++;
    }

    return decimal;
}

function hexadecimalParaDecimal(hexadecimal) {
    return parseInt(hexadecimal, 16);
}

function copiarRespostaP(componente){
    var resultadoCopiado = document.getElementById(componente).textContent.split(':')[1].trim();
    navigator.clipboard.writeText(resultadoCopiado);
}

function copiarRespostaInput(componente){
    var copiarResultado = document.getElementById(componente).value;
    navigator.clipboard.writeText(copiarResultado);
}
