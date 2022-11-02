import React from 'react';
import './HomeMainbar.css';
import {  Link , useLocation,useNavigate} from 'react-router-dom';
import AllQuestions from './AllQuestions';
import Questionlist from './Questionlist';
import { useSelector } from 'react-redux';

const HomeMainbar = () => {
// let questionsList = [{
//   id:1,
//   upVotes:3,
//   downVotes:2,
//   noOfAnswers:2,
//   questionTitle:"What is a functional",
//   questionBody:"It meant to be",
//   questionTags:["java","node js","react js","mongodb"],
//   userPosted:"sourav",
//   userId:1,
//   askedOn:"jan 1",
//   answer:[{
//     answerBody:"Answer",
//     userAnswered:'ram',
//     answerdOn:'feb 4',
//     userId:2
//   }]
// },{
//   id:2,
//   upVotes:3,
//   downVotes:2,
//   noOfAnswers:7,
//   questionTitle:"What is a function",
//   questionBody:"It meant to be",
//   questionTags:["javascript","node js","R","Python"],
//   userPosted:"sourav",
//   userId:1,
//   askedOn:"jan 1",
//   answer:[{
//     answerBody:"Answer",
//     userAnswered:'ram',
//     answerdOn:'feb 4',
//     userId:2
//   }]
// },
// {
//   id:3,
//   upVotes:4,
//   downVotes:3,
//   noOfAnswers:0,
//   questionTitle:"What is a function-call",
//   questionBody:"It meant to be",
//   questionTags:["java","c","Python","javascript"],
//   userPosted:"sourav",
//   userId:1,
//   askedOn:"jan 1",
//   answer:[{
//     answerBody:"Answer",
//     userAnswered:'ram',
//     answerdOn:'feb 4',
//     userId:2
//   }]
// }]

const location = useLocation(); 
const User = 12;
const navigate = useNavigate();

const questionsList = useSelector(state => state.questionsReducer)


const checkAuth = () =>{
  if(User === null){
    alert('login or signup to ask a question')
    navigate('/Auth')
  }else{
      navigate('/AskQuestion')
  }
}


  return (
    <div  className='main-bar'>
      <div className='main-bar-header'>
          {
            location.pathname === '/' ? <h1>Top Question</h1> : <h1>All Question</h1>
          }
          <button  onClick={checkAuth}  className='ask-btn' >Ask Question</button>
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading....</h1> :
          <>
          <p>{ questionsList.data.length} questions</p>
          <Questionlist  questionsList = {questionsList.data}/>
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar;
 