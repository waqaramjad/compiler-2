import React, {
  Component
} from 'react';
// import logo from './logo.svg';
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

    console.log('hy')
    let testInput = `class run { 
    
      int a = 6 ; 
      float //b = 7 ;  
//float sum = a+b; // final 
//float su////m = a+b; // final 
//float sum = a+b; // final 
    
    } ; //
   /
   `

    let splitted = testInput.split("\n")
    console.log(splitted)
    const map0 = splitted.map((a) => {
      var index = a.search('//')
      if (index != 0) {
        var slicePart = a.slice(0, index)
      }
      // if(slicePart=='')
      // slicePart=undefined

      return (slicePart)
    });

    console.log(map0)
    function cleanArray(actual) {
      var newArray = new Array();
      for (var i = 0; i < actual.length; i++) {
        if (actual[i]) {
          newArray.push(actual[i]);
        }
      }
      return newArray;
    }
   var check1 =  cleanArray(map0);
  //  var array = ['1', ' ', 'c'];

  var  check2 = check1.filter(function(str) {
       return /\S/.test(str);
   });
console.log(check1)
console.log(check2)
    // var arr = map0.filter(function (n) {
    //   return n != undefined
    // });

    // console.log(arr)
    const map1 = check2.map((a) => {
      return (a.split(' ').remove(''))
    });
    // var ab = map1.remove('woo')
    console.log(map1)

    var result =  map1.filter(e => e.length);
    console.log(result);

   


    // var myArr = map1.remove([])
    // var myArr =map1.search([])
    // var myArr = cleanArray(map1);
    // console.log(myArr)
    // var map2 = map1.map((a, index)=>{
    //   if(a===''){
    //     a.splice(index-1,1)
    //     return map1
    //   }
    // }
    // )
    // console.log('check '+map2)


    // map.remove('')

    // console.log(map1[2].remove(''))
    // console.log(map1)

    return ( <div className = "App" >
      < Token value = {
        testInput
      }
      /> {
        /* <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p> */
      } </div>
    );
  }
}

export default App;