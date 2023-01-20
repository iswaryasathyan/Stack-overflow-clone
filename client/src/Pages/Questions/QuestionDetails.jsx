import React,{useState} from 'react'
import { Link, useParams ,useNavigate,useLocation} from 'react-router-dom'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upVote from '../../assets/uparrow.png'
import downVote from '../../assets/downarrow.png'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import {useSelector,useDispatch} from 'react-redux'
 import { postAnswer,deleteQuestion ,voteQuestion} from '../../actions/question'

const QuestionDetails = () => {
    const {id}=useParams()
    const questionList=useSelector(state=>state.questionsReducer)
  console.log(questionList)
    // var questionList=[{
    //     _id:'1',
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
    //   _id:'2',
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
   
      const dispatch=useDispatch()
      const User=useSelector((state)=>(state.currentUserReducer))
      const location=useLocation()
       const url='http://localhost:3000'
       const navigate=useNavigate()

    const [Answer,setAnswer]=useState('')
    const handlePostAns=(e,answerLength)=>{
      e.preventDefault()
      if(User===null){
        alert("Login orSignup to answer question")
        navigate('/Auth')
      }else{
        if(Answer ===''){
          alert('Enter an answer before submit')
        }else{
          dispatch(postAnswer({id,noOfAnswers:answerLength+1,answerBody:Answer,userAnswered:User.result.name,userId:User.result._id}))
        }
      }

    }
    const handleShare=()=>{
      copy(url+location.pathname)
      alert('copied url:' +url+location.pathname)

    }
    const handleDelete=()=>{
      dispatch(deleteQuestion(id,navigate))
    }
    const handleUpVote=()=>{
      dispatch(voteQuestion(id,'upVote',User.result._id))
    }

    const handleDownVote=()=>{
      dispatch(voteQuestion(id,'downVote',User.result._id))
    }

  return (
    <div className='question-details-page'>
        {
            questionList.data===null?
        <h1>..Loading</h1>:
        <>
        {
            questionList.data.filter(questions=>questions._id===id).map(questions=>(
                <div key={questions._id}>
                    <section className='question-details-container'>
                        <h1>{questions.questionTitle}</h1>
                        <div className='question-details-container-2'>
                            <div  className='question-votes'>
                              <img src={upVote} alt='upVote'  width="18px" className='votes-icon' onClick={handleUpVote} />
                              <p>{questions.upVote.length-questions.downVote.length}</p>
                              <img src={downVote} alt='downVote' width="18px" className='votes-icon' onClick={handleDownVote} />

                            </div>
                            <div style={{width:"100%"}}>
                              <p className='question-body'>{questions.questionBody}</p>
                              <div className='question-details-tags'>
                                
                             {
                    questions.questionTag.map((tag)=>(
                        <p key={tag}>{tag}</p>
                    ))
                }
                                
                              </div>
                              <div className='question-actions-user'>
                                <div>
                                  <button type='button' onClick={handleShare}>Share</button>
                                  {
                                    User?.result?._id===questions?.userId &&(
                                      <button type='button' onClick={handleDelete}>Delete</button>

                                    )
                                  }
                                  
                                  
                                </div>
                                <p> asked{moment(questions.askedOn).fromNow()}</p>
                                <Link to={`/Users/${questions.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                 <Avatar backgroundColor="orange" px='18px' py='15px'>{questions.userPosted.charAt(0).toUpperCase()}</Avatar>
                                
                                </Link>
                                
                              </div>

                              </div>
                        </div>

                    </section>
                    {
                      questions.noofAnswers!==0 &&
                      <section>
                        
                        <h3>{questions.noOfAnswers}Answers</h3>
                        <DisplayAnswer key={questions._id} question={questions} handleShare={handleShare} />
                       
                      </section>
                    }
                    <section className='post-ans-container'>
                      <h3> Your answer</h3>
                    
                    <form onSubmit={(e)=>handlePostAns(e,questions.answer.length)}>
                      <textarea col="30" row="10" onChange={e=>setAnswer(e.target.value)}></textarea><br/>
                      <input type="submit" className='post-ans-btn' value='Post Your Answer' />
                    </form>
                    </section>
                    <p>Browse other Question tagged
                      {
                        questions.questionTag.map((tag)=>(
                          <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                        ))
                      }or{
                        <Link to='/AskQuestion' style={{textDecoration:"none",color:"#009dff"}}>Ask your own question</Link>
                      }
                    </p>
                </div>
            ))
        }
        </>
        }
    </div>
  )
}

export default QuestionDetails
