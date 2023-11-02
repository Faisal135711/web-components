class MyButton extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const button = document.createElement("button");
    button.innerHTML = this.innerHTML;
    this.shadow.append(this.#createStyle());
    this.shadow.append(button);
    // const button = `
    //   <button>${this.innerHTML}</button>
    // `;
    //
    // this.innerHTML = button;
  }
  attributeChangedCallback() {}
  disconnectedCallback() {}
  #createStyle() {
    const style = document.createElement("style");
    style.innerText = ` 
        button {            
            padding: 0.5rem 2rem;            
            outline: none;            
            background: #000;            
            color: #fff;            
            border: 1px solid #fff;           
            border-radius: 0.25rem;            
            cursor: pointer;        
         }`;
    return style;
  }
}

customElements.define("my-button", MyButton);
