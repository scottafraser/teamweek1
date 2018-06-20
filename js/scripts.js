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


// genre functions

function jazz(x) {
  var progression= (x[1] + "," +  x[4] + '7' + "," + x[0]);
  var array = progression.split(',')
  console.log(array);
  var pictures = makePic(array)
  return pictures
};

function rock(x) {
  var progression = (x[0] + "," +  x[3] + "," + x[4]);
  var array = progression.split(',')
  console.log(array);
  var pictures = makePic(array)
  return pictures

}

function blues(x) {
  var progression = (x[0] + '7' + ", " +  x[3] + '7' + ", " + x[4] + '7');
  var array = progression.split(',')
  console.log(array);
  var pictures = makePic(array)
  return pictures

}

function pop(x) {
  var progression = (x[0] + "," +  x[2] + "," + x[3] + "," + x[4]);
  var array = progression.split(',')
  console.log(array);
  var pictures = makePic(array)
  console.log(pictures);
  return pictures
}

// picture functions
function isLower(character) {
  if (character.toLowerCase() === true)
  }

function makePic(x) {
  var pic = []
  for (var i = 0; i < x.length; i++) {
    if (isLower(x) === true){
      pic.push('<img src="img/chords/' + x[i] +'min.svg">');
    } else {
      pic.push('<img src="img/chords/' + x[i] +'.svg">');
    }
  }
  var stringPic = pic.toString();
  var splitPic = stringPic.split(',')
  return splitPic;
}

function shiftPic(x){
  var chord = x.shift()
  return chord
}
// chord functions
function buildMajorChords(key){
  $('#jazzChords').html(jazz(key.majorScale))
  $('#rockChords').html(rock(key.majorScale))
  $('#bluesChords').html(blues(key.majorScale))
  $('#popChords').html(pop(key.majorScale))
}

function buildMinorChords(key){
  $('#jazzChords').html(jazz(key.minorScale))
  $('#rockChords').html(rock(key.minorScale))
  $('#bluesChords').html(blues(key.minorScale))
  $('#popChords').html(pop(key.minorScale))
}

// front end
$(document).ready(function(){

    var keyC = new Key (["C","d","e","F","G","a","b"])
    keyC.findMinorScale();
    var keyDb = new Key (["Db","eb","f","Gb","Ab","bb","c"])
    keyDb.findMinorScale();
    var keyD = new Key (["D","e","f#","G","A","b","#"])
    keyD.findMinorScale();
    var keyEb = new Key (["Eb","f","g","Ab","Bb","c","d"])
    keyEb.findMinorScale();
    var keyE = new Key (["E","f#","g#","A","B","c#","d#"])
    keyE.findMinorScale();
    var keyF = new Key (["F","g","a","Bb","C","d","e"])
    keyF.findMinorScale();
    var keyFsharp = new Key (["F#","g#","a#","B","C#","d#","f"])
    keyFsharp.findMinorScale();
    var keyG = new Key (["G","a","b","C","D","e","f#"])
    keyG.findMinorScale();;
    var keyAb = new Key (["Ab","bb","c","Db","Eb","f","g"])
    keyAb.findMinorScale();
    var keyA = new Key (["A","b","c#","D","E","f#","g#"])
    keyA.findMinorScale();
    var keyBb = new Key (["Bb","c","d","Eb","F","g","a"])
    keyBb.findMinorScale();
    var keyB = new Key (["B","c#","d#","E","F#","g#","a#"])
    keyB.findMinorScale();


  $("#chordButton").click(function() {
    event.preventDefault();

    var key = $('#key').find(":selected").val();
    var scale = $('#major').find(":selected").val();

    if (key === 'keyC' && scale === 'Major') {
      buildMajorChords(keyC)
    } else if (key === 'keyDb' && scale === 'Major') {
      buildMajorChords(keyDb)
    } else if (key === 'keyD' && scale === 'Major') {
      buildMajorChords(keyD)
    } else if (key === 'Eb' && scale === 'Major') {
      buildMajorChords(keyEb)
    } else if (key === 'keyE' && scale === 'Major') {
      buildMajorChords(keyE)
    } else if (key === 'keyF' && scale === 'Major') {
      buildMajorChords(keyF)
    } else if (key === 'keyFsharp' && scale === 'Major') {
      buildMajorChords(keyFsharp)
    } else if (key === 'keyG' && scale === 'Major') {
      buildMajorChords(keyG)
    } else if (key === 'keyAb' && scale === 'Major') {
      buildMajorChords(keyAb)
    } else if (key === 'keyA' && scale === 'Major') {
      buildMajorChords(keyA)
    } else if (key === 'keyBb' && scale === 'Major') {
      buildMajorChords(keyBb)
    } else if (key === 'keyB' && scale === 'Major') {
      buildMajorChords(keyB)
      // minor
    } if (key === 'keyC' && scale === 'Minor') {
      buildMinorChords(keyEb)
    } else if (key === 'keyDb' && scale === 'Minor') {
      buildMinorChords(keyE)
    } else if (key === 'keyD' && scale === 'Minor') {
      buildMinorChords(keyF)
    } else if (key === 'Eb' && scale === 'Minor') {
      buildMinorChords(keyFsharp)
    } else if (key === 'keyE' && scale === 'Minor') {
      buildMinorChords(keyG)
    } else if (key === 'keyF' && scale === 'Minor') {
      buildMinorChords(keyAb)
    } else if (key === 'keyFsharp' && scale === 'Minor') {
      buildMinorChords(keyA)
    } else if (key === 'keyG' && scale === 'Minor') {
      buildMinorChords(keyBb)
    } else if (key === 'keyAb' && scale === 'Minor') {
      buildMinorChords(keyB)
    } else if (key === 'keyA' && scale === 'Minor') {
      buildMinorChords(keyC)
    } else if (key === 'keyBb' && scale === 'Minor') {
      buildMinorChords(keyDb)
    } else if (key === 'keyB' && scale === 'Minor') {
      buildMinorChords(keyD)
    }


  });
});
