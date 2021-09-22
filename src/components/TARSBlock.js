import "./TARSFaceLegs.js";
import "./TARSFaceMain.js";
import "./TARSFaceSide.js";
import "./TARSSideSide.js";

class TARSBlock extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 100px;
        --height: var(--width);
        --offset: 600px;

        width: var(--width);
        height: var(--height);
        display: block;
        position: relative;
        perspective: 8000px;
        transform-style: preserve-3d;
        /* transform: rotateX(15deg) rotateY(15deg); */
      }

      .face-1, .face-2, .face-5, .face-6 {
        --height: var(--offset);
      }

      .face {
        width: var(--width);
        height: var(--height);
        position: absolute;
      }

      /* right face */
      .face-1 {
        transform-origin: 100% 0%;
        transform: rotateY(-90deg);
        background: #2C2B29;
      }

      /* left face */
      .face-2 {
        transform-origin: 0% 0%;
        transform: rotateY(90deg);
        background: #2C2B29;
      }

      /* bottom face */
      .face-3 {
        transform-origin: 100% 100%;
        transform: translateY(calc(var(--offset) - var(--width))) rotateX(90deg);
        background: #272727;
      }

      /* top face */
      .face-4 {
        transform-origin: 100% 0;
        transform: rotateX(-90deg);
        background: #aaa;
      }

      /* front face */
      .face-5 {
        background: #504C4B;
      }

      /* back face */
      .face-6 {
        transform: translateZ(calc(var(--width) * -1));
        transform-origin: 100% 100%;
        background: #444;
      }

      .face-1::after,
      .face-2::after,
      .face-5::after,
      .face-6::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, #fff3, #0003);
        position: absolute;
        top: 0;
      }
    `;
  }

  connectedCallback() {
    this.type = this.getAttribute("type") ?? "legs";
    this.render();
  }

  getFace() {
    const OPTIONS = {
      legs: "<tars-face-legs></tars-face-legs>",
      main: "<tars-face-main></tars-face-main>",
      side: "<tars-face-side></tars-face-side>"
    };

    return OPTIONS[this.type];
  }

  getSide() {
    return (this.type === "main" || this.type === "side") ? "<tars-side-side></tars-side-side>" : "";
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TARSBlock.styles}</style>
    <div class="face face-1">${this.getSide()}</div>
    <div class="face face-2">${this.getSide()}</div>
    <div class="face face-3 bottom"></div>
    <div class="face face-4 top"></div>
    <div class="face face-5 front">${this.getFace()}</div>
    <div class="face face-6"></div>
    `;
  }
}

customElements.define("tars-block", TARSBlock);
