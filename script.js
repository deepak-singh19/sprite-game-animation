const canvas= document.getElementById("canvas1");
let playerState="run";
const dropDown= document.getElementById("animations");
dropDown.addEventListener('change', function(e){
    playerState=e.target.value;
})

const ctx = canvas.getContext("2d");

// console.log(ctx);

const CANVAS_WIDTH= canvas.width =600;
const CANVAS_HEIGHT= canvas.height =600;
let x=0;

const spriteWidth=575;
const spriteHeight=523;



let spriteAnimation=[];
const animastionStates=[
{
    name:"idle",
    frames:7,
},
{
    name:"jump",
    frames:7
},
{
    name:"fall",
    frames:7
},
{
    name:"run",
    frames:9
},
{
    name:"dizzy",
    frames:11
},
{
    name:"sit",
    frames:5
},
{
    name:"roll",
    frames:7
},
{
    name:"bite",
    frames:7
},
{
    name:"ko",
    frames:12
},
{
    name:"getHit",
    frames:4
},
];

animastionStates.forEach((state, index)=>{
    let frame={
        loc:[],
    }
    for(let j=0; j<state.frames; j++){
        let positionX= j*spriteWidth;
        let positionY=index*spriteHeight;
        frame.loc.push({x:positionX, y:positionY});
    }
    spriteAnimation[state.name]=frame; 

})

// let frameX=0;
// let frameY=0;

let gameFrame=0;
let staggerFrame=5;

const playerImg= new Image();
playerImg.src= "shadow_dog.png";

function animate(){

    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(50,50,100,100);

    let position=Math.floor(gameFrame/staggerFrame)%spriteAnimation[playerState].loc.length;
    let frameY= spriteAnimation[playerState].loc[position].y;
    let frameX= spriteWidth * position;

    ctx.drawImage(playerImg,frameX,frameY,spriteWidth,spriteHeight, 0,0, spriteWidth, spriteHeight);
    
    
    // if(gameFrame % staggerFrame===0){
    //     if(frameX <6) frameX++;
    // else frameX=0;

    // } Old version
    

    gameFrame++;
    requestAnimationFrame(animate);
}

animate();