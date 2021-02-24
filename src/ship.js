import shipImage from '../img/hero.png';
import { Entity } from './entity';

export class Ship extends Entity{
    constructor({removeLife, getOverlappingBullet, removeBullet}){
        super({tag: 'img'});
        this.el.src = shipImage;
        this.SPEED = 2;
        this.SHIP_WIDTH = 50;
        this.canFire = true;
        this.isAlive = true;
        this.removeLife = removeLife;
        this.removeBullet = removeBullet;
        this.getOverlappingBullet = getOverlappingBullet;
        this.spawn();
    }

    spawn(){
        this.isAlive = true;
        this.el.style.opacity = 1;
        this.setX(window.innerWidth/2);
        this.setY(window.innerHeight -80);
    }

    moveRight(){
        if(!this.isAlive) return;
        this.setX(this.x + this.SPEED);
    }
    moveLeft(){
        this.setX(this.x - this.SPEED);
    }

    fire({createBullet}){
        if(this.canFire && this.isAlive){
            this.canFire = false;
            createBullet({
                x: this.x + this.SHIP_WIDTH/2,
                y:this.y,
            })
            setTimeout(()=>{
                this.canFire = true;
            }, 600);
        }
        
        
    }

    kill(){
        this.isAlive = false;

        setTimeout(() =>{
               
             this.spawn();
        }, 3000)
            
        this.el.style.opacity = 0;
    }

    update(){
        const bullet = this.getOverlappingBullet(this);

        if (bullet && bullet.isAlien && this.isAlive){
            //kill ship
            this.removeBullet(bullet);
            this.removeLife();
            this.kill();    
        }
    }
}