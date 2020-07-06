// DOM Elements
const time = document.getElementById('time'), 
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'), 
  focus = document.getElementById('focus');
  

//options
const showAmPm = true
  //show time  
function showTime(){
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hours format
    hour = hour % 12 || 12;

    //Output time 
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`
    setTimeout(showTime, 1000)

}

//Add zeros
function addZero(n){
    return (parseInt(n, 10) <10 ? '0' : '') + n;
}
//set background and greeting
function setBgGreet(){
    let today =  new Date(),
        hour = today.getHours();
if (hour < 12){
    //morning
    document.body.style.backgroundImage = "url('morning.jpeg')center/cover no-repeat"
    greeting.textContent = 'Good Morning'
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = 'cover'
}else if (hour < 18){
    //afternoon
    document.body.style.backgroundImage = "url('afternoon.jpeg')"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = 'cover'
    greeting.textContent = "Good Afternoon"
    document.body.style.color = 'violet' 
}else{
    //Evening
    document.body.style.backgroundImage = "url('night.jpeg')"
    greeting.textContent = "Good Night"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = 'cover'
}
}

//set name
function setName(e){
    if (e.tyoe === 'keypress'){
        //make sure enter is press
        if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText)
        name.blur()    
        }
    }else{
        localStorage.setItem('name', e.target.innerText)
    }
}
//set focus
function setFocus(e){
    if (e.tyoe === 'keypress'){
        //make sure enter is press
        if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('focus', e.target.innerText)
        focus.blur()    
        }
    }else{
        localStorage.setItem('focus', e.target.innerText)
    }
}
//get focus
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = 'Enter Focus'
    }else {
        focus.textContent = localStorage.getItem('focus')
    }
}
name.addEventListener('keypress', setName)
name.addEventListener('blue', setName)

focus.addEventListener('keypress', setFocus)
focus.addEventListener('blue', setFocus)


//run

showTime()
setBgGreet()
getFocus()