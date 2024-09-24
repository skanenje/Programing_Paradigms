export function build(numberOfBricks) {
    let brickCount = 0;
  
    const buildInterval = setInterval(() => {
      if (brickCount >= numberOfBricks) {
        clearInterval(buildInterval);
        return;
      }
      
      const brick = document.createElement('div');
      brick.id = `brick-${brickCount + 1}`;
      
      if ((brickCount + 1) % 3 === 2) {
        brick.dataset.foundation = 'true';
      }
      
      document.body.appendChild(brick);
      
      brickCount++;
    }, 100);
  }
  export function repair(...ids) {
    ids.forEach(id => {
      const brick = document.getElementById(id);
      
      if (!brick) {
        console.warn(`Brick with id ${id} not found`);
        return;
      }
      
      if (brick.dataset.foundation === 'true') {
        brick.dataset.repaired = 'in progress';
      } else {
        brick.dataset.repaired = 'true';
      }
    });
  }
  export function destroy() {
    const lastBrick = document.querySelector('div[id^="brick-"]:last-child');
    
    if (lastBrick) {
      lastBrick.remove();
    } else {
      console.warn('No bricks left to destroy');
    }
  }