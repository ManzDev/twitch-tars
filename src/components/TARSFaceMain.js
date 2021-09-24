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
        z-index: 1;
        position: relative;
      }

      .black.screen > p {
        transform: translate(0, 4px);
        margin: 0;
        padding: 0;
      }

      .black.screen::before {
        content: "";
        width: 100%;
        height: 20%;
        display: block;
        background: #222a;
        z-index: 2;
        position: absolute;
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

      .joke {
        background: #9CBEAB;
        width: 5px;
        height: 5px;
        position: absolute;
        top: 4px;
        left: 2px;
        opacity: 0;
        transition: opacity: 0.1s;
      }

      .joke.on {
        opacity: 1;
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
    return /* html */`
      <div class="joke"></div>
      <p>
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

        What is your choice: _
      </p>`;
  }

  connectedCallback() {
    this.render();
    const time = ~~(Math.random() * 5000);
    setTimeout(() => this.enableJoke(), time);
  }

  enableJoke() {
    const joke = this.shadowRoot.querySelector(".joke");
    joke.classList.add("on");
    setTimeout(() => joke.classList.remove("on"), 2000);
    const time = 5000 + ~~(Math.random() * 30000);
    setTimeout(() => this.enableJoke(), time);
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
