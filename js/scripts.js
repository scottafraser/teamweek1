function Key (majorScale, minorScale) {
  this.majorScale = majorScale
  this.minorScale = minorScale;
}

function Chords (majorChords,minorchords) {
  this.majorChords = ['I','ii','iii','IV','V','vii','viii']
  this.minorChords = []
}

Key.prototype.findMinorScale = function() {
  var minorArray = []
  var minorSplice = this.majorScale.slice(5,7)
  minorArray.push(minorSplice + "," + this.majorScale.slice(0,5))
  var stringArray = minorArray.toString()
  this.minorScale = stringArray.split(',')
}


function jazz(x) {
  var jazzProg = (x[1] + 'min' + "," +  x[4] + 'maj7' + "," + x[0] + 'maj');
  var jazzArray = jazzProg.split(',')
  var pictures = makePic(jazzArray)
  return pictures
};

function rock(x) {
  var rockProg = (x[0] + "," +  x[3] + "," + x[4]);
  var rockArray = rockProg.split(',')
  var pictures = makePic(rockArray)
  console.log(pictures);
  return pictures

}

function blues(x) {
  var bluesProg = (x[0] + 'maj7' + ", " +  x[3] + 'maj7' + ", " + x[4] + 'maj7');
  return bluesProg

}

function pop(x) {
  var popProg = (x[0] + 'maj' + "," +  x[2] + 'min' + "," + x[3] + 'maj' + "," + x[4] + 'maj');
  return popProg
}

function makePic(x) {
  var pic = []
  for (var i = 0; i < x.length; i++) {
  pic.push('<img src="img/' + x[i] +'.png">');
  }
  var stringPic = pic.toString();
  var splitPic = stringPic.split(',')
  return splitPic;
}

function shiftPic(x){
  var chord = x.shift()
  return chord
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


  $("#chordButton").click(function() {
    event.preventDefault();

      var key = $('#key').find(":selected").val();
      var scale = $('#major').find(":selected").val();
      console.log(rock(keyC.majorScale));
      var progression = rock(keyC.majorScale);
      console.log(progression);
      var chord1 = shiftPic(progression)
      var chord2 = shiftPic(progression)
      var chord3 = shiftPic(progression)
      console.log(chord1 + chord2 + chord3);



    if (key === 'keyC' && scale === 'majorScale') {
      $('#jazzChords').append(jazz(keyC.majorScale) + '<br>')
      $('#rockChords').html(chord1 + chord2 + chord3)
      // $('#rockChords').append(rock(keyC.majorScale) + '<br>')
      $('#showChords').append(blues(keyC.majorScale)+ '<br>')
      $('#showChords').append(pop(keyC.majorScale)+ '<br>')
    } else if (key === 'keyDb' && scale === 'majorScale') {
      $('#showChords').append(jazz(keyDb.majorScale))
      $('#showChords').append(rock(keyDb.majorScale))
      $('#showChords').append(blues(keyDb.majorScale))
      $('#showChords').append(pop(keyDb.majorScale))
    } else if (key === 'keyD' && scale === 'majorScale') {
      $('#showChords').append(jazz(keyD.majorScale))
      $('#showChords').append(rock(keyD.majorScale))
      $('#showChords').append(blues(keyD.majorScale))
      $('#showChords').append(pop(keyD.majorScale))
    } else if (key === 'Eb' && scale === 'majorScale') {
      $('#showChords').append(jazz(Eb.majorScale))
      $('#showChords').append(rock(Eb.majorScale))
      $('#showChords').append(blues(Eb.majorScale))
      $('#showChords').append(pop(Eb.majorScale))
    } else if (key === 'keyE' && scale === 'majorScale') {
      $('#showChords').append(jazz(keyE.majorScale))
      $('#showChords').append(rock(keyE.majorScale))
      $('#showChords').append(blues(keyE.majorScale))
      $('#showChords').append(pop(keyE.majorScale))
    } else if (key === 'keyF' && scale === 'majorScale') {
      $('#showChords').append(jazz(keyF.majorScale))
      $('#showChords').append(rock(keyF.majorScale))
      $('#showChords').append(blues(keyF.majorScale))
      $('#showChords').append(pop(keyF.majorScale))
    } else if (key === 'keyFsharp' && scale === 'majorScale') {
      $('#showChords').append(jazz(keyFsharp.majorScale))
      $('#showChords').append(rock(keyFsharp.majorScale))
      $('#showChords').append(blues(keyFsharp.majorScale))
      $('#showChords').append(pop(keyFsharp.majorScale))
    } else if (key === 'keyG' && scale === 'majorScale') {
      $('#showChords').append(jazz(keyG.majorScale))
      $('#showChords').append(rock(keyG.majorScale))
      $('#showChords').append(blues(keyG.majorScale))
      $('#showChords').append(pop(keyG.majorScale))
    }


  });
});
