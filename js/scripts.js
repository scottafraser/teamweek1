function Key (scale, major, minor) {
  this.scale = scale
  this.major = major;
  this.minor = minor;
}


Key.prototype.majorChords = function() {
  this.major =  this.scale.slice(0,1) + "," + this.scale.slice(3,4) + "," + this.scale.slice(4,5);
  return this.major
}

Key.prototype.minorChords = function() {
  this.minor =  this.scale.slice(5,6) + "," + this.scale.slice(3,4) + "," + this.scale.slice(2,3);
  return this.minor
}


$(document).ready(function(){

var keyC = new Key (["C","D","E","F","G","A","B"])
keyC.majorChords();
keyC.minorChords();
var keyDb = new Key (["Db","Eb","F","Gb","Ab","Bb","C"])
keyDb.majorChords();
keyDb.minorChords();
var keyD = new Key (["D","E","F#","G","A","B","C#"])
keyD.majorChords();
keyD.minorChords();
var keyEb = new Key (["Eb","F","G","Ab","Bb","C","D"])
keyEb.majorChords();
keyEb.minorChords();
var keyE = new Key (["E","F#","G#","A","B","C#","D#"])
keyE.majorChords();
keyE.minorChords();
var keyF = new Key (["F","G","A","Bb","C","D","E"])
keyF.majorChords();
keyF.minorChords();
var keyFsharp = new Key (["F#","G#","A#","B","C#","D#","F"])
keyFsharp.majorChords();
keyFsharp.minorChords();
var keyG = new Key (["G","A","B","C","D","E","F#"])
keyG.majorChords();
keyG.minorChords();
var keyAb = new Key (["Ab","Bb","C","Db","Eb","F","G"])
keyAb.majorChords();
keyAb.minorChords();
var keyA = new Key (["A","B","C#","D","E","F#","G#"])
keyA.majorChords();
keyA.minorChords();
var keyBb = new Key (["Bb","C","D","Eb","F","G","A"])
keyBb.majorChords();
keyBb.minorChords();
var keyB = new Key (["B","C#","D#","E","F#","G#","A#"])
keyB.majorChords();
keyB.minorChords();

});
