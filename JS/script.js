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

    // Email
    var cell = newRow.insertCell();
    cell.textContent = aluno.email;
    cell.className = "d-none d-md-table-cell";

    // Telefone
    var cell = newRow.insertCell();
    cell.textContent = aluno.tel;
    cell.className = "d-none d-md-table-cell";

    //Curso
    var cell = newRow.insertCell();
    cell.textContent = aluno.curso;
    cell.className = "d-none d-md-table-cell";
    

    //Turno
    var cell = newRow.insertCell();
    cell.textContent = aluno.turno;
    cell.className = "d-none d-md-table-cell";

}
