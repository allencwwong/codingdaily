import { useState } from "react";
export const Day8= () => {
    const QUESTIONS = [
        {
          question: "What is 2*(4+4)?",
          answers: ["2", "4", "8", "16"],
          correct: 3,
        },
        {
          question: "What is 9*9?",
          answers: ["18", "81", "80", "79"],
          correct: 1,
        },
        {
          question: "Who was the first president of the United States?",
          answers: [
            "George Washington",
            "John Adams",
            "John Quincy Adams",
            "Thomas Jefferson",
          ],
          correct: 0,
        },
        {
          question: "What state is Philadelphia in?",
          answers: [
            "Commonwealth of Pennsylvania",
            "New Jersey",
            "New York",
            "Massachusetts",
          ],
          correct: 0,
        },
        {
          question: "What are the two major political parties in the United States?",
          answers: [
            "Democratic Party & Republican Party",
            "Green Party & Red Party",
            "Bull Party & Moose Party",
            "Hamilton Party & Burr Party",
          ],
          correct: 0,
        },
      ];

      // loop thru qs 
      // render question 
      // set state to keep ans and score 
      // handleclick ans
      // end of loop display score
    const [score,setScore] = useState({
        q: 0,
        ans: [],
        correct: 0
    })

    const handleClickAns = (e)=>{
        score.ans.push(e.target.value)
        const updatedScore = {
            q: score.q + 1,
            ans: score.ans
        }
        console.log(e.target.value, QUESTIONS[score.q].correct.toString())
        if(e.target.value === QUESTIONS[score.q].correct.toString()){
            updatedScore.correct = score.correct+1
        }else{
            updatedScore.correct = score.correct
        }
        setScore(updatedScore)
    }

    const handleClickNext = ()=>{
        setScore({...score,q:score.q+1})
    }

    const handleClickPrev = ()=>{
        setScore({...score,q:score.q-1})
    }

    if(score.q < QUESTIONS.length){
        return (
          <>
                {JSON.stringify(score)}
                <div>{QUESTIONS[score.q].question}</div>
                {
                    QUESTIONS[score.q].answers.map((a,idx)=>(
                        <button onClick={handleClickAns} style={{display: 'block',margin: '0 auto'}} value={idx}>{a}</button>
                    ))
                }
                <div>
                    { score.q < QUESTIONS.length-1 ? <button onClick={handleClickNext}>next</button> : null }
                    { score.q > 1 ?  <button onClick={handleClickPrev}>prev</button> : null }
                </div>
          </>
        );
    }
    return (<div>You answered: {`${score.correct}/${QUESTIONS.length}`} correct!</div>)
}