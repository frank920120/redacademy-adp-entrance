import React, { Component } from 'react';
import axios from 'axios';
import Questions from './common/Questions';
class App extends Component {
  constructor(props){

      super(props);
      this.state = {
        questionList:[],
        isClick:false,
        currentButton:null

      }
this.handleClick = this.handleClick.bind(this);
  }
//fetch data using axios
  componentDidMount(){
    const dataQuery = 'quiz.json';
    axios.get(dataQuery)
    .then(res=>{

        this.setState({

            questionList:[...res.data.quizzes] //copy data


        },()=>{
            console.log(this.state.questionList); //testing data

        })
    });
  }


handleClick(e){

    this.setState({

        isClick:true,
        currentButton:e.target.dataset.id  //get current index 
    })
   


}

  render() {
    return (
      <div className="main-container">
          <h1 className="header">Redacademy entrance test</h1>
          <div className="title">
                {
                  //loop throught the data to output button value
                  this.state.questionList.map((el,index)=>{

                    if(!this.state.isClick){
                      return (
                          <button onClick={this.handleClick} key={index} data-id={index}>{el.title}</button>
                      )
                    }else{
                      return '';
                    }
                  })
                }
            { 
              this.state.isClick?<Questions questionsData={this.state.questionList[this.state.currentButton].questions}/>:'' //pass the clicked button value to the component
            }
          </div>
      </div>
    );
  }
}

export default App;
