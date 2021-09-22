import "./TARSBlock.js";

class TARSRobot extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      .tars {
        width: 400px;
        display: flex;
        justify-content: center;
        transform: rotateY(20deg);
        transform-style: preserve-3d;
        perspective: 8000px;
        gap: 4px;
      }

      tars-block {
        height: 600px;
      }

      tars-block:nth-child(1) { z-index: 4; }
      tars-block:nth-child(2) { z-index: 3; }
      tars-block:nth-child(3) { z-index: 2; }
      tars-block:nth-child(4) { z-index: 1; }

      /* Walk animation */
      :host(.walk) tars-block {
        transform-origin: 100% 50%;
        animation: walk 1s cubic-bezier(0.6, 0, 0.4, 1) infinite alternate;
      }

      :host(.walk) tars-block:nth-child(2),
      :host(.walk) tars-block:nth-child(3) {
        animation-direction: alternate-reverse;
      }

      @keyframes walk {
        0% { transform: rotateX(15deg); }
        100% { transform: rotateX(-15deg); }
      }

      /* Run animation */
      :host(.run) tars-block {
        transform-origin: 100% 20%;
        animation: run 2s ease-in-out infinite alternate;
      }

      :host(.run) tars-block:nth-child(1) {
        animation-delay: 0s;
      }

      :host(.run) tars-block:nth-child(2) {
        animation-delay: 0.5s;
      }

      :host(.run) tars-block:nth-child(3) {
        animation-delay: 1s;
      }

      :host(.run) tars-block:nth-child(4) {
        animation-delay: 1.5s;
      }

      @keyframes run {
        0%, 100% { transform: rotateX(0); }
        33% { transform: rotateX(15deg); }
        66% { transform: rotateX(-15deg); }
      }

      /* Spin Animation */
      :host(.spin) .tars {
        animation: spin 5s linear infinite;
      }

      @keyframes spin {
        0% { transform: rotateY(0); }
        100% { transform: rotateY(360deg);}
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TARSRobot.styles}</style>
    <div class="tars">
      <tars-block class="block-1" type="legs"></tars-block>
      <tars-block class="block-2" type="main"></tars-block>
      <tars-block class="block-3" type="side"></tars-block>
      <tars-block class="block-4" type="legs"></tars-block>
    </div>`;
  }
}

customElements.define("tars-robot", TARSRobot);
