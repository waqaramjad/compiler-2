import React, {
  Component
} from 'react';
import './App.css';
import Token from './Token.js'
import Button from '@material-ui/core/Button';
var testInput;
var result = 0

class App extends Component {
  constructor(props) {
    super(props);
    this.sendingFunction = this.sendingFunction.bind(this);
    this.completeProcess = this.completeProcess.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.com = this.handleChange.bind(this);
    // this.myfuncForOther = this.myfuncForOther.bind(this)
    this.state = {temperature: ''};
  }
  sendingFunction =()=>{
    console.log('check')
return(

  < Token value = {
        result
      }
      />
)

  }

   handleChange(e) {
      // this.setState({temperature: e.target.value});
      testInput = e.target.value
      console.log('testInput')
this.setState({
  temperature : 'df'
})
    }



    completeProcess(){

      Array.prototype.remove = function () {
        var what, a = arguments,
          L = a.length,
          ax;
        while (L && this.length) {
          what = a[--L];
          while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
          }
        }
        return this;
      };
  
  //     let testInput = `class run { 
      
  //       adad a = 6 ; 
  //       nuqta b = 7 ;  
  // float sum = a + b ; // final 
  // //end 
      
  //     } ; //
     
  //
  /*    `
       testInput = `  
      adad  a  =  4545 ; 
      nuqta  g =  757675645450.5 ; 
      agar  ( a >= vq ) {
        adad  g = 45450 ; 
      }
      warnaTo {
        adad  g = 45450 ; 
  }
      warna  {
              adad  g = 45450 ; 
      }
      do {
        adad   g = 45450 ; =  
      } wloop (  a >= v )
      wloop ( a >= f  ) {
        adad  g = 45450 ; 
      }
  
      
      func myfunc ( lahore  ) {
        adad  g = 4545.0 ; 
      }
   
     
      
     `
  */
      let splitted = testInput.split("\n")
  
      // //console.log(splitted)
      const map0 = splitted.map((a) => {
        var index = a.search('//')
        // //console.log(index+'foot')
        if (index != 0&& index!=-1) {
          var slicePart = a.slice(0, index)
        }
        else if(index==-1){
          var slicePart = a ;
        } 
      
        return (slicePart)
      });
      // //console.log(map0)
  
      // //console.log(map0)
     
      function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++)  {
          if (actual[i]) {
            newArray.push(actual[i]);
          }
        }
        return newArray;
      }
     var check1 =  cleanArray(map0);
  
    var  check2 = check1.filter(function(str) {
         return /\S/.test(str);
     });
  // //console.log(check1)
  // //console.log(check2)
     
      const map1 = check2.map((a) => {
        return (a.split(' ').remove(''))
      });
      // //console.log(map1)
  
       result =  map1.filter(e => e.length);
       console.log(result)
  
       this.setState({
        temperature : 'df'
      })
  // this.state.
      //  this.myfuncForOther()
  
    }


  render() {
 console.log('render')
   
    //console.log(result);
    return ( <div className = "App" >

   
{result != 0 ? < Token value = {  result}/>: null }

    
      {/* < Token value = {
        result
      }
      /> { */}
     
      } 

      {/* {

function myfuncForOther () {
  console.log('iduhu')
  if(result != 0 ){
return(
  < Token value = {
    result
  }
  />
)
  }

}
      } */}

      {console.log('handleChange')}
      <textarea  style={{ height: 200 , width : 400 , marginTop:20}}  onChange={this.handleChange}>
  adad a = 654 ; 
</textarea>
{/* <Br/> */}

<br />
<Button variant="contained" color="primary" onClick={this.completeProcess} >
        Primary 
      </Button>
      
      </div>
    );
  }
}

export default App;