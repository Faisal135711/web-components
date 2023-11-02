const template = document.createElement("template");
template.innerHTML = `
    <div>
        <button class="incrementBtn">+</button>
        <input type="text" value="0" />
        <button class="decrementBtn">-</button>
    </div>
`;

class Counter extends HTMLElement {
  constructor() {
    super();

    console.log("hello");

    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadow.append(template.content.cloneNode(true));
    this.shadow
      .querySelector(".incrementBtn")
      .addEventListener("click", this.increment.bind(this));
    this.shadow
      .querySelector(".decrementBtn")
      .addEventListener("click", this.decrement.bind(this));
  }

  increment(event) {
    this.shadow.querySelector("input").value++;
  }

  decrement(event) {
    this.shadow.querySelector("input").value--;
  }
}

customElements.define("counter-component", Counter);
