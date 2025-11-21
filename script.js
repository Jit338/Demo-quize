let count = 0;
let timer = document.getElementById("timer");
let char =0;
let col =":";
let s0= 0;
const interval = setInterval(() => {
    timer.innerText = char+col+s0;
    count++;
    if(count>8){s0="";}
    timer.innerText = timer.innerText + count;

    if (count === 59) {
        count=-1;
        s0=0
        char++;
    }
}, 1000); // runs every 1 second





let options=[["String","Integer","Undefined","Float"],["getElementById()","getElementsByName","querySelector","createElement"],["if","for","while","switch"],["click","hover","keydown","press"],["let","val","new","func"]];
let rel_ans= [[0,-1,2,-1],[0,-1,2,-1],[-1,1,2,-1],[0,-1,2,-1],[0,-1,2,-1]];
let question = ["Which of the following are valid JavaScript data types?",
  "Which of these methods can be used to select an HTML element in JavaScript?",
  "Which of the following are looping structures in JavaScript?",
  "Which of the following event types are valid DOM events?",
  "Which of these are JavaScript keywords?"
];

let option = document.getElementsByClassName("option");

function show(a){
    document.getElementById("text").innerText = question[a];
    let q = ['A','B','C','D'];
    for(let i=0;i<4;i++){
        option[i].innerText= q[i] + ". "+options[a][i];
    }
}

show(0);
let ans = [-1,-1,-1,-1];
let qn=0;
let number = document.getElementById("number");
let submit = document.getElementById("submit");
let container = document.getElementById("container");

for(let i=0;i<4;i++){
    option[i].onclick=()=>{
        if(option[i].style.backgroundColor==''){
            option[i].style.backgroundColor = "rgb(169, 169, 241)";
            ans[i]=i;
        }else{
            option[i].style.backgroundColor = "";
            ans[i]=-1;
        }
    };
};

let check = document.getElementById("check");
let score = document.getElementById("score");
let next = document.getElementById("next");
let is_checked = 0;
let p =0;
let k =0;
check.onclick=()=>{
    is_checked=1;
    let is_correct=1;
    for(let i=0;i<4;i++){
        if(rel_ans[k][i]!=ans[i]){
            option[i].style.backgroundColor="red";
            is_correct = 0;
        }else if(rel_ans[k][i]==ans[i] && ans[i]!=-1){
            option[i].style.backgroundColor="lightgreen";
        }
    };

    for(let i=0;i<4;i++){
        if(rel_ans[k][i]!=-1){
            option[i].style.backgroundColor = "lightgreen";
        }
    }

    if(is_correct==1){
        p+=10;
        score.innerText = "score = " + p;
    }
    k++;
    
};

next.onclick=()=>{
    ans=[-1,-1,-1,-1];
    is_checked=0;
    qn++;
    if(qn+1==5){
        next.style.visibility = "hidden";
        submit.style.visibility = "visible";
    }
    number.innerText=(qn+1) +"/5";
    show(qn);
    for(let i=0;i<4;i++){
        option[i].style.backgroundColor = "";
    }
};

submit.onclick=()=>{
    container.innerText = "";
    let str = `Your Score is = ${p}`;
    container.innerHTML = `<h2 style="color: blue;">${str}</h2>`;
};
