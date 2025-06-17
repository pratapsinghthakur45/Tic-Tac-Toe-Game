let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer =  document.querySelector(".msg-cntr");
let msg = document.querySelector("#msg");


const winingPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

let turn = true;


boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn === true){
             box.innerText = "X";
             turn = false;
             box.disabled = true;
        }else{
            box.innerText = "O";
            turn = true;
            box.disabled = true;
        }
        checkWinner();
    });
});

newBtn.addEventListener("click",()=>{
    enableBoxes();
    turn = true;
    msgContainer.classList.add("hide");
});

resetBtn.addEventListener("click",()=>{
    enableBoxes();
    turn = true;
    msgContainer.classList.add("hide");
})

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
         msg.innerText = `congradulation! winner is ${winner}`;
         msgContainer.classList.remove("hide");
         disableBoxes();
}

const checkWinner = () =>{
    let isWinnerFound = false;
          for(pattern of winingPattern){
               let post1 = boxes[pattern[0]].innerText;
               let post2 = boxes[pattern[1]].innerText;
               let post3 = boxes[pattern[2]].innerText;

                if(post1 != "" && post2 !="" && post3 != ""){
                    if(post1===post2 && post2 === post3){
                      showWinner(post1);
                      isWinnerFound = true;
                      return; // Exit early if winner is found
                    }
                }
            }
            // Check for draw only if no winner
    let allFilled = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled && !isWinnerFound) {
        showDraw();  // Call a function to show draw message
    }
};

const showDraw = () => {
    msg.innerText = `It's a Draw!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
