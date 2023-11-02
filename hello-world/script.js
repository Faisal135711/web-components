class TextMessage extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.innerHTML = `
        <span>${this.innerHTML}</span>
    `;
    this.shadow.querySelector("span").style.color = this.getAttribute("color");
  }

  connectedCallback() {}
}

customElements.define("text-message", TextMessage);
