functionName(5);
var a=6;
function functionName(age){
    console.log("age:" +age);
}

function print(){
    var b=10;

    // console.log(a);
    // console.log(b);

}
print( );


function count (num){

    for(var i =num;i>=0;i--){
        flag=0;
        setTimeout(function(){
            console.log(i);
        },1000*(num-i));

    }
}
count(5);

