export function generateLetters() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (let i = 0; i < 120; i++) {
      const div = document.createElement('div');
  
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      const randomLetter = alphabet[randomIndex];
      div.textContent = randomLetter;
  
      const fontSize = 11 + (119 / 119) * i;
      div.style.fontSize = `${fontSize}px`;
  
      let fontWeight;
      if (i < 40) {
        fontWeight = 300;
      } else if (i < 80) {
        fontWeight = 400;
      } else {
        fontWeight = 600;
      }
      div.style.fontWeight = fontWeight;
  
      document.body.appendChild(div);
    }
  }

generateLetters();
