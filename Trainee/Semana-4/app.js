"use strict";
class Tarefa {
    constructor(tituloRecebido, descRecebida) {
        this.titulo = tituloRecebido;
        this.descricao = descRecebida;
        this.dataCriacao = new Date();
    }
    renderizar() {
        const li = document.createElement('li');
        li.classList.add('task-card');
        li.innerHTML = `
            <input type="checkbox" class="check-task">
            <div class="task-info">
                <h3>${this.titulo}</h3>
                <p>${this.descricao || "Sem descrição"}</p>
                <small>Criado em: ${this.dataCriacao.toLocaleString()}</small>
            </div>
        `;
        const checkbox = li.querySelector('.check-task');
        checkbox.addEventListener('change', () => {
            li.classList.toggle('concluida');
        });
        return li;
    }
}
const btnAdd = document.getElementById('addBtn');
const listaUl = document.getElementById('listaTarefas');
btnAdd.addEventListener('click', () => {
    const inputTitulo = document.getElementById('tituloInput');
    const inputDesc = document.getElementById('descInput');
    if (inputTitulo.value.trim() === "") {
        alert("Digite ao menos um título!");
        return;
    }
    const novaTarefa = new Tarefa(inputTitulo.value, inputDesc.value);
    listaUl.appendChild(novaTarefa.renderizar());
    inputTitulo.value = "";
    inputDesc.value = "";
});
//comentário pro pull request
//# sourceMappingURL=app.js.map