const template = document.createElement("template");
template.innerHTML = `
  <div style="border: 1px solid black; display: inline; padding: 1rem;">
    <img />
    <slot name="name"></slot>
    <slot name="email"></slot>
  </div>
`;

class Image extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.append(template.content.cloneNode(true));
    console.log(this.shadow.querySelector("img"));
    this.shadow.querySelector("img").src = this.getAttribute("val");
  }
}

customElements.define("image-tag", Image);
