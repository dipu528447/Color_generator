function getRandomInt() {
    return Math.floor(Math.random() * 256);
  }
function generate_color(){
    let a=getRandomInt();
    let b=getRandomInt();
    let c=getRandomInt();
    document.body.style.backgroundColor=`rgb(${a},${b},${c})`;
    document.getElementById("code").innerHTML=`rgb(${a},${b},${c})`;
}