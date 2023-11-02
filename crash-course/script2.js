class WordCount extends HTMLParagraphElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const count = this.#countWords(this.parentNode);

    const span = document.createElement("span");
    span.textContent = "Words = " + count;

    this.shadow.append(span);
  }

  #countWords(node) {
    const text = node.innerText || node.textContent;

    return text
      .trim()
      .split(/\s+/g)
      .filter((e) => e.trim().length > 0).length;
  }
}

customElements.define("word-count", WordCount, { extends: "p" });
