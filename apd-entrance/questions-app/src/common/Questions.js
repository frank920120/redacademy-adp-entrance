import React, { Component } from 'react';
import Score from './Score';

class Questions extends Component{
    constructor(props){
        super(props);

        this.state={
            isActive:[true,false,false],
            isClickAnswer:false,
            score:0,
            finalScore:0,
            isFinshQuiz:false
        }

    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.calScore = this.calScore.bind(this);

    }



calScore(){

    let scoreVal= Math.round(this.state.score+100/3)
    if(scoreVal===99){

        scoreVal = 100;
    }
    this.setState({

        score:scoreVal

    })

}

handleAnswerClick(e){

const Active =[false,false,false];
const targetId = parseInt(e.target.dataset.id )
const answerValue = e.target.dataset.value;


if(answerValue==='true'){

    e.target.style.background = 'green';
    this.calScore();
    this.setState({

        isClickAnswer:true
    })
}
if(answerValue==='false'){

    e.target.style.background = 'red';
    this.setState({

        isClickAnswer:true
    })
}


if(targetId===Active.length-1){
    
    setTimeout(()=>{

        this.setState({

            finalScore:this.state.score,
            isFinshQuiz:true
        })
    },1000)
  
}
else
{
Active[targetId+1]=true;
setTimeout(()=>{
    this.setState({

        isActive:Active,
        isClickAnswer:false
    })

},2000);
}

}

componentDidMount(){

    console.log(this.props.questionsData);

}

    render(){

        return(

            <div className='questions-container'>

               {    
                    this.props.questionsData.map((el,index)=>{
                    if(this.state.isActive[index]){
                    return(
                    <section key={index}>
                            <h1 className="question">{index+1}.{el.question}</h1>
                            <ul className="answers-list">    
                                {
                                    el.answers.map((answer,index01)=>{
                                        return(
                                        <li key={index01}>
                                        <a 
                                        onClick={this.handleAnswerClick} 
                                        data-id={index} 
                                        data-value={answer.value} 
                                        className={this.state.isClickAnswer?'disable-link':'enable-link'}
                                        href="#0"
                                         > 
                                        {index01+1}.{answer.content}
                                        </a>
                                        </li>
                                        )
                                    })
                                }

                            </ul>
                    </section>
                    )
                    }else{
                        return '';
                    }
                    })
               }     

            <Score score={this.state.score} final={this.state.finalScore} finish={this.state.isFinshQuiz}/>

            </div>


        )


    }

}



export default Questions;