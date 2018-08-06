import React, {
    Component
} from 'react';

class Syntax extends Component {
    constructor(props) {
        super(props);

        this.state = {
          token : this.props.token
        }
        this.syntax = this.syntax.bind(this)
    }


syntax  (token){

console.log(this.state.token)
console.log(token[0])
var curentValue = token[0]
var counterValue = 0 ;
var verify = 0 
if(curentValue[counterValue].type=='keyWord' && curentValue[counterValue].value=='adad'){
counterValue++
verify++
if(curentValue[counterValue].type=='identifier'){
counterValue++
verify++
if(curentValue[counterValue].type=='operator' && curentValue[counterValue].value=='='){
counterValue++
verify++
if(curentValue[counterValue].type=='literal' ){
counterValue++
verify++

console.log('done')


}

}

}


}

}

    render() {
        this.syntax(this.state.token)
// alert('syntax')
// console.log()
        return ( <div>
            
            </div>
        )
    }

}



    export default Syntax;