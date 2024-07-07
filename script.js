let btn = document.querySelector("button");
let inp = document.querySelector("input");
let para1 = document.querySelector(".para1");
let para2 = document.querySelector(".para2");

//Math.floor(Math.random() * 100);

let guess=0;

btn.addEventListener("click" , ()=>{
    if(inp.value<1 || inp.value>100 || isNaN(inp.value) ){
        para1.innerText = "Enter value between 1 to 100";
    }
    else{
        guess++;
        para2.innerText = "no. of guess : " + guess;
        if(inp.value> Math.floor(Math.random() * 100)){
            para1.innerText = "Your guess is very high";
            inp.value = "";
        }
        else if(inp.value< Math.floor(Math.random() * 100)){
            para1.innerText = "Your guess is very low";
            inp.value = "";
        }
        else{
            para1.innerText = "Congratulations you are winner";
            btn.disabled = true;
            setTimeout(()=>{
                    guess=0;
                    inp.value="";
                    para2.innerText = "no. of guess: 0"
                    para1.innerText = "";
                    btn.disabled = false;
            },4000)
        }
    }
});
