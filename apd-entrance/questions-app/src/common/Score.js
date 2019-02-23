import React, { Component } from 'react';



class Score extends Component{

    render(){


                return(

                <div className="score-container">

                    <h1>Score:{this.props.score}%</h1>
                    {this.props.finish?
                    <h1>{this.props.final>50?'Pass!':'Fail!'}</h1>:''
                    }
                </div>


                )



    }


}


export default Score;