const inputArray = [];

//add task functions
$("#add-task-btn").click(function() {
  ViewContainer("add-container", "add-task-btn");
  HideContainer("show-container", "show-task-btn");
  HideContainer("del-container", "del-task-btn");
});

$("#s1").click(function() {
  const taskno = $("#task-no").val();
  const taskname = $("#task-name").val();
  const taskdate = $("#task-date").val();

  const object1 = {
    TaskNo: taskno,
    TaskName: taskname,
    TaskDate: taskdate,
  };

  inputArray.push(object1);

  alert("YOUR TASK -" + taskname + "- DATED -" + taskdate + "- WAS CREATED");

  HideContainer("add-container", "add-task-btn");

  $("#task-no").val("");
  $("#task-name").val("");
  $("#task-date").val("");
});

// Displaying the tasks in table format
$("#show-task-btn").click(function() {
  ViewContainer("show-container", "show-task-btn");
  HideContainer("add-container", "add-task-btn");
  HideContainer("del-container", "del-task-btn");

  $("#tasks-to-do").show();
  const showTasks = $("#show-tasks");
  showTasks.empty();
  for (let i = 0; i < inputArray.length; i++) {
    showTasks.append(
      "<table border='1'><tr><td>" +
        inputArray[i].TaskNo +
        "</td><td>" +
        inputArray[i].TaskName +
        "</td><td>" +
        inputArray[i].TaskDate +
        "</td></tr></table>"
    );
  }
});

//Delete task Button
$("#del-task-btn").click(function() {
  ViewContainer("del-container", "del-task-btn");
  HideContainer("show-container", "show-task-btn");
  HideContainer("add-container", "add-task-btn");
});

$("#d1").click(function() {
  const delTaskNo = $("#del-task-no").val();
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].TaskNo == delTaskNo) {
      inputArray.splice(i, 1);
      alert("TASK NO " + delTaskNo + " WAS DELETED");
      break;
    }
  }
  HideContainer("del-container", "del-task-btn");
  $("#del-task-no").val("");
});

function HideContainer(boxid, btnid) {
  const box = $("#" + boxid);
  const btn = $("#" + btnid);
  box.hide();
  btn.css("background-color", "");
  btn.css("color", "");
}

function ViewContainer(boxid, btnid) {
  const box = $("#" + boxid);
  const btn = $("#" + btnid);
  box.show();
  btn.css("background-color", "green");
  btn.css("color", "white");
}