let container = document.querySelectorAll("#buttons")[0]
container.onclick = function(event) {
    let target = event.target; // where was the click?
    console.log(target.lastElementChild.textContent);
    let key = target.lastElementChild.textContent
    var piano = Synth.createInstrument('piano');
    piano.play(key[0], Number(key[1]), 2);
  }