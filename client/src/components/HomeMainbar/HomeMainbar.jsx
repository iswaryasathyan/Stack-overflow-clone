import React from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'
import {useSelector} from 'react-redux'
   import {questionsReducer} from '../../reducers/questions'

const HomeMainbar = () => {
  const location=useLocation()
const user=1;
const navigate=useNavigate();

  const questionList=useSelector(state=>state.questionsReducer)
  console.log(questionList)
  
//   var questionList=[{
//     _id:1,
//     upVotes:3,
//     downVotes:2,
//     noofAnswers:2,
//     questionTitle:"what is a function?",
//     questionBody:"It meant to be",
//     questionTags:['c','css','java','javascript','html'],
//     userPosted:"ish",
//     askedOn:"jan 1",
//     userId:1,
//     answer:[{
//       answerBody:"Answer",
//       userAnswered:"kk",
//       answeredOn:"Jan 2"
//     }]
//   },
// {
//   _id:2,
//   upVotes:3,
//   downVotes:2,
//   noofAnswers:0,
//   questionTitle:"what is a function?",
//   questionBody:"It meant to be",
//   questionTags:['c','css','java'],
//   userPosted:"ish",
//   askedOn:"jan 1",
//   userId:1,
//   answer:[{
//     answerBody:"Answer",
//     userAnswered:"kk",
//     answeredOn:"jan 2",
//     userID:2
//   }]
// }]


const checkAuth=()=>{
  if(user===null){
    alert("login or signup to ask question")
    navigate('/Auth')
  }else{
    navigate('/AskQuestion')
  }
}
  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname==='/' ? <h1>Top Questions</h1>:<h1>All Questions</h1>
          
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
      questionList.data===null?
      <h1>...Loading</h1>:
      <>
      <p>{questionList.data.length}questions</p>
      <QuestionList questionList={questionList.data} />
      </>
}
      </div>
      
    </div>
  )
}

export default HomeMainbar
