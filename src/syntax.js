import React, {
    Component
} from 'react';

import Modal from '@material-ui/core/Modal';
var modelVar = 0 ; 
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
        console.log('integer')
        //console.log('line no ' + lineNo)
        var curentValue = token[lineNo]
        // //console.log(curentValue)
        // //console.log(curentValue[counterValue])
        if(token.length != lineNo){
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

                        //console.log('done')
                        if (curentValue[counterValue].type == 'separator' && curentValue[counterValue].value == ';') {

                            if (curentValue.length >= 6) {
                                lineNo++;
                                verify++
                                counterValue = 0;
                                // console.log('condition statement int  ')
                                return ({
                                    myVal: true
                                })

                            } else {
                                lineNo++;
                                verify++
                                counterValue = 0;
                                //console.log('done int')
                                this.int(this.state.token)
                            }



                        } else {
                             throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                        }

                    } else {
                         throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                    }


                } else {
                    console.log('warning')
                     throw new Error('error at line no ' + ++lineNo + ' and token no ' + ++counterValue); // ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                    //  throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)

                }

            } else {
                // alert('hy')
                console.log('check ')
                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
            }


        } else if (token.length == lineNo){
// modelVar++
            // console.log('Programe run successfully')
            modelVar++
            if(modelVar == 1)
            alert('Programe run successfully')
        }
        
        
        else {

            var FloatReturn = this.float(this.state.token)
            return (FloatReturn)
            //console.log(FloatReturn)
        }
    }
    else {

        console.log('Programe run successfully')
        modelVar++
        if(modelVar == 1)

        alert('Programe run successfully')

    }


    }

    float(token) {
        console.log('float')
        //console.log('line no float ' + lineNo)
        var curentValue = token[lineNo]
        counterValue = 0;
        //console.log(curentValue)
        //console.log(curentValue[counterValue])
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

                        //console.log('done')
                        if (curentValue[counterValue].type == 'separator' && curentValue[counterValue].value == ';') {

                            // counterValue++
                            //console.log(curentValue.length)
                            if (curentValue.length == 6) {
                                lineNo++;
                                verify++
                                counterValue = 0;
                                //console.log('condition statement ')
                                return ({
                                    myVal: true
                                })

                            } else {
                                lineNo++;
                                verify++
                                counterValue = 0;
                                //console.log('done float')
                                this.int(this.state.token)
                            }





                        } else {
                             throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                        }

                    } else {
                         throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                    }


                } else {
                     throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                }

            } else {
                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
            }


        } else {

            this.conditionStatement(this.state.token)
        }
    }

    /*/********************************************** conditionStatement  **********************************************/
    conditionStatement(token) {
        //console.log('line no condition' + lineNo)
        console.log('conditionStatement')

        var curentValue = token[lineNo]
        counterValue = 0;
        //console.log('intil if ')
        // //console.log(lineNo)
        // //console.log(curentValue[counterValue])

        if (curentValue[counterValue].value == 'agar' && curentValue[counterValue].type == 'keyWord') {
            counterValue++

            if (curentValue[counterValue].value == '(' && curentValue[counterValue].type == 'separator') {

                //console.log('inside if in condition')
                counterValue++
                var conditionResult = this.conditionCheck(this.state.token)
                //  //console.log(conditionResult)
                //  //console.log(counterValue)
                //  //console.log(curentValue)
                if (conditionResult == true && curentValue[counterValue].value == ')' && curentValue[counterValue].type == 'separator') {
                    counterValue++
                    // this.check(curentValue)
                    if (curentValue[counterValue].value == '{' && curentValue[counterValue].type == 'separator')
                        lineNo++;
                    var curentValue = token[lineNo]
                    counterValue = 0


                    //console.log('inside')

                    if (curentValue[counterValue].value == 'adad' | curentValue[counterValue].value == 'nuqta') {
                        var newArrayForChecking = curentValue.push({
                            check: 'true '
                        })
                        //console.log('adad seting ')
                        //console.log(curentValue)

                        var checkForDecleration = this.int(this.state.token)
                        //console.log(checkForDecleration)

                        if (checkForDecleration.myVal == true) {
                            // lineNo++
                            counterValue = 0
                            var curentValue = token[lineNo]
                            //console.log('if statement done ')
                            //console.log(lineNo)
                            //console.log(token[lineNo])

                            if (curentValue[counterValue].value == '}') {


                                lineNo++
                                //console.log('if statement done ' + lineNo)
                                this.int(this.state.token)

                            } else {
                                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                            }

                        } else {
                             throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                        }

                    } else {
                         throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                    }

                } else {
                     throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                }


            } else {
                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
            }
        } else if (curentValue[counterValue].value == 'warna' && curentValue[counterValue].type == 'keyWord') {
            //console.log('warna ')

            counterValue++

            if (curentValue[counterValue].value == '{' && curentValue[counterValue].type == 'separator') {
                lineNo++;
                var curentValue = token[lineNo]
                counterValue = 0
                //console.log('inside else ' + lineNo + 'counter' + counterValue)
                if (curentValue[counterValue].value == 'adad' | curentValue[counterValue].value == 'nuqta') {
                    var newArrayForChecking = curentValue.push({
                        check: 'true '
                    })
                    //console.log('adad seting ')
                    //console.log(curentValue)

                    var checkForDecleration = this.int(this.state.token)
                    //console.log(checkForDecleration)

                    if (checkForDecleration.myVal == true) {
                        // lineNo++
                        counterValue = 0
                        var curentValue = token[lineNo]
                        //console.log('if statement done ')
                        //console.log(lineNo)
                        //console.log(token[lineNo])

                        if (curentValue[counterValue].value == '}') {


                            lineNo++
                            //console.log('else  statement done ' + lineNo)
                            this.int(this.state.token)

                        } else {
                             throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                        }

                    } else {
                         throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                    }

                } else {
                     throw new Error ('error at li ne no ' + ++lineNo + ' and token no ' + ++counterValue)
                }




            } else {
                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
            }

        }


        // warna to 
        else if (curentValue[counterValue].value == 'warnaTo' && curentValue[counterValue].type == 'keyWord') {
            //console.log('warna ')

            counterValue++

            if (curentValue[counterValue].value == '{' && curentValue[counterValue].type == 'separator') {
                lineNo++;
                var curentValue = token[lineNo]
                counterValue = 0
                //console.log('inside else ' + lineNo + 'counter' + counterValue)
                if (curentValue[counterValue].value == 'adad' | curentValue[counterValue].value == 'nuqta') {
                    var newArrayForChecking = curentValue.push({
                        check: 'true '
                    })
                    //console.log('adad seting ')
                    //console.log(curentValue)

                    var checkForDecleration = this.int(this.state.token)
                    //console.log(checkForDecleration)

                    if (checkForDecleration.myVal == true) {
                        // lineNo++
                        counterValue = 0
                        var curentValue = token[lineNo]
                        //console.log('if statement done ')
                        //console.log(lineNo)
                        //console.log(token[lineNo])

                        if (curentValue[counterValue].value == '}') {


                            lineNo++
                            //console.log('warna to  statement done ' + lineNo)
                            this.int(this.state.token)

                        } else {
                             throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                        }

                    } else {
                         throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                    }
                } else {
                     throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                }


            } else {
                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
            }

        } else {

            this.doWhileLoop(token)
        }

    }

    doWhileLoop(token) {

        // //console.log(token)

        var curentValue = token[lineNo]
        counterValue = 0;
        console.log('doWhileLoop')
        // //console.log(lineNo)
        // //console.log(curentValue[counterValue])

        if (curentValue[counterValue].value == 'do' && curentValue[counterValue].type == 'keyWord') {
            counterValue++
            //console.log('2nd phase ')
            if (curentValue[counterValue].value == '{') {
                lineNo++;
                var curentValue = token[lineNo]
                counterValue = 0


                //console.log('inside')

                if (curentValue[counterValue].value == 'adad' | curentValue[counterValue].value == 'nuqta') {
                    var newArrayForChecking = curentValue.push({
                        check: 'true '
                    })
                    //console.log('adad seting ')
                    //console.log(curentValue)

                    var checkForDecleration = this.int(this.state.token)
                    //console.log(checkForDecleration)
                    // //console.log(checkForDecleration)

                    if (checkForDecleration.myVal == true) {
                        // lineNo++
                        counterValue = 0
                        var curentValue = token[lineNo]
                        //console.log('do while loop  statement done ')
                        //console.log(lineNo)
                        //console.log(token[lineNo])

                        if (curentValue[counterValue].value == '}') {

                            counterValue++
                            // lineNo++
                            // counterValue=0
                            //console.log('do while  done ' + lineNo)
                            // this.int(this.state.token)


                            ///*********************** */



                            if (curentValue[counterValue].value == 'wloop' && curentValue[counterValue].type == 'keyWord') {
                                counterValue++

                                if (curentValue[counterValue].value == '(' && curentValue[counterValue].type == 'separator') {

                                    //console.log('inside if in condition')
                                    counterValue++
                                    var conditionResult = this.conditionCheck(this.state.token)

                                    if (conditionResult == true && curentValue[counterValue].value == ')' && curentValue[counterValue].type == 'separator') {

                                        lineNo++
                                        //console.log('do while loop end ')
                                        this.int(this.state.token)


                                    } else {
                                         throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                                    }

                                } else {
                                     throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                                }
                            } else {
                                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                            }



                            ///*********************** */
                        } else {
                             throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                        }

                    } else {
                         throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                    }

                } else {
                     throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                }


            } else {
                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
            }


        } else {
            //console.log('else do whie ')
            this.wLoop(token)


        }

    }


    wLoop(token) {

        console.log('while Loop')

        var curentValue = token[lineNo]
        counterValue = 0;
        //console.log('curentValue')
        if (curentValue[counterValue].value == 'wloop' && curentValue[counterValue].type == 'keyWord') {
            counterValue++

            if (curentValue[counterValue].value == '(' && curentValue[counterValue].type == 'separator') {

                //console.log('inside wLoop ')
                counterValue++
                var conditionResult = this.conditionCheck(this.state.token)
                //  //console.log(conditionResult)
                //  //console.log(counterValue)
                //  //console.log(curentValue)
                if (conditionResult == true && curentValue[counterValue].value == ')' && curentValue[counterValue].type == 'separator') {
                    counterValue++
                    //console.log(curentValue)
                    // this.check(curentValue)
                    if (curentValue[counterValue].value == '{' && curentValue[counterValue].type == 'separator') {
                        lineNo++;
                        var curentValue = token[lineNo]
                        counterValue = 0


                        //console.log('inside ')

                        if (curentValue[counterValue].value == 'adad' | curentValue[counterValue].value == 'nuqta') {
                            var newArrayForChecking = curentValue.push({
                                check: 'true '
                            })
                            //console.log('adad seting ')
                            //console.log(curentValue)

                            var checkForDecleration = this.int(this.state.token)
                            //console.log(checkForDecleration)

                            if (checkForDecleration.myVal == true) {
                                // lineNo++
                                counterValue = 0
                                var curentValue = token[lineNo]
                                //console.log('wloop statement done ')
                                //console.log(lineNo)
                                //console.log(token[lineNo])

                                if (curentValue[counterValue].value == '}') {


                                    lineNo++
                                    //console.log('if statement done ' + lineNo)
                                    this.int(this.state.token)

                                }

                                else {
                                     throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                                }
                                

                            }
                            else {
                                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                            }

                        }

                        else {
                             throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                        }

                    }
                    else {
                         throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                    }

                }
                else {
                     throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                }
            }
            else {
                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
            }
        } else {
            this.fuctionLogic(token)
            // //console.log(lineNo)
        }



    }

    //**************************************   Function ***************************** */

    fuctionLogic(token) {

        // var curentValue = token
        var curentValue = token[lineNo]
        console.log('fuctionLogic')
        // 
        counterValue = 0;
        //console.log(token)
        if (curentValue[counterValue].value == 'func' && curentValue[counterValue].type == 'keyWord') {
            counterValue++
            //console.log('round bracket ) ')
            if (curentValue[counterValue].type == 'identifier') {

                //console.log('round bracket ) ')
                counterValue++

                if (curentValue[counterValue].value == '(' && curentValue[counterValue].type == 'separator') {
                    //console.log('round bracket ) ')

                    counterValue++
                    var conditionResult = this.ParameterCheck(curentValue)
                    //  //console.log(conditionResult)
                    //  //console.log(counterValue)
                    //console.log('round bracket ) ')
                    //console.log(conditionResult)
                    //console.log(curentValue)
                    //console.log(curentValue[counterValue].value)
                    if (conditionResult == true && curentValue[counterValue].value == ')' && curentValue[counterValue].type == 'separator') {
                        counterValue++

                        //console.log('round bracket ) ')
                        if (curentValue[counterValue].value == '{' && curentValue[counterValue].type == 'separator') {
                            lineNo++;
                            var curentValue = token[lineNo]
                            counterValue = 0


                            //console.log(token)
                            //console.log(counterValue)

                            if (curentValue[counterValue].value == 'adad' | curentValue[counterValue].value == 'nuqta') {
                                var newArrayForChecking = curentValue.push({
                                    check: 'true '
                                })
                                //console.log('func ')
                                //console.log(curentValue)

                                var checkForDecleration = this.int(this.state.token)
                                //console.log(checkForDecleration)

                                if (checkForDecleration.myVal == true) {
                                    // lineNo++
                                    counterValue = 0
                                    var curentValue = token[lineNo]
                                    //console.log('mid of function ')
                                    //console.log(lineNo)
                                    //console.log(token[lineNo])

                                    if (curentValue[counterValue].value == '}') {


                                        lineNo++
                                        //console.log('end of function ' + lineNo)
                                        this.int(this.state.token)

                                    }
                                    else {
                                         throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                                    }

                                }
                                else {
                                     throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                                }
                            }
                            else {
                                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                            }

                        }
                        else {
                             throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                        }

                    }
                    else {
                         throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                    }
                }
                else {
                     throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
                }

            }
            else {
                 throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)
            }

        }
        else{
             throw new Error ('error at line no ' + ++lineNo + ' and token no ' + ++counterValue)

        }

    }
    //************************************************End *********************************** */
    //************************************************Parameter Check  *********************************** */

    ParameterCheck(curentValue) {
        //console.log(curentValue[counterValue])
        //console.log(curentValue[counterValue])

        if (curentValue[counterValue].type == 'identifier') {
            counterValue++
            // if(curentValue[counterValue].value == ',' && curentValue[counterValue].type =='separator'){
            //     counterValue++
            //     this.ParameterCheck(curentValue)
            // }

            // else{
            //     //console.log('else')
            //     return true

            // }
            return true
        } else {
            //console.log('else')
            return false

        }


    }



    //************************************************End Parameter Check  *********************************** */
    check(current) {

        //console.log(current[counterValue])
        if (current[counterValue].value == '{') {
            return true
        } else if (this.state.token[++lineNo][0].value == "{") {


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
                    //console.log('my true ')

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




    // {modelVar != 0 ? < Token value = {  result}/>: null }

    render() {
        this.int(this.state.token)
        // alert('syntax')
        // //console.log()
        return ( < div >
        <Modal />

            </div>
        )
    }

}



export default Syntax;