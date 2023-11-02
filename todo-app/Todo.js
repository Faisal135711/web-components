const todoTemplate = document.createElement("template");

todoTemplate.innerHTML = `
    <label>Todo: </label>
    <input type="text" />
`;

class Todo extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.append(todoTemplate.content.cloneNode(true));
  }

  connectedCallback() {}
}

customElements.define("todo-item", Todo);
