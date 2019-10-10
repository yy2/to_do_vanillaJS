
$(document).ready(function() {
    var dt = new Date();
    document.querySelector('#date').innerHTML = dt.toLocaleDateString();
    //console.log("is this ready?");

var taskFd = $('#newTaskField');
var taskLabel = $('#newTaskLabel');
var addBtn = $('#addItemBtn');
var btnDiv = document.getElementById('btn-styles');


taskFd.on('focus', function(){
    taskFd.css('padding', '10px');
    //console.log("width: " + taskFd.width());
}) 

taskFd.on('keyup', function() {
  //console.log("focused");
  //when user inputs into field
  //show the add button
  //taskFd.css('padding', '10px');
  if(!taskFd.val()) {
    addBtn.hide();
    //console.log("width: " + taskFd.width());
    //console.log("add is hidden");
  }
  else {
    addBtn.show();
    //console.log("width: " + taskFd.width());
    //console.log("add is showing");
  }
})

taskFd.on('blur', function() {
  //console.log("blurred");
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
  //console.log("add new item");
  var li = document.createElement("li");
  var ul = document.getElementById("myUL");
  var inputVal = taskFd.val();
  //console.log(inputVal);
  var text = document.createTextNode(inputVal);
  var span = document.createElement("SPAN");
  var checkBtn = document.createElement("BUTTON");
  var deleteBtn = document.createElement("BUTTON");
  var editBtn = document.createElement("BUTTON");
  var checkText = document.createTextNode("Check");
  var deleteText = document.createTextNode("X");
  var editText = document.createTextNode("Edit");
  var newInput = document.createElement("INPUT");
  var inputText = document.createTextNode("");
  newInput.className = "newInput";
  span.className = "taskItem";
  checkBtn.className = "checkBtn";
  deleteBtn.className = "deleteBtn";
  editBtn.className = "editBtn";
  //span.appendChild(newInput);
  newInput.appendChild(inputText);
  newInput.style.display = "none";
  span.appendChild(text);
  checkBtn.appendChild(checkText);
  deleteBtn.appendChild(deleteText);
  editBtn.appendChild(editText);
  li.appendChild(span);
  ul.appendChild(li);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);
  li.appendChild(checkBtn);
  li.appendChild(newInput);
  //clear out input
  taskFd.val('');
  
  //deleteBtn.onclick = removeItem(li);
})

})

//var deleteBtn = $('.deleteBtn');

$(document).on("click", '.deleteBtn', function() {
    $(this).closest("li").fadeOut(function() {
      $(this).remove();
    });
    return false;
})

$(document).on("click", '.checkBtn', function() {
    //console.log("check button clicked");
    $(this).closest("li").find("span").toggleClass('striked');
});

$(document).on("click", '.editBtn', function() {
    if ($(this).closest("li").find("span").is(':visible')) {
        var val = $(this).closest("li").find("span").text();
        $(this).closest("li").find("span").hide();
        $(this).closest("li").find("input").show();
        $(this).closest("li").find("input").val(val);
        $(this).html("Save");
      } else {
        var val = $(this).closest("li").find("input").val();
        console.log(val);
        $(this).closest("li").find("input").hide();
        $(this).closest("li").find("span").text(val);
        $(this).closest("li").find("span").show();
        $(this).html("Edit");
      }
});