import React from 'react';
import comment from '../../assets/message-icon.svg';
import pen from '../../assets/pen-icon.svg';
import blacklogo from '../../assets/stack-overflow.png'
 
const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Q&A Blog</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
           <img src={pen} alt="pen"  width='18'/>
            <p>Obervability is key to the future of <br />  software(and your  DevOps career)</p>    
            </div> 
            <div className='right-sidebar-div-2'>
           <img src={pen} alt="pen"  width='18'/>
            <p>Podcast 374: How valuable is your screen <br /> name?</p>    
             </div> 
        </div>
        <h4> Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
           <img src={comment} alt="comment"  width='18'/>
            <p>Review queue workflows-Final release....</p>    
            </div> 
            <div className='right-sidebar-div-2'>
           <img src={comment} alt="comment"  width='18'/>
            <p>Please welcome Valued Associates:#958 <br /> -V2Blast #959 -SpencerG </p>    
             </div> 
             <div className='right-sidebar-div-2'>
           <img src={blacklogo} alt="blacklogo"  width='18'/>
            <p>Outdated Answers: accepted answer is <br /> now unpinned in Stack Overflow </p>    
             </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
           <div className='right-sidebar-div-2'>
            <p>38</p>
            <p>Why was this spam flag declined , yet <br /> the question marked as spam?</p>    
            </div> 
            <div className='right-sidebar-div-2'>
                <p>20</p>
            <p>What is the best course of action when <br /> a user has high enough rep to..</p>    
             </div> 
             <div className='right-sidebar-div-2'>
                <p>14</p>
            <p>is a link to the "How to ask" help page a useful comment?</p>    
             </div> 
        </div>
        
    </div>
  )
}

export default Widget