const dados = {
    energia: "500 kWh/mês",
    agua: "2000 litros/dia",
    reciclados: "80%"
};

function gerarRelatorio(d) {
    return `
        <p><b>Consumo de Energia:</b> ${d.energia}</p>
        <p><b>Uso de Água:</b> ${d.agua}</p>
        <p><b>Resíduos Reciclados:</b> ${d.reciclados}</p>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("relatorio");
    if (div) {
        div.innerHTML = gerarRelatorio(dados);
    }
});
