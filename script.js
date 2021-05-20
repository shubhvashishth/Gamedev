var score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700)
    }
    if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        moved=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = moved + 150 + "px";
    }

    // this statement inspite of written left is used for moving the dino to right
    if(e.keyCode == 37){
        dino = document.querySelector('.dino');
        moved=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (moved - 150) + "px";
    }
}

setInterval(() => {
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetx = Math.abs(dx-ox);
    offsety = Math.abs(dy-oy);
    console.log(offsetx,offsety);

    // my gameover condition  
    if(offsetx<80 && offsety<52){
        gameover.innerHTML = 'Game Over-Reload to start';
        obstacle.classList.remove('obstacleAni');
    }
    
    else if( offsetx<145 && cross){
        score+=1;
        updateScore(score);
        cross =false;
        setTimeout(() => {
            cross =true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.03;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);
    }



}, 10);


function updateScore(score){
     scoreContainer.innerHTML = "Your score:" + score;
}




