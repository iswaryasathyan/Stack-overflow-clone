import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Questions = ({questions}) => {
  return (
    <div className='display-question-container'>
        
         <div className='display-votes-ans'>
            <p>{questions.upVote.length-questions.downVote.length}</p>
            <p>votes</p>
        </div>  
        <div className='display-votes-ans'>
            <p>{questions.nofAnswers}</p>
            <p>answers</p>
        </div> 
        <div className='display-question-details'>
            <Link to={`/Questions/${questions._id}`} className='question-title-link'>
                {questions.questionTitle}
            </Link>
        </div>
        <div className='display-tags-time'>
            <div className='display-tags'>
                {
                    questions.questionTag.map((tag)=>(
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
            <p className='display-time'>
                asked {moment(questions.askedOn).fromNow()} {questions.userPosted}
            </p>
        </div>
     </div> 

  )
}

export default Questions
