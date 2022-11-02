import React from 'react';
import AllQuestions from './AllQuestions';

const Questionlist = ({questionsList }) => {
  return (
    <>
     {
        questionsList.map((question ) => (
            <AllQuestions  question = {question} key={question.id}/>
           ))
     }
    </>
  )
}

export default Questionlist