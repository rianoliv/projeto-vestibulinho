fetch("menu.html")
    .then(resposta => resposta.text())
    .then(html => {
        document.getElementById("menu").innerHTML =html;
    })

function cadastrarAluno() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let curso = document.getElementById("curso");

    let tabela = document.getElementById("alunos-cadastrados");
    let linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${curso.options[curso.selectedIndex].text}</td>
    `;

    tabela.appendChild(linha);

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    curso.selectedIndex = 0;
}