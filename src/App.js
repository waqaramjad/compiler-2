import React, {
  Component
} from 'react';
import './App.css';
import Token from './Token.js'

class App extends Component {





  render() {
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
   
//    `
    let testInput = `  
    adad  a =  4545 ; 
    nuqta   g =  45450.5 ; 
    agar  ( a >= v ) {
      adad  g = 45450 ; 
    }
    warnaTo {
      adad  g = 45450 ; 
}
    warna ohi {
            adad  g = 45450 ; 
    }
    do {
      adad  934y  g = 45450 ; =  
    } wloop (  a >= v )
    wloop ( a >= f  ) {
      adad  g = 45450 ; 
    }
    func myfunc ( lahore  ) {
      adad  g = 45450 ; 
    }
    
   
    .
   `

    let splitted = testInput.split("\n")

    // console.log(splitted)
    const map0 = splitted.map((a) => {
      var index = a.search('//')
      // console.log(index+'foot')
      if (index != 0&& index!=-1) {
        var slicePart = a.slice(0, index)
      }
      else if(index==-1){
        var slicePart = a ;
      } 
    
      return (slicePart)
    });
    // console.log(map0)

    // console.log(map0)
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
// console.log(check1)
// console.log(check2)
   
    const map1 = check2.map((a) => {
      return (a.split(' ').remove(''))
    });
    // console.log(map1)

    var result =  map1.filter(e => e.length);
    console.log(result);
    return ( <div className = "App" >
      < Token value = {
        result
      }
      /> {
     
      } </div>
    );
  }
}

export default App;