// import { Entity } from "./entity";
import {Ship} from './ship';
import { Bullet } from './bullet';
import { Alien } from './alien';
import { Score } from './score';
import { Lives } from './lives';

const scoreGui = new Score();
const livesGui = new Lives();
const ALIEN_COLS = 10;
const ALIEN_ROWS = 3;
const keys = {
    a:false,
    b:false,
    [" "]: false,
}

const bullets = [];

const removeAlien = (alien) =>{
    aliens.splice(aliens.indexOf(alien), 1);
    alien.remove();

    for(let row = 0; row<aliensGrid.length; row++){
        for(let col = 0; col<aliensGrid.length; col++){
            if(aliensGrid[row][col] === alien){
                aliensGrid[row][col] = null;
            }
        }
    }
};
const removeBullet = (bullet) =>{
    bullets.splice(bullets.indexOf(bullet), 1);
    bullet.remove();
};

const isOverlapping = (entity1, entity2) =>{
    const rect1 = entity1.el.getBoundingClientRect();
    const rect2 = entity2.el.getBoundingClientRect();
    return !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
    );
};

const getOverlappingBullet = (entity) =>{
    for(let bullet of bullets){
        if(isOverlapping(entity, bullet)){
            return bullet;
        }
    }
    return null;
};

const aliens  = [];
const aliensGrid = [];

const ship = new Ship({
    removeLife: () => livesGui.removeLife(),
    removeBullet,
    getOverlappingBullet,
});

for(let row = 0; row<3; row++){
    const aliensCol = [];
    for(let col = 0; col<10; col++){
        const alien = new Alien({
            x: col*80 + 300,
            y: row*80 + 30,
            getOverlappingBullet,
            removeAlien,
            removeBullet,
            addToScore: (amount) => scoreGui.addToScore(amount),
        });
        aliens.push(alien);
        aliensCol.push(alien);
    }
    aliensGrid.push(aliensCol);
}

const getBottomAliens = () =>{
    const bottomAliens = [];
    for(let col = 0; col<ALIEN_COLS; col++){
        for(let row = ALIEN_ROWS -1; row>=0; row--){
            if(aliensGrid[row][col]){
                bottomAliens.push(aliensGrid[row][col]);
                break;
            }
        }
    }
    return bottomAliens;
};

const getRandomAlien = (aliensList) =>{
    return aliensList[
        parseInt(Math.random() * aliensList.length)
    ];
};

const aliensFireBullet = () =>{
    const bottomAliens = getBottomAliens();
    const randomAlien = getRandomAlien(bottomAliens);
    //fire bullet from random alien
    createBullet({
        x:randomAlien.x + 15,
        y:randomAlien.y + 30,
        isAlien: true,
    });
};

setInterval(aliensFireBullet, 1500);

const getLeftMostAlien = () =>{
    return aliens.reduce((minimumAlien, currentAlien) =>{
        return currentAlien.x < minimumAlien? currentAlien:minimumAlien;
    });
};

const getRightMostAlien = () =>{
    return aliens.reduce((maximumAlien, currentAlien) =>{
        return currentAlien.x > maximumAlien? currentAlien:maximumAlien;
    });
};

const createBullet = ({x,y, isAlien = false})=>{
    bullets.push(
        new Bullet({
            x, 
            y,
            isAlien
        })
        
    );
};

document.addEventListener('keydown', e =>{
    keys[e.key] = true;
    // console.log(keys);
});

document.addEventListener('keyup', e =>{
    keys[e.key] = false;
    // console.log(keys);
});

const update = () =>{
    if(keys['d'] && ship.x < window.innerWidth - ship.SHIP_WIDTH){
        ship.moveRight();
    }else if(keys['a'] && ship.x > 0){
        ship.moveLeft();
    }

    if(keys[" "]){
        //create a bullet
        ship.fire({
            createBullet,
        });
    }

    ship.update();

    bullets.forEach((bullet)=>{
        bullet.update();

        if(bullet.y< 0){
            bullet.remove();
            bullets.splice(bullets.indexOf(bullet), 1);
        }
    })

    aliens.forEach((alien) =>{
        alien.update();
    });

    const leftMostAlien = getLeftMostAlien();
    if(leftMostAlien.x < 30){
        aliens.forEach((alien) =>{
            alien.setDirectionRight();
            alien.moveDown();
        });
    }
    const rightMostAlien = getRightMostAlien();
    if(rightMostAlien.x > innerWidth -800){
        aliens.forEach((alien) =>{
            alien.setDirectionLeft();
            alien.moveDown();
        });
    }
};

setInterval(update, 20);