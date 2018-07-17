import React from 'react';
import Question from './Question.js';

export default function TriviaList(props) {
  return (
    <ul>
      { props.questions.map((question, index) => {
          return <Question key={index} question={question} />
        })
      }
    </ul>
  );
}