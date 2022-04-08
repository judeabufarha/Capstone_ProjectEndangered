$("*").mousewheel(function(event, delta) {
  console.log ("scroll fired");
  this.scrollLeft -= (delta*1.5);

  event.preventDefault();

});

$( document ).ready(function() {
  console.log ("page loaded")    
});
