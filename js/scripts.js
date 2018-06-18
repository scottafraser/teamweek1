function Key (scale, major, minor) {
  this.scale = scale
  this.major = major
  this.minor = minor;
}
//
// Key.prototype.scales = function () {
//   return this.scale;
// };


Key.prototype.major = function() {
  var majorScale = []
  majorScale =  this.scale.slice(0,1) + this.scale.slice(3,4) + this.scale.slice(4,5)
  this.major.push(majorScale)
  return this.major
}

// Key.prototype.minor = function() {
//   var minorArray = []
//   this.minor =  this.Key.slice(5]) + this.Key.slice([1]) + this.Key.slice([2])
//   this.minor
// }
$(document).ready(function)(){


var keyC = new Key (["C","D","E","F","G","A","B"], this.major, this.minor)
var keyDb = new Key (["Db","Eb","F","Gb","Ab","Bb","C"])
var keyD = new Key (["D","E","F#","G","A","B","C#"])
var keyEb = new Key (["Eb","F","G","Ab","Bb","C","D"])
var keyE = new Key (["E","F#","G#","A","B","C#","D#"])
var keyF = new Key (["F","G","A","Bb","C","D","E"])
var keyF# = new Key (["F#","G#","A#","B","C#","D#","F"])
var keyG = new Key (["G","A","B","C","D","E","F#"])
var keyAb = new Key (["Ab","Bb","C","Db","Eb","F","G"])
var keyA = new Key (["A","B","C#","D","E","F#","G#"])
var keyBb = new Key (["Bb","C","D","Eb","F","G","A"])
var keyB = new Key (["B","C#","D#","E","F#","G#","A#"])


function major(){
var majorScale = []
majorScale =  keyC.slice(0,1) + keyC.slice(3,4) + keyC.slice(4,5)
console.log(majorScale);
}


keyC [0] + keyC [3] + keyC [4]
keyC [5] + keyC [1] + keyC [2]

});

// ["A","B","C","D","E","F","G"]
//
