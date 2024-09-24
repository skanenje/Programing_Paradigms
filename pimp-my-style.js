
const styles = [
  'one', 'two', 'three', 'four', 'five', 
  'six', 'seven', 'eight', 'nine', 'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'
];
let currentIndex = 0;
let isRemoving = false;

export function pimp() {
    const button = document.querySelector('.button');
    
    if (!isRemoving) {
        // Adding classes
        if (currentIndex < styles.length) {
            button.classList.add(styles[currentIndex]);
            currentIndex++;
            
            // If we've added all classes, add 'unpimp' and prepare to start removing
            if (currentIndex === styles.length) {
                button.classList.add('unpimp');
                isRemoving = true;
            }
        }
    } else {
        // Removing classes
        currentIndex--;
        button.classList.remove(styles[currentIndex]);
        
        // If we've removed all classes, remove 'unpimp' and prepare to start adding again
        if (currentIndex === 0) {
            button.classList.remove('unpimp');
            isRemoving = false;
        }
    }
}