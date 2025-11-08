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




let qn = document.getElementById("number");
let text = document.getElementById("text");
let options=[["String","Integer","Undefined","Float"],["getElementById()","getElementsByName","querySelector","createElement"],["if","for","while","switch"],["click","hover","keydown","press"],["let","val","new","func"]];

let question = ["Which of the following are valid JavaScript data types?",
  "Which of these methods can be used to select an HTML element in JavaScript?",
  "Which of the following are looping structures in JavaScript?",
  "Which of the following event types are valid DOM events?",
  "Which of these are JavaScript keywords?"];

text.innerText="Q."+question[0];
let ans = [[0,2],[0,2],[1,2],[0,2],[0,2]];
let number=['A.','B.','C.','D.'];
let y=0;
let z=1;

let option = document.querySelectorAll(".option");
let btn = document.querySelectorAll(".btn");
let is_checked = 0;
let point = 0;
btn[2].innerText += point;
let next = btn[3];

let a=-1,b=-1,p=-1,q=-1,c=1,n=1;
let is_wrong=0;

function show(){
    for(let i=0;i<4;i++){
        option[i].innerText="";
        option[i].innerText = number[i]+options[y][i];
        option[i].style.backgroundColor="";
        option[i].style="";
    }
}


function increase(k){
    option[k].style.height= "27px";
    option[k].style.width= "220px";
    option[k].style.marginBottom= "1px";
    option[k].style.marginTop= "1px";
}

function ans_marked(k){
    option[k].style.width="190px"
    option[k].style.borderRightWidth="20px"
    option[k].style.borderRightColor="rgb(1, 182, 59)"
    option[k].style.clipPath="inset(0 round 12px)"
    increase(k);
}

function err_marked(k){
    option[k].style.width="190px"
    option[k].style.borderRightWidth="20px"
    option[k].style.borderRightColor="red"
    option[k].style.clipPath="inset(0 round 12px)"
    increase(k);
}

function checked(a,b){
    if(is_checked==0){
        let c;
        for(let i=1;i<=n;i++){
            if(i==1){
                c=a;
                if(b!=-1){
                    n=2;
                }
            }
            else if(n==2){
                c=b;
                if(p!=-1){
                    n=3;
                }
            }
            else if(n==3){
                c=p;
                if(q!=-1){
                    n=4;
                }
            }
            else if(n==4){
                c=q;
            }

            for(let j=0;j<3;j++){

                if(c==ans[y][j] && j!=2){
                    if(option[c].innerText==number[c]+options[y][c]){
                        ans_marked(c);
                        option[c].innerText+= "✓";
                        // is_wrong=0;
                        break;
                    }else{
                        option[c].innerText=number[c]+options[y][c];
                        option[c].style="";
                        option[c].innerText+= "✓";
                        ans_marked(c);
                        // is_wrong=0;
                        break;
                    }
                }else if(c!=ans[y][j] && j!=2){
                    if(option[c].innerText != number[c]+options[y][c]+"✕"){
                        option[c].innerText+="✕";
                        err_marked(c);
                        // is_wrong++;
                    }
                }
                else if(j==2){
                    if(option[ans[y][0]].innerText!=number[0]+options[y][0]+"✓" && option[ans[y][0]].innerText!=number[0]+options[y][0]+"✕"){
                        ans_marked(ans[y][0]);
                    }
                    if(option[ans[y][1]].innerText!=number[0]+options[y][1]+"✓" && option[ans[y][1]].innerText!=number[0]+options[y][1]+"✕"){
                        ans_marked(ans[y][1]);
                    }
                }
            }

            if(n==1){
                if(option[ans[y][0]].innerText!=number[ans[y][0]]+options[y][0]+"✓" && option[ans[y][0]].innerText!=number[ans[y][0]]+options[y][0]+"✕"){
                    ans_marked(ans[y][0]);
                }
                if(option[ans[y][1]].innerText!=number[ans[y][1]]+options[y][1]+"✓" && option[ans[y][1]].innerText!=number[ans[y][1]]+options[y][1]+"✕"){
                    ans_marked(ans[y][1]);
                }
            }

        }

        for(let l=0;l<4;l++){
            if(option[l].innerText==number[l]+options[y][l]+"✕"){is_wrong=1;}
        }

        if(option[ans[y][0]].innerText==number[ans[y][0]]+options[y][ans[y][0]]+"✓"  &&  option[ans[y][1]].innerText==number[ans[y][1]]+options[y][ans[y][1]]+"✓" && is_wrong===0){
            btn[2].innerText = "Score=";
            point+=10;
            btn[2].innerText = btn[2].innerText + point;
        }

        is_checked++;
    }
}

function arr(k){
    console.log(k);
    if(c==1){a=k;}
    else if(c==2){b=k;}
    else if(c==3){p=k;}
    else if(c==4){q=k;}
    c++;
    increase(k);
}

function colored(){
    for(let k=0;k<4;k++){
        option[k].onclick=()=>arr(k);
    }
}


function deColored(){
    for(let k=0;k<4;k++){
        option[k].onclick=null;
    }
}

show();
colored();

function upgrade(){
    if(a!=-1 && b!=-1){checked(a,b);}
    z++;
    if(z==5){
        next.style.visibility = "hidden";
    }
    text.innerText="Q.";
    text.innerText="Q."+question[z-1];
    qn.innerText = "";
    qn.innerText = z + "/5";
    y++;
    c=1;
    n=1;
    a=-1;
    b=-1;
    p=-1;
    q=-1;
    is_checked=0;
    is_wrong=0;
    show();
}

btn[0].addEventListener("click",()=>{
    checked(a,b);
});

next.addEventListener("click",()=>{
    upgrade();
});

