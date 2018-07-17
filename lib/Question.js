import React, { Component } from 'react';

export default class Question extends Component {
  constructor() {
    super();

    this.state = {
      showAnswer: false
    }

    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  toggleAnswer() {
    this.setState({
      showAnswer: !this.state.showAnswer
    });
  }

  render() {
    return (
      <li onClick={this.toggleAnswer}>
        <p>
          { this.state.showAnswer ? ' - ' : ' + ' }
          { this.props.question.title }
          { this.state.showAnswer && <span>{this.props.question.correct_answer}</span>}
        </p>
      </li>
    );
  }
}