import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionList}) => {
  return (
    <>
    
       { 
       questionList.map((questions)=>(
            <Questions questions={questions} key={questions._id} />
       )
    

        )
    }
      
    </>
  )
}

export default QuestionList
