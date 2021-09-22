class TARSSideSide extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .end {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        height: 20%;
      }

      .end > div {
        border: 1px solid #333;
      }

      .black {
        background: #000;
        width: 100%;
        height: 20%;
      }

      .black.screen {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: #1ba7e8;
        font-size: 2px;
        overflow: hidden;
        position: relative;
      }

      .black.screen .content {
        margin: 10px;
      }

      .black.screen .content::before {
        content: "";
        width: 100%;
        height: 10px;
        display: block;
        background: #000;
        position: absolute;
        top: 0;
      }

      .black.screen::after {
        content: "";
        width: 100%;
        height: 20%;
        display: block;
        background: #4445;
        position: absolute;
        top: 0;
        z-index: 5;
      }

      .center {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        height: 65%;
      }

      .center > div {
        border: 1px solid #333;
        position: relative;
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.screen = this.shadowRoot.querySelector(".black.screen .content");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TARSSideSide.styles}</style>
    <div class="end">
      <div></div>
      <div></div>
    </div>
    <div class="black screen">
      <div class="content">
      </div>
    </div>
    <div class="center">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="black">
    </div>
    <div class="end">
      <div></div>
      <div></div>
    </div>
    `;
  }
}

customElements.define("tars-side-side", TARSSideSide);
