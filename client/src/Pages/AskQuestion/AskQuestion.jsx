import React,{useState} from 'react'
import './AskQuestion.css'
import {askQuestion} from '../../actions/question'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const AskQuestion = () => {
    const [questionTitle,setQuestionTitle]=useState('')
    const [questionBody,setQuestionBody]=useState('')
    const [questionTag,setQuestionTag]=useState('')
    const dispatch=useDispatch()
    const User=useSelector((state)=>(state.currentUserReducer))
    const navigate=useNavigate()
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     // console.log({questionTitle,questionBody,questionTag})

    //     dispatch(askQuestion({questionTitle,questionBody,questionTag,userPosted:User.result.name},navigate))

    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({ questionTitle, questionBody, questionTags})
        dispatch(askQuestion({ questionTitle, questionBody, questionTag, userPosted: User.result.name,userId:User?.result?._id }, navigate))
    }
    const handleEnter=(e)=>{
        if (e.key==='Enter'){
            setQuestionBody(questionBody+"/n")
        }
    }
  return (
    <div className='ask-question'>
        <div className='ask-ques-container'>
            <h1>Ask a public question</h1>
            <form onSubmit={handleSubmit}>
                <div className='ask-form-container'>
                    <label htmlFor="ask-ques-title">
                        <h4>Title</h4>
                        <p>Be specific and imagine you are asking</p>
                        <input type="text" id='ask-ques-title' placeholder='eg.Is there an R function for find' onChange={(e)=>{setQuestionTitle(e.target.value)}} />
                    
                    </label>
                    <label htmlFor="ask-ques-body">
                        <h4>Body</h4>
                        <p>Include all information</p>
                        <textarea col="30" row="10" id='ask-ques-body ' onChange={(e)=>{setQuestionBody(e.target.value)}}  onKeyPress={handleEnter}></textarea>
                                          
                    </label>
                    <label htmlFor="ask-ques-tags">
                        <h4>Tags</h4>
                        <p>Add upto 5 tags to describe</p>
                        <input type="text" id='ask-ques-tags' placeholder='eg(.xml type input)' onChange={(e)=>{setQuestionTag(e.target.value.split(" "))}} />
                    
                    </label>
                </div>
                <input type="submit" value='review your question' className='review-btn' />
            </form>
        </div>
      
    </div>
  )
}

export default AskQuestion
