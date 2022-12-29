let choice=document.querySelectorAll(".choice");
let start=document.querySelector("#start");
let k=0;
let arr=[1, 2, 3];
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let count=0;
let message=document.querySelector("#message");
let comp=0;
let player=0;
let score=document.querySelector("")

function gameover()
{

}
choice.forEach((user) => {
    
    user.disabled=true;
    
    });
    
start.disabled=false;


function play()
{
    choice.forEach((user) => {
    
        user.disabled=false;
        
        });
    if(count==5)
    {
        message.textContent="Game Over";
    }
    
}


function random()
{
    return arr[Math.floor(Math.random())*arr.length];
}

function playround(item)
{
    let u=random();
    if(item==1)
    {
        if(u==1)
        {
            "You both chose rock! They obliterated each other! You tie!";
        }

        else if(u==2)
        {
            "Your rock was smothered by the paper! You lose!";
            comp++;

        }

        else if(u==3)
        {
            "Your rock was smothered by the paper! You win!";
            
        }
    }


}

function dis(item)
{
    item.disabled=true;
}



start.addEventListener('click',play);
rock.addEventListener('click',playround(1));
paper.addEventListener('click',playround(2));
scissors.addEventListener('click',playround(3));
rock.onclick=function()
{
    count++;
}

paper.onclick=function()
{
    count++;
}

rock.onclick=function()
{
    count++;
}
