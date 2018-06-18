function Key (majorScale, minorScale) {
  this.majorScale = majorScale
  this.minorScale = minorScale;
}

Key.prototype.findMinorScale = function() {
  var minorArray = []
  var minorSplice = this.majorScale.slice(5,7)
  minorArray.push(minorSplice + "," + this.majorScale.slice(0,5))
  var stringArray = minorArray.toString()
  this.minorScale = stringArray.split(',')
}


// Key.prototype.majorPopChords = function() {
//   this.major =  this.majorScale.slice(0,1) + "," + this.majorScale.slice(3,4) + "," + this.majorScale.slice(4,5);
//   return this.major
// }
//
// Key.prototype.minorChords = function() {
//   this.minorScale =  this.majorScale.slice(5,6) + "," + this.majorScale.slice(3,4) + "," + this.majorScale.slice(2,3);
//   return this.minorScale
// }


function jazz(x) {
  var jazzProg = (x[1] + 'min' + "," +  x[4] + 'maj7' + "," + x[0] + 'maj');
  return jazzProg
}

function rock(x) {
  var rockProg = (x[0] + 'maj' + "," +  x[3] + 'maj' + "," + x[4] + 'maj');
  return rockProg
}



$(document).ready(function(){

var keyC = new Key (["C","D","E","F","G","A","B"])
keyC.findMinorScale();
var keyDb = new Key (["Db","Eb","F","Gb","Ab","Bb","C"])
keyDb.findMinorScale();
var keyD = new Key (["D","E","F#","G","A","B","C#"])
keyD.findMinorScale();
var keyEb = new Key (["Eb","F","G","Ab","Bb","C","D"])
keyEb.findMinorScale();
var keyE = new Key (["E","F#","G#","A","B","C#","D#"])
keyE.findMinorScale();
var keyF = new Key (["F","G","A","Bb","C","D","E"])
keyF.findMinorScale();
var keyFsharp = new Key (["F#","G#","A#","B","C#","D#","F"])
keyFsharp.findMinorScale();
var keyG = new Key (["G","A","B","C","D","E","F#"])
keyG.findMinorScale();;
var keyAb = new Key (["Ab","Bb","C","Db","Eb","F","G"])
keyAb.findMinorScale();
var keyA = new Key (["A","B","C#","D","E","F#","G#"])
keyA.findMinorScale();
var keyBb = new Key (["Bb","C","D","Eb","F","G","A"])
keyBb.findMinorScale();
var keyB = new Key (["B","C#","D#","E","F#","G#","A#"])
keyB.findMinorScale();

});
