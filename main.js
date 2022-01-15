

//取得したデータを変数に代入
let timer=document.getElementById(`timer`);
let start=document.getElementById(`start`);
let stop=document.getElementById(`stop`);
let reset=document.getElementById(`reset`);

let hours = 0;
let minutes = 0;
let seconds = 0;
let ms = 0;

let interval = null;


function stopWatch(){
    ms++;
    if(ms / 10 ==1){
        seconds++;
        ms = 0;
        if(seconds / 60 == 1){
            minutes ++;
            seconds = 0;
            if(minutes / 60 ==1){
                hours ++;
                minutes = 0;
            }
        }
    }
    timer.innerHTML = hours +":" + minutes + ":" + seconds + ":" +ms;
}


start.addEventListener(`click`,(event) => {
    interval = setInterval(stopWatch, 100);
    start.disabled = true;
})

stop.addEventListener(`click`,(event) => {
    clearInterval(interval);
    start.disabled = false;
})

reset.addEventListener('click',(event) => {
    clearInterval(interval);
    timer.innerHTML="0:0:0:0";
    hours = 0;
    minutes = 0;
    seconds = 0;
    ms = 0;
    start.disabled = false;
})