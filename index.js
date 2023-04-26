//Q1
let text1 = document.getElementById('text')
console.log(text1);

//Q2
let h1=document.getElementsByTagName("h1")
console.log(h1[0].innerHTML);

//Q3
//3rd Question
let box = document.getElementsByClassName('box')
console.log(box[0].innerHTML);
//Q4
let hello = document.getElementById('hello');
hello.addEventListener('click', helloworld)
function helloworld(){
    hello.innerText = 'Hello World';
    hello.style.cursor= "copy";
    hello.style.fontSize= '20px';
}
console.log('Hello World');



//Q5
function prep(){
 document.getElementById("text1").innerHTML="Welcome to Elevation academy"
}


//Q6
let heading = document.getElementById('heading')
heading.addEventListener('click', head1)
function head1(){
    heading.style.color='red';
    heading.style.fontSize='64px';
}

//Q7
function change() { 
    let count = 0;
    let card = document.getElementsByClassName('card')
    if(count === 0)
        {
            card[0].style.flexDirection = 'column';
            count++
        }
        else
        {
            card[0].style.flexDirection = 'row';
            count--
        }

}

let count = 0;
let card = document.getElementsByClassName('card')
card[0].addEventListener('click', clickBox)
function clickBox()
    {
        if(count === 0)
        {
            card[0].style.flexDirection = 'column';
            count++
        }
        else
        {
            card[0].style.flexDirection = 'row';
            count--
        }
    }



//Q9

    function diaplayTime() {
        var dateTime = new Date();
        var hrs = dateTime.getHours();
        var min = dateTime.getMinutes();
        var sec = dateTime.getSeconds();
      
        var session = document.getElementById('sessions');
      
          if(hrs >= 12)
          {
            session.innerHTML = 'PM';
          }
          else
          {
            session.innerHTML = 'AM';
          }   
        
  
          if (hrs>12) {
            hrs -= 12;
          PMAM = "pm";
        }
      
        if (hrs < 10) {
          hrs = "0" + hrs;
        }
      
        if (min < 10) {
          min = "0" + min;
        }
      
        if (sec < 10) {
          sec = "0" + sec;
        }
      
      
        document.getElementById('hours').innerHTML = hrs;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
        
        
      }
      
      setInterval(diaplayTime, 1000);
