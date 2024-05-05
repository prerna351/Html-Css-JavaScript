const time = document.querySelector('.time')

setInterval(function(){
    let myDate = new Date();
    time.innerHTML = myDate.toLocaleTimeString();
},1000);