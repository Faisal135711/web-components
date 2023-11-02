const template = document.createElement("template");

template.innerHTML = `
<style>
    div {
        display: flex;
        align-items: center;
        padding: 1rem;
        border: 1px solid black;
    }
    label {
        font-family: Arial;
        color: green;
        font-weight: 600;
    }
    span {
        margin-left: auto;
    }
</style>

<div>
    <input type="checkbox" />
    <label>
        <slot></slot>
    </label>
    <span>
        <slot name="name"></slot>
    </span>
</div>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.append(template.content.cloneNode(true));
    this.checkbox = this.shadow.querySelector("input");
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") {
      this.#updateChecked(newValue);
    }
  }

  #updateChecked(value) {
    this.checkbox.checked = value === "true" ? true : false;
  }
}

customElements.define("todo-item", Todo);
