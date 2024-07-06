let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let turnO = true;

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        }else{
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled  = true;

        checkWinner();
    });
});



function showWinner(winner){
    msgContainer.classList.remove("hide");
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    disableAllBoxes();
};

function checkWinner(){
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;


        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2===pos3){
                showWinner(pos1);
                
            }
        }
        
    }    
};

function disableAllBoxes(){
    for(let box of boxes){
        box.disabled = true;
    }
};

function reset(){
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

function enableBoxes(){
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
};

newGame.addEventListener("click", reset);
resetGame.addEventListener("click", reset);