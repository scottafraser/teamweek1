function Key (scale, major, minor) {
  this.scale = scale
  this.major = major;
  this.minor = minor;
}


Key.prototype.majorPopChords = function() {
  this.major =  this.scale.slice(0,1) + "," + this.scale.slice(3,4) + "," + this.scale.slice(4,5);
  return this.major
}

Key.prototype.minorChords = function() {
  this.minor =  this.scale.slice(5,6) + "," + this.scale.slice(3,4) + "," + this.scale.slice(2,3);
  return this.minor
}

Key.prototype.minorScale = function() {
  var minor = this.scale.splice(5,7)
  var minorScale = minor + "," + this.scale
  return minorScale
}

function jazz(x) {
  var jazzProg = (x[1] + 'min' + "," +  x[4] + 'maj7' + "," + x[0] + 'maj');
  return jazzProg
}


$(document).ready(function(){

var keyC = new Key (["C","D","E","F","G","A","B"])
keyC.majorPopChords();
keyC.minorChords();
var keyDb = new Key (["Db","Eb","F","Gb","Ab","Bb","C"])
keyDb.majorPopChords();
keyDb.minorChords();
var keyD = new Key (["D","E","F#","G","A","B","C#"])
keyD.majorPopChords();
keyD.minorChords();
var keyEb = new Key (["Eb","F","G","Ab","Bb","C","D"])
keyEb.majorPopChords();
keyEb.minorChords();
var keyE = new Key (["E","F#","G#","A","B","C#","D#"])
keyE.majorPopChords();
keyE.minorChords();
var keyF = new Key (["F","G","A","Bb","C","D","E"])
keyF.majorPopChords();
keyF.minorChords();
var keyFsharp = new Key (["F#","G#","A#","B","C#","D#","F"])
keyFsharp.majorPopChords();
keyFsharp.minorChords();
var keyG = new Key (["G","A","B","C","D","E","F#"])
keyG.majorPopChords();
keyG.minorChords();
var keyAb = new Key (["Ab","Bb","C","Db","Eb","F","G"])
keyAb.majorPopChords();
keyAb.minorChords();
var keyA = new Key (["A","B","C#","D","E","F#","G#"])
keyA.majorPopChords();
keyA.minorChords();
var keyBb = new Key (["Bb","C","D","Eb","F","G","A"])
keyBb.majorPopChords();
keyBb.minorChords();
var keyB = new Key (["B","C#","D#","E","F#","G#","A#"])
keyB.majorPopChords();
keyB.minorChords();

});
