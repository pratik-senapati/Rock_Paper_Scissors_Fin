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
    start.value="Try Again?";
    start.disabled=false;
    start.removeEventListener('click',play);
    start.style.backgroundColor="#90EE90";
    start.addEventListener('click', function()
    {
        location.reload();
        return;
    })


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

        message.textContent="Click on any of the options to play a round.";
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
            message.style.backgroundColor="#a0d6f7";
            
        }

        else if(u==2)
        {
            message.textContent="Your rock was smothered by the paper! You lose!";
            comp++;
            message.style.backgroundColor="#FFCCCB";

        }

        else if(u==3)
        {
            message.textContent="Your rock was obliterated scissors! You win!";
            player++;
            message.style.backgroundColor="#90EE90";
        }

        score.textContent=`Player: ${player} Computer: ${comp}` ;
        ;
    }

    else if(item==2)
    {
        if(u==2)
        {
            message.textContent="You both chose paper! They strangled each other! You tie!";
            message.style.backgroundColor="#a0d6f7";
        }

        else if(u==3)
        {
            message.textContent="Your paper was eviscerated by the scissors ! You lose!";
            comp++;
            message.style.backgroundColor="#FFCCCB";

        }

        else if(u==1)
        {
            message.textContent="Your paper strangled the rock! You win!";
            player++;
            message.style.backgroundColor="#90EE90";
            
        }
        score.textContent=`Player: ${player} Computer: ${comp}` ;
        
    }
    else if(item==3)
    {
        if(u==3)
        {
            message.textContent="You both chose scissors! They eviscerated each other! You tie!";
            message.style.backgroundColor="#a0d6f7";
        }

        else if(u==2)
        {
            message.textContent="Your scissors was obliterated by the rock! You lose!";
            comp++;
            message.style.backgroundColor="#FFCCCB";

        }

        else if(u==3)
        {
            message.textContent="Your rock eviscerated the paper! You win!";
            player++;
            message.style.backgroundColor="#90EE90";
        }
        score.textContent=`Player: ${player} Computer: ${comp}` ;
       
    }

    if(player==5)
    {

    }
    if(player==5 || comp==5)
    {
        if(player==5)
        {
            message.textContent="YOU WIN!";
            gameover();
            return;
        }
        else if(comp==5)
        {
            message.textContent="YOU LOSE!";
            gameover();
            return;
        }
    
    }
    return;

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


