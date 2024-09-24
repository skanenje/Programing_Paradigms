export function getArchitects() {
    const allPeople = document.querySelectorAll('body > *');
    const architects = Array.from(allPeople).filter(person => person.tagName.toLowerCase() === 'a');
    const nonArchitects = Array.from(allPeople).filter(person => person.tagName.toLowerCase() !== 'a');
    return [architects, nonArchitects];
  }
  
  export function getClassical() {
    const allArchitects = document.querySelectorAll('a');
    const classicalArchitects = Array.from(allArchitects).filter(architect => architect.classList.contains('classical'));
    const nonClassicalArchitects = Array.from(allArchitects).filter(architect => !architect.classList.contains('classical'));
    return [classicalArchitects, nonClassicalArchitects];
  }
  
  export function getActive() {
    const classicalArchitects = document.querySelectorAll('a.classical');
    const activeClassical = Array.from(classicalArchitects).filter(architect => architect.classList.contains('active'));
    const nonActiveClassical = Array.from(classicalArchitects).filter(architect => !architect.classList.contains('active'));
    return [activeClassical, nonActiveClassical];
  }
  
  export function getBonannoPisano() {
    const bonannoPisano = document.getElementById('BonannoPisano');
    const activeClassical = document.querySelectorAll('a.classical.active');
    const otherActiveClassical = Array.from(activeClassical).filter(architect => architect.id !== 'BonannoPisano');
    return [bonannoPisano, otherActiveClassical];
  }