import React, {
    Component
} from 'react';


var verify = 0
var lineNo = 0
var counterValue = 0
class Syntax extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: this.props.token,



        }

    }


    int(token) {

        counterValue = 0;
        console.log(token)
        console.log('line no ' + lineNo)
        var curentValue = token[lineNo]
        // console.log(curentValue)
        // console.log(curentValue[counterValue])
        if (curentValue[counterValue].type == 'keyWord' && curentValue[counterValue].value == 'adad') {
            counterValue++
            // verify++
            if (curentValue[counterValue].type == 'identifier') {
                counterValue++
                // verify++
                if (curentValue[counterValue].type == 'separator' && curentValue[counterValue].value == '=') {
                    counterValue++
                    // verify++
                    // verify++

                    if (curentValue[counterValue].type == 'literal') {
                        counterValue++
                        verify++

                        console.log('done')
                        if (curentValue[counterValue].type == 'separator' && curentValue[counterValue].value == ';') {

                            if (curentValue.length == 6) {
                                lineNo++;
                                verify++
                                counterValue = 0;
                                console.log('condition statement int  ')
                                return ({
                                    myVal: true
                                })

                            } else {
                                lineNo++;
                                verify++
                                counterValue = 0;
                                console.log('done int')
                                this.int(this.state.token)
                            }



                        } else {
                            alert('there is an error at line no  2')
                        }

                    }


                } else {
                    alert('there is an error at line no  ==')
                }

            } else {
                alert('there is an error at line no expected identifier')
            }


        } else {

            var FloatReturn = this.float(this.state.token)
            return (FloatReturn)
            console.log(FloatReturn)
        }
    }

    float(token) {
        console.log(token)
        console.log('line no float ' + lineNo)
        var curentValue = token[lineNo]
        counterValue = 0;
        console.log(curentValue)
        console.log(curentValue[counterValue])
        if (curentValue[counterValue].type == 'keyWord' && curentValue[counterValue].value == 'nuqta') {
            counterValue++
            // verify++
            if (curentValue[counterValue].type == 'identifier') {
                counterValue++
                // verify++
                if (curentValue[counterValue].type == 'separator' && curentValue[counterValue].value == '=') {
                    counterValue++
                    // verify++
                    // verify++

                    if (curentValue[counterValue].type == 'literal') {
                        counterValue++
                        verify++

                        console.log('done')
                        if (curentValue[counterValue].type == 'separator' && curentValue[counterValue].value == ';') {

                            // counterValue++
                            console.log(curentValue.length)
                            if (curentValue.length == 6) {
                                lineNo++;
                                verify++
                                counterValue = 0;
                                console.log('condition statement ')
                                return ({
                                    myVal: true
                                })

                            } else {
                                lineNo++;
                                verify++
                                counterValue = 0;
                                console.log('done float')
                                this.int(this.state.token)
                            }





                        } else {
                            alert('there is an error at line no  2')
                        }

                    }


                } else {
                    alert('there is an error at line no  ')
                }

            } else {
                alert('there is an error at line no expected identifier')
            }


        } else {

            this.conditionStatement(this.state.token)
        }
    }

    /*/********************************************** conditionStatement  **********************************************/
    conditionStatement(token) {
        console.log('line no condition' + lineNo)

        var curentValue = token[lineNo]
        counterValue = 0;
        console.log('intil if ')
        // console.log(lineNo)
        // console.log(curentValue[counterValue])

        if (curentValue[counterValue].value == 'agar' && curentValue[counterValue].type == 'keyWord') {
            counterValue++

            if (curentValue[counterValue].value == '(' && curentValue[counterValue].type == 'separator') {

                console.log('inside if in condition')
                counterValue++
                var conditionResult = this.conditionCheck(this.state.token)
                //  console.log(conditionResult)
                //  console.log(counterValue)
                //  console.log(curentValue)
                if (conditionResult == true && curentValue[counterValue].value == ')' && curentValue[counterValue].type == 'separator') {
                    counterValue++
// this.check(curentValue)
                    if (curentValue[counterValue].value == '{' && curentValue[counterValue].type == 'separator')
                        lineNo++;
                    var curentValue = token[lineNo]
                    counterValue = 0


                    console.log('inside')

                    if (curentValue[counterValue].value == 'adad' | curentValue[counterValue].value == 'nuqta') {
                        var newArrayForChecking = curentValue.push({
                            check: 'true '
                        })
                        console.log('adad seting ')
                        console.log(curentValue)

                        var checkForDecleration = this.int(this.state.token)
                        console.log(checkForDecleration)

                        if (checkForDecleration.myVal == true) {
                            // lineNo++
                            counterValue = 0
                            var curentValue = token[lineNo]
                            console.log('if statement done ')
                            console.log(lineNo)
                            console.log(token[lineNo])

                            if (curentValue[counterValue].value == '}') {


                                lineNo++
                                console.log('if statement done '+lineNo)
                                this.int(this.state.token)

                            }

                        }

                    }

                }


            }
        }


        else if (curentValue[counterValue].value == 'warna' && curentValue[counterValue].type == 'keyWord') {
console.log('warna ')

counterValue++

if (curentValue[counterValue].value == '{' && curentValue[counterValue].type == 'separator') {
    lineNo++;
    var curentValue = token[lineNo]
    counterValue = 0
console.log('inside else '+lineNo+'counter'+counterValue)
    if (curentValue[counterValue].value == 'adad' | curentValue[counterValue].value == 'nuqta') {
        var newArrayForChecking = curentValue.push({
            check: 'true '
        })
        console.log('adad seting ')
        console.log(curentValue)

        var checkForDecleration = this.int(this.state.token)
        console.log(checkForDecleration)

        if (checkForDecleration.myVal == true) {
            // lineNo++
            counterValue = 0
            var curentValue = token[lineNo]
            console.log('if statement done ')
            console.log(lineNo)
            console.log(token[lineNo])

            if (curentValue[counterValue].value == '}') {


                lineNo++
                console.log('else  statement done '+lineNo)
                this.int(this.state.token)

            }

        }

    }


}

        }

        // warna to 
        else if (curentValue[counterValue].value == 'warnaTo' && curentValue[counterValue].type == 'keyWord') {
            console.log('warna ')
            
            counterValue++
            
            if (curentValue[counterValue].value == '{' && curentValue[counterValue].type == 'separator') {
                lineNo++;
                var curentValue = token[lineNo]
                counterValue = 0
            console.log('inside else '+lineNo+'counter'+counterValue)
                if (curentValue[counterValue].value == 'adad' | curentValue[counterValue].value == 'nuqta') {
                    var newArrayForChecking = curentValue.push({
                        check: 'true '
                    })
                    console.log('adad seting ')
                    console.log(curentValue)
            
                    var checkForDecleration = this.int(this.state.token)
                    console.log(checkForDecleration)
            
                    if (checkForDecleration.myVal == true) {
                        // lineNo++
                        counterValue = 0
                        var curentValue = token[lineNo]
                        console.log('if statement done ')
                        console.log(lineNo)
                        console.log(token[lineNo])
            
                        if (curentValue[counterValue].value == '}') {
            
            
                            lineNo++
                            console.log('warna to  statement done '+lineNo)
                            this.int(this.state.token)
            
                        }
            
                    }
            
                }
            
            
            }
            
                    }

    }

    doWhileLoop(){



        
    }

check(current){
console.log( current[counterValue])
if(current[counterValue].value=='{')
{
    return true 
}
else if (this.state.token[++lineNo][0].value=="{")
{


}
}


    conditionCheck(token) {
        var curentValue = token[lineNo]
        if (curentValue[counterValue].type == 'identifier') {
            counterValue++
            if (curentValue[counterValue].type == 'operator') {
                counterValue++
                if (curentValue[counterValue].type == 'identifier' | curentValue[counterValue].type == 'literal') {
                    counterValue++
                    console.log('my true ')

                    return (true)

                } else {
                    return (false)

                }

            } else {
                return (false)

            }


        } else if (curentValue[counterValue].type == 'keyword' && curentValue[counterValue].value == 'sahi') {
            return (true)
        } else {
            return (false)
        }
    }





    render() {
        this.int(this.state.token)
        // alert('syntax')
        // console.log()
        return ( < div >

            </div>
        )
    }

}



export default Syntax;