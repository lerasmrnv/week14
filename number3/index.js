var theNum = "0";
let arr = ["1","2","3","4","5","6","7"]

function clickNext() {
    if(theNum == arr.length){theNum="0";}
    console.log(theNum)
    change_image.src = './assets/images/'+arr[theNum]+'.jpg';
    theNum ++;
}
function clickPrev() {
    if(theNum == "-1"){theNum = arr.length -1;}
    console.log(theNum)
    change_image.src = './assets/images/'+arr[theNum]+'.jpg';
    theNum --;
}
