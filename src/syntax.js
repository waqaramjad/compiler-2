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
                if (curentValue[counterValue].type == 'separator' && curentValue[counterValue].value == '=') {
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
                    alert('there is an error at line no  ==')
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

                            lineNo++;
                            verify++
                            counterValue = 0;
                            console.log('done float')
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

            this.conditionStatement(this.state.token)
        }
    }


    conditionStatement(token){
        var curentValue = token[lineNo]
        counterValue = 0;
console.log(curentValue)

if(curentValue[counterValue].value == 'agar' && curentValue[counterValue].type == 'keyword' )
{
    counterValue++
    
            // if( curentValue[counterValue].value == '(' && curentValue[counterValue].type == 'separator' ){

            //     counterValue++
            //  var conditionResult =    this.conditionCheck( this.state.token )


            // }


       
}


    }

    conditionCheck ( token  ) {
        var curentValue = token[lineNo]
        if(curentValue[counterValue].type == 'identifier'  ){
            counterValue++
            // if( )

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