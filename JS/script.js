var alunos = []; // Array para armazenar os alunos

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

    addNewRow(aluno); // Chamando a função para adicionar uma nova linha na tabela

    document.getElementById('formAlunos').reset(); // Resetando o formulário após salvar
}

function addNewRow(aluno) {
    var table = document.getElementById('alunosTable');
    var newRow = table.insertRow();

    // Criando as células para cada atributo do aluno
    var cellId = newRow.insertCell();
    var cellNome = newRow.insertCell();
    var cellEmail = newRow.insertCell();
    var cellTel = newRow.insertCell();
    var cellCurso = newRow.insertCell();
    var cellTurno = newRow.insertCell();

    // Preenchendo as células com os valores do aluno
    cellId.textContent = aluno.id;
    cellNome.textContent = aluno.nome;
    cellEmail.textContent = aluno.email;
    cellTel.textContent = aluno.tel;
    cellCurso.textContent = aluno.curso;
    cellTurno.textContent = aluno.turno;
}
