var currentTimeEl = $("#currentTime");

function displayCurrTime() {
  var timeInterval = setInterval(function() {
    var currTime = moment().format("MMM Do, YYYY hh:mm:ssa");
    console.log(currTime);
    currentTimeEl.text(currTime);
  },1000);
}

displayCurrTime();

