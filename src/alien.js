import { Entity } from "./entity";
import alienImage from "../img/enemy.png";

const LEFT = 'left';
const RIGHT = 'right';
const POINTS_PER_KILL = 20;

export class Alien extends Entity{
    constructor({x, y, getOverlappingBullet, removeAlien, removeBullet, addToScore}){
        super({tag: 'img'});
        this.el.src = alienImage;
        this.setX(x);
        this.SPEED = 2.5;
        this.DownSpeed = 30;
        this.setY(y);
        this.direction = LEFT;
        this.getOverlappingBullet = getOverlappingBullet;
        this.removeAlien = removeAlien;
        this.removeBullet = removeBullet;
        this.addToScore = addToScore;
    }

    setDirectionLeft(){
        this.direction = LEFT;
    }
    setDirectionRight(){
        this.direction = RIGHT;
    }

    moveDown(){
        this.setY(this.y + this.DownSpeed);
    }

    update(){
        if(this.direction === LEFT){
            this.setX(this.x - this.SPEED);
        }else{
            this.setX(this.x + this.SPEED);
        }

        //if a bullet hit me, delete the bullet and delete myself

        const bullet = this.getOverlappingBullet(this);

        if (bullet && !bullet.isAlien){
            this.removeAlien(this);
            this.removeBullet(bullet);
            this.addToScore(POINTS_PER_KILL); 
        }
    }

    



}