const PHRASES = [
  "Not enought memory",
  "The cake is a lie!",
  "File not found",
  "sudo command not found",
  "setting humor level to 60%",
  "internal error: 418 I'm a teapot",
  "ERROR 404: CSS not found",
  "Kernel panic",
  "Insert your windows installation disc and restart your computer",
  "A problem has been detected and windows has been shut down to prevent damage to your computer",
  "PEBKAC found!!!",
  "Killing humans... Please wait...",
  "H4cker not detected",
  "`rm` deprecated",
  "SQL inyected. Permission granted"
];

class TARSFaceSide extends HTMLElement {
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

      .text {
        font-family: Ramabhadra;
        font-weight: bold;
        font-size: 40px;
        color: #b87333da;
        text-shadow: 0 0 4px #48320B;
        transform-origin: 0 0;
        transform: rotate(-90deg);
        position: absolute;
        bottom: -16px;
        left: 8px;
        line-height: 75%;
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
    setTimeout(() => this.generateFakeLogs(), 50 + ~~(Math.random() * 750));
  }

  generateFakeLogs() {
    const h = ~~(Math.random() * 24);
    const m = ~~(Math.random() * 60);
    const text = PHRASES[~~(Math.random() * PHRASES.length)];
    const phrase = `[${h}:${m}] ${text}<br>`;
    this.screen.innerHTML += phrase;
    const time = 50 + ~~(Math.random() * 500);
    setTimeout(() => this.generateFakeLogs(), time);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TARSFaceSide.styles}</style>
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

customElements.define("tars-face-side", TARSFaceSide);
