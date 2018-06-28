import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Token from './Token.js'

class App extends Component {




  
  render() {
    Array.prototype.remove = function() {
      var what, a = arguments, L = a.length, ax;
      while (L && this.length) {
          what = a[--L];
          while ((ax = this.indexOf(what)) !== -1) {
              this.splice(ax, 1);
          }
      }
      return this;
  };

    console.log('hy')
  let  testInput = `num oiu;
    woo //    its
   //awesome oids skdf  sdof sdf jsdf `

let splitted = testInput.split("\n")
console.log(splitted)
// const map1 = splitted.map(a=> a.split(' ').remove(''));
const map0 = splitted.map((a)=>{ 
  var index = a.search('//')
  if(index!=0){
var slicePart = a.slice(0,index-1)
}
// if(slicePart=='')
// slicePart=undefined

  return (slicePart)});

  var arr = map0.filter(function(n){ return n != undefined }); 

  console.log(arr)
const map1 = map0.map((a)=>{
  return (a.split(' ').remove(''))});
 var ab = map1.remove('woo')
console.log(ab)

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
};


var myArr =map1.remove([])
// var myArr =map1.search([])
// var myArr = cleanArray(map1);
console.log(myArr)
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

return (
  <div className="App">
  <Token value={testInput} />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
