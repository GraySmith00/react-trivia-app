import React, { Component } from 'react';
import { categories } from './api.js';
import TriviaList from './TriviaList.js';
import Controls from './Controls.js';

export default class App extends Component {
  constructor () {
    super();

    this.state = {
      triviaQuestions: [], 
      selectedLimit: 3,
      selectedCategory: 'Geography'
    }

    this.filterQuestions = this.filterQuestions.bind(this);
    this.triviaQuestionsSubset = this.triviaQuestionsSubset.bind(this);
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=500')
      .then(response => response.json())
      .then(questions => {
        this.setState({
          triviaQuestions: questions.results
        })
      })
      .catch(error => {
        throw new Error(error);
      });
  }

  triviaQuestionsSubset() {
    return this.state.triviaQuestions.filter(question => {
      return question.category === this.state.selectedCategory;
    }).slice(0, this.state.selectedLimit);
  }

  filterQuestions(filters) {
    this.setState({
      selectedLimit: filters.userInputLimit,
      selectedCategory: filters.userInputCategory
    });
  }

  render () {
    return (
      <div>
        <header>
          <h1>Trivia!</h1>
          <Controls
            filterQuestions={this.filterQuestions}
            categories={categories}
            selectedCategory={this.state.selectedCategory}
            selectedLimit={this.state.selectedLimit}
          />
        </header>
        <TriviaList questions={this.triviaQuestionsSubset()} />
      </div>
    )
  }
}