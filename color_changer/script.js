const buttons = document.querySelectorAll('.box');
const body = document.querySelector('body');
console.log(buttons);
const heading = document.querySelector("h1");

buttons.forEach( function(button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
      console.log(e.target)
        switch(e.target.id){
            case 'yellow':
                body.style.backgroundColor = "yellow";
                heading.style.color= "blue";
                break;

                case 'pink':
                body.style.backgroundColor = "pink";
                heading.style.color= "white";
                break;

                case 'blue':
                body.style.backgroundColor = "blue";
                heading.style.color= "yellow";
                break;

                case 'white':
                body.style.backgroundColor = "white";
                heading.style.color= "pink";
                break;
        }
    })
})
