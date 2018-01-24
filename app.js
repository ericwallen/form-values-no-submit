var submit = document.querySelector('#my-button')

function getFormValuesAndUpdateDOM(){
  var name = document.querySelector('#your-name').value
  document.getElementById('your-name-is').innerHTML = "your name is " + name
}

submit.addEventListener('click', function(event){
  event.preventDefault()
  getFormValuesAndUpdateDOM()
})

var TimeRemaining = 5

var myTimer = setInterval(function(){
  TimeRemaining--
  document.getElementById('time-remaining').innerHTML = TimeRemaining
  if (TimeRemaining == 0){
    console.log("submit this form");
    clearInterval(myTimer)
    getFormValuesAndUpdateDOM()
  }
}, 1000)
