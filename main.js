let colorList = ["red", "green", "blue"];
document.getElementById("myButton").addEventListener("click", onSubmit);
let i = 0;
function onSubmit(e){
    e.preventDefault();
    document.body.style.background = colorList[i];
    console.log(i);
    i+=1;
    if(i>2){
        i = 0; 
    }
}