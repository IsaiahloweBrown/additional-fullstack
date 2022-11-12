// minutesArray = ["15 mins", "30 mins", "45 mins", "60 mins"]

// var select = document.getElementsByClassName("duration-input");
// // https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array
// for(var i = 0; i < minutesArray.length; i++) {
//   var opt = minutesArray[i];
//   var el = document.createElement("option");
//   el.textContent = opt;
//   el.value = opt;
//   el.name = "duration"
//   select.appendChild(el);
// }

var check = document.getElementsByClassName("fa-check");
var eraser = document.getElementsByClassName("fa-eraser");
var trash = document.getElementsByClassName("fa-trash-o");
var durationInt =  0


Array.from(check).forEach(function(element) {
      element.addEventListener('click', function(){
        const topic = this.parentNode.parentNode.childNodes[1].innerText
        const duration = this.parentNode.parentNode.childNodes[3].innerText
        const reward = this.parentNode.parentNode.childNodes[5].innerText
        const completion = this.parentNode.parentNode.childNodes[7].innerText
        const check = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)


        


        fetch('doros', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'topic': topic,
            'duration': duration,
            'reward': reward,
            'completion': completion,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(eraser).forEach(function(element) {
      element.addEventListener('click', function(){
        const topic = this.parentNode.parentNode.childNodes[1].innerText
        const duration = this.parentNode.parentNode.childNodes[3].innerText
        durationInt = duration
        const reward = this.parentNode.parentNode.childNodes[5].innerText
        const completion = this.parentNode.parentNode.childNodes[7].innerText
        const eraser = this.parentNode.parentNode.childNodes[11].innerText
        //fetches to api created in routes
        //a request
        fetch('dislikes', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'topic': topic,
            'duration': duration,
            'reward': reward,
            'completion': completion,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const topic = this.parentNode.parentNode.childNodes[1].innerText
        const duration = this.parentNode.parentNode.childNodes[3].innerText
        const reward = this.parentNode.parentNode.childNodes[5].innerText
        const trash = this.parentNode.parentNode.childNodes[13].innerText
        fetch('doros', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'topic': topic,
            'duration': duration,
            'reward': reward,
            
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
//https://www.educative.io/answers/how-to-create-a-countdown-timer-using-javascript
//listen
var startBtn = document.querySelector(".fa-play-circle")
var pauseBtn = document.querySelector(".fa-pause")

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;
let timeArr = []

// document.form_main.start.onclick = () => start();
// document.form_main.pause.onclick = () => pause();
// document.form_main.reset.onclick = () => reset();

startBtn.addEventListener("click", start)
pauseBtn.addEventListener("click", pause)

function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  document.querySelector('.hour').innerText = '00';
  document.querySelector('.minute').innerText = '00';
  document.querySelector('.second').innerText = '00';
  document.querySelector('.millisecond').innerText = '000';
}

const COUNTER_KEY = 'my-counter';
function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }
  document.querySelector('.hour').innerText = returnData(hour) + "hr";

  document.querySelector('.minute').innerText = returnData(minute) + "m";
  document.querySelector('.second').innerText = returnData(second) + "s";
  document.querySelector('.millisecond').innerText = returnData(millisecond) + "ms";
  if ((second) > 0) {
    window.sessionStorage.setItem(COUNTER_KEY, hour,minute, second, );
  } else {
    window.sessionStorage.removeItem(COUNTER_KEY);

  
  }

  
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}