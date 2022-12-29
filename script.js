let choice=document.querySelectorAll(".choice");
let start=document.querySelector("#start");
let k=0;
let arr=[1, 2, 3];
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let message=document.querySelector("#message");
let comp=0;
let player=0;
let score=document.querySelector("#score");

function gameover()
{
    choice.forEach((user) => {
    
        user.disabled=true;
        
        });
    

};
choice.forEach((user) => {
    
    user.disabled=true;
    
    });
    
start.disabled=false;


function play()
{
    choice.forEach((user) => {
    
        user.disabled=false;
        
        });
    
};


function random()
{
    return arr[Math.floor(Math.random()*3)];
}

function playround(item)
{
    start.disabled=true;
    let u=random();
    score.className="choice";
    if(item==1)
    {
        if(u==1)
        {
            message.textContent="You both chose rock! They obliterated each other! You tie!";
            
        }

        else if(u==2)
        {
            message.textContent="Your rock was smothered by the paper! You lose!";
            comp++;

        }

        else if(u==3)
        {
            message.textContent="Your rock was obliterated scissors! You win!";
            player++;
        }

        score.textContent=`Player: ${player} Computer: ${comp}` ;
    }

    else if(item==2)
    {
        if(u==2)
        {
            message.textContent="You both chose paper! They strangled each other! You tie!";
        }

        else if(u==3)
        {
            message.textContent="Your paper was eviscerated by the scissors ! You lose!";
            comp++;

        }

        else if(u==1)
        {
            message.textContent="Your paper strangled the rock! You win!";
            player++;
        }
        score.textContent=`Player: ${player} Computer: ${comp}` ;
    }
    else if(item==3)
    {
        if(u==3)
        {
            message.textContent="You both chose scissors! They eviscerated each other! You tie!";
        }

        else if(u==2)
        {
            message.textContent="Your scissors was obliterated by the rock! You lose!";
            comp++;

        }

        else if(u==3)
        {
            message.textContent="Your rock eviscerated the paper! You win!";
            player++;
        }
        score.textContent=`Player: ${player} Computer: ${comp}` ;
    }


};

function dis(item)
{
    item.disabled=true;
};



start.addEventListener('click',play);
rock.addEventListener('click',function()
{
    playround(1);
}
);

paper.addEventListener('click',function()
{
    playround(2);
}
);

scissors.addEventListener('click',function()
{
    playround(3);
}
);

if(player==5 || comp==5)
{
    console.log("hi");
    message.textContent="Game Over";
    gameover();
}
