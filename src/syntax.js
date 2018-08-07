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
        this.syntax = this.syntax.bind(this)
    }


    int(token) {


        console.log('done done ')
        var curentValue = token[lineNo]
        console.log(curentValue)
        console.log(curentValue[counterValue])
        if (curentValue[counterValue].type == 'keyWord' && curentValue[counterValue].value == 'adad') {
            counterValue++
            // verify++
            if (curentValue[counterValue].type == 'identifier') {
                counterValue++
                // verify++
                if (curentValue[counterValue].type == 'operator' && curentValue[counterValue].value == '=') {
                    counterValue++
                    // verify++
                    // verify++

                    if (curentValue[counterValue].type == 'literal') {
                        counterValue++
                        verify++

                        console.log('done')
                        if (curentValue[counterValue].type == 'separator' && curentValue[counterValue].value == ';') {

                            lineNo++;
                            verify++
                            counterValue = 0;
                            console.log('done int')
                            this.int(this.state.token)



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

            this.float(this.state.token)
        }
    }

    float(token) {
        var curentValue = token[lineNo]
        console.log(curentValue)
        console.log(curentValue[counterValue])
        if (curentValue[counterValue].type == 'keyWord' && curentValue[counterValue].value == 'nuqta') {
            counterValue++
            // verify++
            if (curentValue[counterValue].type == 'identifier') {
                counterValue++
                // verify++
                if (curentValue[counterValue].type == 'operator' && curentValue[counterValue].value == '=') {
                    counterValue++
                    // verify++
                    // verify++

                    if (curentValue[counterValue].type == 'literal') {
                        counterValue++
                        verify++

                        console.log('done')
                        if (curentValue[counterValue].type == 'separator' && curentValue[counterValue].value == ';') {

                            lineNo++;
                            verify++
                            counterValue = 0;
                            console.log('done float')




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

            this.float(this.state.token)
        }
    }
    syntax(token) {

        console.log(this.state.token)
        console.log(token[0])
        var curentValue = token[0]
        var counterValue = 0;
        var verify = 0

        // int
        if (curentValue[counterValue].type == 'keyWord' && curentValue[counterValue].value == 'adad') {
            counterValue++
            verify++
            if (curentValue[counterValue].type == 'identifier') {
                counterValue++
                verify++
                if (curentValue[counterValue].type == 'operator' && curentValue[counterValue].value == '=') {
                    counterValue++
                    verify++
                    if (curentValue[counterValue].type == 'literal') {
                        counterValue++
                        verify++

                        console.log('done')


                    }

                }

            } else {
                alert('there is an error at line no ')
            }


        }

        /// floating point 
        else if (curentValue[counterValue].type == 'keyWord' && curentValue[counterValue].value == 'nuqta') {
            counterValue++
            verify++
            if (curentValue[counterValue].type == 'identifier') {
                counterValue++
                verify++
                if (curentValue[counterValue].type == 'operator' && curentValue[counterValue].value == '=') {
                    counterValue++
                    verify++
                    if (curentValue[counterValue].type == 'literal') {
                        counterValue++
                        verify++

                        console.log('done nuqta ')


                    }

                }

            }


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