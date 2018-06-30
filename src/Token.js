import React, { Component } from 'react';

const keyWord = 0 ;
const  identifier = 2 ;
const separator = 3;
const operator = 4;
const literal = 5 ; 
const FinatArrayOfTokens =[[]] ;

function Create2DArray(rows) {
    var arr = [];
  
    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }
  
    return arr;
  }

  function matrix( rows, cols, defaultValue){

    var arr = [];
  
    // Creates all lines:
    for(var i=0; i < rows; i++){
  
        // Creates an empty line
        arr.push([]);
  
        // Adds cols to the empty line:
        arr[i].push( new Array(cols));
  
        for(var j=0; j < cols; j++){
          // Initializes:
          arr[i][j] = defaultValue;
        }
    }
  
  return arr;
  }

class Token extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            email: '',
            password: ''
        }
this.checkForKeyWord = this.checkForKeyWord.bind(this)
this.SecondPartStatement = this.SecondPartStatement.bind(this)
this.checkForseparator = this.checkForseparator.bind(this)
    }

   componentWillMount(){
    this.tokenization();
   }


    tokenization (){
        var arr1 = matrix(5,5,[])
        // console.log(matrix(5,5,[])) 
        arr1[4][2] = 'hy '
        console.log(arr1[4][2])
        // console.log(Create2DArray(5)) 
        let stringInArrayForm = this.props.value
        console.log(stringInArrayForm)
var result = stringInArrayForm.map((line , lineIndex)=>{
// console.log(lineIndex)
   var tokenResultOfEachLine = line.map((lineValue , lineValueIndex)=>{
       // console.log(lineValueIndex)
       var resultForWords = this.checkForKeyWord(lineValue)
       if(resultForWords.value===true){
        console.log(lineIndex)
        console.log(resultForWords.type)
// FinatArrayOfTokens[lineIndex][resultForWords.type] = lineValue
// FinatArrayOfTokens[5][5]= lineValueIndex
console.log('true')
console.log(resultForWords)
console.log(FinatArrayOfTokens)
}
else if(resultForWords.value==false){
    alert(lineValue+' is not  a word at line no '+lineIndex )
    console.log('false')
    console.log(lineValueIndex)
    console.log(lineValue)
    // FinatArrayOfTokens[lineIndex][resultForWords.type] = lineValueIndex
}
// console.log(resultForWords)
// console.log(FinatArrayOfTokens)

   })

})

        


   
    }

    checkForKeyWord(mykeyWord){
        console.log('inside check ' + mykeyWord)
if(mykeyWord=='adad'|mykeyWord=='nuqta'|mykeyWord=='lafz'|mykeyWord=='line'|mykeyWord=='mamla'|mykeyWord=='tabdeli'|mykeyWord=='agar'|mykeyWord=='warna'|mykeyWord=='warnaTo'|mykeyWord=='roko'|mykeyWord=='loop'|mykeyWord=='wloop'|mykeyWord=='dloop')

{
    return({ value: true , type : keyWord } )
}      
else{
    return({value: false , type : keyWord})
}

// console.log('checkForKeyWord')

// this.checkForseparator()
}

checkForseparator(){
    console.log('checkForseparator')

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