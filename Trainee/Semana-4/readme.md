## 🚀 A Entrega da Semana

Aqui você colocará em prática o que aprendeu.

### 📝 Descrição do desafio

Sua missão é desenvolver o **iTask Manager**. O app deve permitir que o usuário gerencie suas atividades diárias com foco em organização e feedback visual.

### Funcionalidades Obrigatórias:

1. **Criação de Tarefas:**
    - Um campo para o **Título** da tarefa.
    - Um campo para a **Descrição** (opcional ou obrigatória).
    - Ao clicar no botão "Adicionar", uma nova instância da classe `Tarefa` deve ser criada.
2. **Exibição Inteligente:**
    - Cada tarefa no site deve mostrar automaticamente a **data e o horário exato** em que foi criada (use o `new Date()` dentro do constructor da classe).
3. **Controle de Status:**
    - Cada item da lista deve ter um `checkbox`.
    - **Feedback Visual:** Quando o checkbox for marcado, o estilo da tarefa deve mudar imediatamente. Você pode escolher entre: aplicar um risco no texto (`text-decoration: line-through`), mudar a cor de fundo do card ou diminuir a opacidade.
4. **Arquitetura POO:**
    - Você **deve** usar pelo menos uma classe (ex: `Tarefa`) para representar os dados.
    - A classe deve conter o método que gera o elemento HTML (o `renderizar()`) ou uma classe separada de `App` para gerenciar a lista de objetos.

---

## 🛠️ Especificações Técnicas

- **Linguagem:** TypeScript (TS).
- **Compilação:** O arquivo `.js` final deve ser gerado através do comando `tsc`. Não edite o arquivo JS manualmente!

[**Configurando o Ambiente (Compilação Manual)**
](https://www.notion.so/Configurando-o-Ambiente-Compila-o-Manual-310c39c4674680d6aa2bc70ae1807037?pvs=21)

- **Estrutura Mínima de Arquivos:**
    - `index.html`: Estrutura do app.
    - `style.css`: Toda a estilização e classes de "concluído".
    - `app.ts`: Toda a lógica em TypeScript.
- **Versionamento:**
    - Repositório novo e público no **GitHub**.
    - Seguir o **Gitflow** (branches `main` e `desenvolvimento`).
    - **Commits Padronizados:** Use prefixos como `feat:`, `fix:`, `style:` ou `docs:`.

### ✅ Critérios de aceite

Para que sua entrega seja aprovada, ela deve:

- **Funcionalidade:** Consigo adicionar múltiplas tarefas sem que uma sobrescreva a outra?
- **Data/Hora:** O horário de criação está aparecendo corretamente em cada tarefa?
- **POO:** O código utiliza `class` e `constructor` para gerenciar os dados da tarefa?
- **Feedback Visual:** O CSS muda visivelmente quando a tarefa é marcada como "feita"?
- **Git:** O histórico de commits está organizado e as branches seguem o padrão discutido?
- (É normal nesse momento que a lista das tarefas reinicie ao atualizar a página)

Ferramentas utilizadas: HTML, CSS, JS, TS, JSON, NODE.
