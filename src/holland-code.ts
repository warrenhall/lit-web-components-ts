import { css, LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

@customElement('my-counter-component')
export class MyCounterComponent extends LitElement {
  static styles = css`
    :host {
      margin: 1rem;
      display: block;
    }

    .click-counter-button {
      border: 1px solid red;
      border-radius: 5px;
      transition: all 0.5s ease;
    }
  `

  @state() count = 0

  @property() name = 'Random Visitor'

  render() {
    return html`
      <button class='click-counter-button' part='button' @click=${() => { this.count += 1 }}>
        This button has been clicked ${this.count} times by ${this.name}
      </button>
    `
  }
}