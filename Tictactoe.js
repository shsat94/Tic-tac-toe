let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let win=document.querySelector(".winner");
let mainbody= document.querySelector("main");
let message= document.querySelector("p");
let newgame=document.querySelector("#new-game");
let chanceO = true;


win.classList.add("none");
let winningSequence= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const disablebox=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const enablebox=()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })

}

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        if(chanceO){
            //player O 
            box.innerText = "O";
            chanceO= false;
        }
        else{
            box.innerText ="X";
            chanceO=true;
        }
        box.disabled=true;

        checkwinner();
        
    })
})

const checkwinner= ()=>{
    for(winner of winningSequence){
        if(boxes[winner[0]].innerText!="" && boxes[winner[1]].innerText!="" && boxes[winner[2]].innerText!="" && boxes[winner[0]].innerText==boxes[winner[1]].innerText && boxes[winner[1]].innerText==boxes[winner[2]].innerText){
            if(chanceO){
                setTimeout(()=>{
                    showwinner("X");
                },500)
                
            }
            else{
                setTimeout(()=>{
                    showwinner("O");
                },500)
                
            }
            disablebox();
        }
    }
}

const showwinner=(winner)=>{
    win.classList.remove("none");
    mainbody.classList.add("none");
    message.innerText=`Winner is the player ${winner}`;
}

const resetgame =()=>{
    enablebox();
    win.classList.add("none");
    mainbody.classList.remove("none");
}

reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);