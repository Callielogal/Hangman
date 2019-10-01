window.onload = function () {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
          'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
          't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
    let word ;              
    let guess ;             
    let guesses = [ ];      
    let lives ;             
    let counter ;           
    let space;              
  
    let showLives = document.getElementById("tries");
  
    // Buttons creation
    let buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (let i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
  
     result = function () {
      wordHolder = document.getElementById('word_guess');
      correct = document.createElement('ul');
  
      for (let i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
  
    // Show guesses
    comments = function () {
      showLives.innerHTML = "Il te reste " + lives + " vies";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (let i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
  
    let animate = function () {
      let drawMe = lives ;
      drawArray[drawMe]();
    }
  
  
    // Canvas display
    canvas =  function(){
  
      myStickman = document.getElementById("canvas");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.strokeStyle = "#731f02";
      context.lineWidth = 2;
    };
  
    head = function(){
      myStickman = document.getElementById("canvas");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
  
    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke();
    }
  
    frame1 = function() {
      draw (0, 150, 150, 150);
    };
  
    frame2 = function() {
      draw (10, 0, 10, 600);
    };
  
    frame3 = function() {
      draw (0, 5, 70, 5);
    };
  
    frame4 = function() {
      draw (60, 5, 60, 15);
    };
  
    torso = function() {
      draw (60, 36, 60, 70);
    };
  
    rightArm = function() {
      draw (60, 46, 100, 50);
    };
  
    leftArm = function() {
      draw (60, 46, 20, 50);
    };
  
    rightLeg = function() {
      draw (60, 70, 100, 100);
    };
  
    leftLeg = function() {
      draw (60, 70, 20, 100);
    };
  
    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];
  
    // Onclick
    check = function () {
      list.onclick = function () {
        let essai = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (let i = 0; i < word.length; i++) {
          if (word[i] === essai) {
            guesses[i].innerHTML = essai;
            counter += 1;
          }
        }
        let j = (word.indexOf(essai));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
  
  
    // Game
    play = function () {
      words = ['javascript', 'formation', 'hangman', 'misere', 'ecf','suicide','canvas', 'programmation', 'coding','symfony','vendetta', 'migraine', 'angular', 'espoir','inspiration', 'pokemon']
      let randNum = Math.floor(Math.random() * words.length);
        word = words[randNum];
      console.log(word);
      buttons();
        
      guesses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      canvas();
      if(lives === 0){
        return onload();
      }
    }
  
    play();
  
    // Reset
    document.getElementById('reset').onclick = function restart() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      context.clearRect(0, 0, 400, 400);
      play();
  }
}