import React, {
    Component
} from 'react';

import Syntax from './syntax'
const keyWord = 0;
const identifier = 1;
const separator = 2;
const operator = 3;
const literal = 4;

function Create2DArray(rows) {
    var arr = [];

    for (var i = 0; i < rows; i++) {
        arr[i] = [];
    }

    return arr;
}

let myObjectForSyntax;

function matrix(rows, cols, defaultValue) {

    var arr = [];

    for (var i = 0; i < rows; i++) {

        arr.push([]);

        // arr[i].push(new Array(cols));
// 
        // for (var j = 0; j < cols; j++) {
        //     arr[i][j] = defaultValue;
        // }
    }

    return arr;
}

class Token extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '', 
            
        }
        


        this.checkForKeyWord = this.checkForKeyWord.bind(this)
        this.checkForSeparator = this.checkForSeparator.bind(this)
        this.checkForOperator = this.checkForOperator.bind(this)
        this.checkForValuesAndIdentifier = this.checkForValuesAndIdentifier.bind(this)
    }

    componentWillMount() {
        this.tokenization();
    }


    tokenization() {
        
        let stringInArrayForm = this.props.value
        // // console.log(stringInArrayForm)
        var FinatArrayOfTokens = matrix(stringInArrayForm.length)
        // console.log(FinatArrayOfTokens)
        // var FinatArrayOfTokens = [[]]
// console.log(FinatArrayOfTokens)
        var result = stringInArrayForm.map((line, lineIndex) => {
            var tokenResultOfEachLine = line.map((lineValue, lineValueIndex) => {
                var resultForWords = this.checkForKeyWord(lineValue)
                if (resultForWords.value === true) {
                    var oldArray = FinatArrayOfTokens[lineIndex]
                    var newArray = oldArray.slice();
                    // newArray.push(lineValue)
                    newArray.push({value:lineValue , type : resultForWords.type })
                    FinatArrayOfTokens[lineIndex] = newArray

                } else if (resultForWords.value == false) {
                    alert(lineValue + ' is not  a word at line no ' + lineIndex)
                }
                
            })
            
        })
        myObjectForSyntax = FinatArrayOfTokens
        // console.log(FinatArrayOfTokens)
        this.setState({
            Array : FinatArrayOfTokens
        })
        // console.log(this.state.Array)





    }

    checkForKeyWord(mykeyWord) {
        if (mykeyWord == 'adad' | mykeyWord == 'nuqta' |mykeyWord == 'sahi' |mykeyWord == 'func' |mykeyWord == 'ghalat' | mykeyWord == 'lafz' | mykeyWord == 'line' | mykeyWord == 'mamla' | mykeyWord == 'tabdeli' | mykeyWord == 'agar' | mykeyWord == 'warna' | mykeyWord == 'warnaTo' | mykeyWord == 'roko' | mykeyWord == 'loop' | mykeyWord == 'wloop' | mykeyWord == 'do')

        {
            return ({
                value: true,
                type: 'keyWord'
            })
        } else {
            return (this.checkForSeparator(mykeyWord))
        }


    }

    checkForSeparator(mySeparator) {
        if(mySeparator=='{'|mySeparator=='}'|mySeparator=='('|mySeparator==')'|mySeparator=='='|mySeparator==';'|mySeparator==':'|mySeparator=='.'|mySeparator==','|mySeparator=='['|mySeparator==']')
       {    
        return ({
            value: true,
            type: 'separator'
        })   
       }
       else{

           return (this.checkForOperator(mySeparator)  )
       }
    }

    checkForOperator(myOperator){

        if(myOperator=='*'|myOperator=='+'|myOperator=='/'|myOperator=='-'|myOperator=='++'|myOperator=='<'|myOperator=='>'|myOperator=='<='|myOperator=='>='|myOperator=='&'|myOperator=='^'|myOperator=='!'|myOperator=='&&'|myOperator=='||'|myOperator=='=='|myOperator=='+='|myOperator=='-='|myOperator=='*='|myOperator=='/='|myOperator=='%='|myOperator=='&='|myOperator=='&='|myOperator=='<<='|myOperator=='>>='|myOperator=='>>>='){
            return ({
                value: true,
                type: 'operator'
            }) 
        }
        else{

            return (
                 (this.checkForValuesAndIdentifier(myOperator)  ))

            
        }
    }


checkForValuesAndIdentifier(myValue){

    var regForFloat = new RegExp('^[0-9]*[.][0-9]+$');
    var regForInt = new RegExp('^[0-9]+$');
    var regForIdentifier = new RegExp('^[_$a-zA-Z][_$a-zA-Z0-9]*$');
    var testResultForInt = regForInt.test(myValue)
    var testResultForFloat = regForFloat.test(myValue)
    var mykeyWord = regForIdentifier.test(myValue)
    if(testResultForFloat== true){
        return ({
            value: true,
            type: 'literal'
        }) 
    }
   
    else if(mykeyWord==true){
        if (mykeyWord == 'adad' | mykeyWord == 'nuqta'| mykeyWord == 'func' | mykeyWord == 'lafz' | mykeyWord == 'line' | mykeyWord == 'mamla' | mykeyWord == 'tabdeli' | mykeyWord == 'agar' | mykeyWord == 'warna' | mykeyWord == 'warnaTo' | mykeyWord == 'roko' | mykeyWord == 'loop' | mykeyWord == 'wloop' | mykeyWord == 'do')
{
    return  ({
        value: false
        
    }) 
        
    
}
else{
    // console.log('true')
    return ({
        value: true,
        type: 'identifier'
    }) 
}
       

}
        else if(testResultForInt==true){

            return ({
                value: true,
                type: 'literal'
            }) 

    }
    else{
        return ({
            value: false,
            type: 'literal'
        }) 
    }
   
}

    render() {
        return ( <div>
             <Syntax token={myObjectForSyntax}/>
            </div>
        )
    }
}



export default Token;

