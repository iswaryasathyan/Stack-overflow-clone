import React from 'react'
import './RightSidebar.css'
import pen from '../../assets/pen.png'
import comment from '../../assets/comments.png'
import images from  '../../assets/images.png'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The overflow blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen"width="18px" />
        <p>Observability is key to the future of software (and your DevOops career)</p>

            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width="18px" />
                <p>Podcast 374:How valuable is your screen name?</p>

            </div>

        </div> 
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen"width="18px" />
                <p>Review question workflows-Final release....</p>

            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width="18px" />
                <p>Please welcome Valued Associcates #958-V2Blast#959-SpencerG</p>

            </div> 
            <div className='right-sidebar-div-2'>
                <img src={images} alt="comment" width="18px" />
                <p>Outdated Answer:accepted answer is now unpinned on Stack Overflow</p>

            </div>

        </div> 
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>38</p>                
                <p>Why was this span flag declinedd,yet question marked as spam</p>

            </div>
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p>What is the best course of action when a user has higher enough rep to .....</p>

            </div> 
            <div className='right-sidebar-div-2'>
                <p>14</p>
                <p>Is a link to the "How to ask" help page auseful comment?</p>

            </div>

        </div>
      
    </div>
  )
}

export default Widget
