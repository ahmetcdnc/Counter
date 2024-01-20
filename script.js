var count = 0;

function changeCount(p){
  count+=p;
  document.querySelector("#count").innerHTML = count; 
}