import React, {
    Component
} from 'react';

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

function matrix(rows, cols, defaultValue) {

    var arr = [];

    for (var i = 0; i < rows; i++) {

        arr.push([]);

        arr[i].push(new Array(cols));

        for (var j = 0; j < cols; j++) {
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
        this.checkForSeparator = this.checkForSeparator.bind(this)
    }

    componentWillMount() {
        this.tokenization();
    }


    tokenization() {
        let stringInArrayForm = this.props.value
        var FinatArrayOfTokens = matrix(stringInArrayForm.length, 5, [])

        var result = stringInArrayForm.map((line, lineIndex) => {
            var tokenResultOfEachLine = line.map((lineValue, lineValueIndex) => {
                var resultForWords = this.checkForKeyWord(lineValue)
                if (resultForWords.value === true) {
                    var oldArray = FinatArrayOfTokens[lineIndex][resultForWords.type]
                    var newArray = oldArray.slice();
                    newArray.push(lineValue)
                    FinatArrayOfTokens[lineIndex][resultForWords.type] = newArray

                    console.log(FinatArrayOfTokens)
                } else if (resultForWords.value == false) {
                    alert(lineValue + ' is not  a word at line no ' + lineIndex)
                }

            })

        })





    }

    checkForKeyWord(mykeyWord) {
        if (mykeyWord == 'adad' | mykeyWord == 'nuqta' | mykeyWord == 'lafz' | mykeyWord == 'line' | mykeyWord == 'mamla' | mykeyWord == 'tabdeli' | mykeyWord == 'agar' | mykeyWord == 'warna' | mykeyWord == 'warnaTo' | mykeyWord == 'roko' | mykeyWord == 'loop' | mykeyWord == 'wloop' | mykeyWord == 'dloop')

        {
            return ({
                value: true,
                type: keyWord
            })
        } else {
            return (this.checkForSeparator())
        }


    }

    checkForSeparator() {
        console.log('checkForseparator')
        return (this.SecondPartStatement('second part'))
    }



    render() {

        return ( <
            div >

            <
            /div>
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