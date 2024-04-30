// Máscara para o campo de telefone
$("#telefone").mask("(99) 9999-99999");

// Array para armazenar os alunos
var alunos = [];

// Função para salvar um novo aluno
function save() {
    var aluno = {
        id: alunos.length + 1, // Definindo um ID único para cada aluno
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('telefone').value,
        curso: document.getElementById('curso').value,
        turno: document.querySelector('input[name="turno"]:checked').value // Obtendo o valor do turno selecionado
    };

    alunos.push(aluno); // Adicionando o aluno ao array

    addNewRow(aluno); // Adicionando uma nova linha na tabela de alunos

    document.getElementById('formAlunos').reset(); // Resetando o formulário após salvar
}

// Função para adicionar uma nova linha na tabela de alunos
function addNewRow(aluno) {
    var tableBody = document.getElementById('alunosTableBody');
    var newRow = tableBody.insertRow();

    // Preenchendo as células com os valores do aluno
    newRow.insertCell().textContent = aluno.id;
    newRow.insertCell().textContent = aluno.nome;
    newRow.insertCell().textContent = aluno.email;
    newRow.insertCell().textContent = aluno.tel;
    newRow.insertCell().textContent = aluno.curso;
    newRow.insertCell().textContent = aluno.turno;
}
