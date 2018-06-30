import React, { Component } from 'react';

const keyWord = 1 ;
const  identifier = 2 ;
const separator = 3;
const operator = 4;
const literal = 5 ; 
class Token extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            email: '',
            password: ''
        }
this.checkForKeyWord = this.checkForKeyWord.bind(this)
this.SecondPartStatement = this.SecondPartStatement.bind(this)
    }

   componentWillMount(){
    this.tokenization();
   }


    tokenization (){
        let stringInArrayForm = this.props.value
        console.log(stringInArrayForm)
var result = stringInArrayForm.map((line , lineIndex)=>{

   var tokenResultOfEachLine = line.map((lineValue , lineValueIndex)=>{
console.log(lineValue)
console.log(lineValueIndex)

   })

})

        


        // let splitted = inputString.split(" ")
        // console.log(splitted)

        // let keyWord = splitted[0]
        // splitted.splice(0, 1)
// this.checkForKeyWord(keyWord)
// this.SecondPartStatement(splitted)
    }

    checkForKeyWord(keyWord){
        var keyWordArray = []
        // console.log(keyWord)
          switch(keyWord){
    
        case 'num':{
            keyWordArray.push(keyWord)
            // console.log('keyWord')
            break
        }
    
        case 'word':{
            keyWordArray.push(keyWord)

    break
        }
    
    }
    // console.log(keyWordArray)



    }

    SecondPartStatement(secondData){
        
        // console.log(secondData)


    }

    render() {
      
        return (
            <div>
                
            </div>
        )
    }
}



export default Token;


// class Token {
//     // constructor(this){
    
//     // }
    
//     Tokenization(){
    
//         console.log('hello')
        
//         // switch(splitted[0]){
        
//         //     case 'num':{
        
//         //     }
        
//         //     case 'word':{
        
//         //     }
        
//         // }
    
//     }
    
    
    
//     }
    
//     export default Token ;