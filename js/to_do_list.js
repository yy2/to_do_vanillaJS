
$(document).ready(function() {
    var dt = new Date();
    document.querySelector('#date').innerHTML = dt.toLocaleDateString();
    console.log("is this ready?");

var taskFd = $('#newTaskField');
var taskLabel = $('#newTaskLabel');
var addBtn = $('#addItemBtn');


taskFd.on('focus', function(){
    taskFd.css('padding', '10px');
    console.log("width: " + taskFd.width());
}) 

taskFd.on('keyup', function() {
  console.log("focused");
  //when user inputs into field
  //show the add button
  //taskFd.css('padding', '10px');
  if(!taskFd.val()) {
    addBtn.hide();
    console.log("width: " + taskFd.width());
    console.log("add is hidden");
  }
  else {
    addBtn.show();
    console.log("width: " + taskFd.width());
    console.log("add is showing");
  }
})

taskFd.on('blur', function() {
  console.log("blurred");
  //when user clears out/empty task
  //show taskLabel
  //hide the add button
  //move the cursor/placeholder back
  if(taskFd.val().length == 0) {
    taskLabel.show();
    addBtn.hide();
    addBtn.css('display', 'none');
    taskFd.css('padding', '10px 10px 10px 135px');
  }
    else {
    addBtn.show();
    taskLabel.hide();
  }
})

addBtn.on('click', function(){
  console.log("add new item");
  var li = document.createElement("li");
  var ul = document.getElementById("myUL");
  var inputVal = taskFd.val();
  console.log(inputVal);
  var t = document.createTextNode(inputVal);
  var checkBtn = document.createElement("BUTTON");
  var deleteBtn = document.createElement("BUTTON");
  var checkText = document.createTextNode("Check");
  var deleteText = document.createTextNode("X");
  checkBtn.className = "checkBtn";
  deleteBtn.className = "deleteBtn";
  checkBtn.appendChild(checkText);
  deleteBtn.appendChild(deleteText);
  console.log("t: " + t);
  li.appendChild(t);
  li.appendChild(checkBtn);
  li.appendChild(deleteBtn);
  ul.appendChild(li);
  //clear out input
  taskFd.val('');
})

})