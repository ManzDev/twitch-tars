class TARSFaceMain extends HTMLElement {
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
        color: #1BE820;
        font-size: 2px;
        white-space: pre;
      }

      .black.screen::before {
        content: "";
        width: 100%;
        height: 20%;
        display: block;
        background: #2225;
      }

      .text {
        font-family: Ramabhadra;
        font-weight: bold;
        font-size: 40px;
        color: #b87333b4;
        text-shadow: 0 0 4px #48320B;
        transform-origin: 0 0;
        transform: rotate(-90deg);
        position: absolute;
        bottom: -16px;
        left: 7px;
        line-height: 75%;
      }

      .dots {
        letter-spacing: -5px;
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

  getTerminalText() {
    return `
      Welcome to TARS Corporation (TM) Terminal
      Copyright (C) 2984-2987, TARS Corp. Software
      OS version: 22A1-9166-69

      Initializing...
      ==================================

      Memory Test: 281474976710656B OK

      Auto-Detecting modules ... TARS "H@CK-MODULE" found!

      Searching for devices nearby...
      ==================================

      Please choose an option:

       (1) "Stellar Coffee"
       (2) "Hack the box with S4vitaar"
       (3) "CSS with ManzDev"

       What is your choice: _`;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TARSFaceMain.styles}</style>
    <div class="end">
      <div></div>
      <div></div>
    </div>
    <div class="black screen">
      ${this.getTerminalText()}
    </div>
    <div class="center">
      <div>
        <div class="text">TARS</div>
      </div>
      <div>
        <div class="text dots">⠞⠁⠗⠎</div>
      </div>
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

customElements.define("tars-face-main", TARSFaceMain);
