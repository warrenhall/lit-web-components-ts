import { css, LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import hollandData from '../data/holland-code.json';

type HollandQuestion = {
  slug: string;
  question: string;
  small_image: string;
  medium_image: string;
  large_image: string;
  code: string;
}

type HollandData = {
  slug: string;
  questions: HollandQuestion[];
}
type answerData = {
  question: string;
  answer: string | null;
}

@customElement('my-counter-component')
export class MyCounterComponent extends LitElement {
  static styles = css`
    :host {
      margin: 1rem;
      width:100%;
      font-family: sans-serif;
    }
    h3,p {
      text-align: center;
    }
    .button-container {
      display: flex;
      justify-content: center;
    }
    button {
      margin: 1rem;
      padding: 1rem;
      border: 1px solid #333;
      border-radius: 5px;
      background: aliceblue;
      cursor: pointer;
      font-size: 1rem;
      font-weight: bold;
      color: #333;
    }
  `
  @state() hollandData = hollandData as HollandData;
  @state() currentQuestion = 0
  @state() answeredQuestions: answerData[] = [];

  private nextQuestion(e: Event) {
    const { target } = e
    if (target) console.log((target as HTMLButtonElement).textContent);
    const answerData =
    {
      question: this.hollandData.questions[this.currentQuestion].question,
      answer: (target as HTMLButtonElement).textContent
    }
    this.answeredQuestions.push(answerData)
    if (hollandData.questions.length - 1 !== this.currentQuestion) {
      this.currentQuestion++
    } else {
      console.log(this.answeredQuestions)
    }

  }


  render() {
    return html`
    <h3>Holland Code Questions</h3>
    <p>${hollandData.questions[this.currentQuestion].question}</p>
    <div class="button-container">
      <button @click="${this.nextQuestion}">Me</button>
      <button @click="${this.nextQuestion}">Not Me</button>
  </div>

    `
  }
}