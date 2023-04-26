let anyNumber = parseInt(Math.random()*100)+1;
console.log(anyNumber)

let back = document.getElementById('back');
back.addEventListener('click', () =>
{
    check();
})


var limit =100;
function check(){
    let chance = document.getElementById('play') 
    let comment = document.getElementById('comment') 
    let box1 = document.getElementById('box1')
    let body = document.getElementById('body')
    let score = document.getElementById('score')
    let photo = document.getElementById('picture')


    if(anyNumber > parseInt(box1.value))
    {
        comment.innerHTML ='...You Are Low...';
        chance.innerText =  `chance : ${--limit}`;
        chance.style.fontSize= '30px';
    }
    
    else if(anyNumber < parseInt(box1.value))
    {
        comment.innerHTML = '...You Are High...';
        chance.innerText =  `chance : ${--limit}`;
        chance.style.fontSize= '30px';

    }
    else 
    {
        comment.innerHTML =  "😍...You Won...😍";
        chance.innerText =  chance.innerHTML;
        chance.style.fontSize= '30px';
        body.style.backgroundColor = "blue";
        score.innerHTML = `Highscore : ${limit}`;
        score.style.fontSize = '30px'
         
        photo.innerText = box1.value;

    }

}