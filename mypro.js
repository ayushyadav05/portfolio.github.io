let valueDisplays=document.querySelectorAll(".num");
let interval=5000;

valueDisplays.forEach(v => {
    let start=0;
    let end=parseInt(v.getAttribute("data-val"));
    let duration=Math.floor(interval/end);
    let counter=setInterval(function(){
        start+=1;
        v.textContent=start;
        if(start==end){
            clearInterval(counter);
        }
    },duration);
});