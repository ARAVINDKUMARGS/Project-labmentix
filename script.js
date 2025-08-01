// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerText = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

// Notes
function saveNote() {
  const note = document.getElementById("noteArea").value;
  localStorage.setItem("savedNote", note);
  alert("Note saved!");
}

// Attendance Calculator
function calculateAttendance() {
  const present = parseInt(document.getElementById("presentDays").value);
  const total = parseInt(document.getElementById("totalDays").value);
  const result = document.getElementById("attendanceResult");

  if (!isNaN(present) && !isNaN(total) && total > 0) {
    const percent = ((present / total) * 100).toFixed(2);
    result.innerText = `Attendance: ${percent}%`;
  } else {
    result.innerText = "Please enter valid numbers!";
  }
}

// Pomodoro Timer
let time = 1500;
let interval;

function startTimer() {
  interval = setInterval(() => {
    if (time <= 0) {
      clearInterval(interval);
      alert("Time's up! Take a break.");
      return;
    }
    time--;
    displayTime();
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  time = 1500;
  displayTime();
}

function displayTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

displayTime();
