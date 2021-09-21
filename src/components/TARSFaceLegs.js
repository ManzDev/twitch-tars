class TARSFaceLegs extends HTMLElement {
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
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
        width: 100%;
        height: 22%;
      }

      .end > div {
        border: 1px solid #333;
        border-top: 1px solid #aaa;
      }

      .separator {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        height: 8%;
      }

      .separator .block {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
      }

      .separator .block > div {
        border: 1px solid #333;
        border-top: 1px solid #aaa;
        border-bottom: 1px solid #aaa;
      }

      .center {
        display: grid;
        grid-template-rows: 1fr 1fr;
        height: 50%;
      }

      .center .block {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
      }

      .center .block > div {
        border: 1px solid #333;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${TARSFaceLegs.styles}</style>
    <div class="end">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="separator">
      <div class="block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="center">
      <div class="block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="separator">
      <div class="block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="block">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="end">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    `;
  }
}

customElements.define("tars-face-legs", TARSFaceLegs);
