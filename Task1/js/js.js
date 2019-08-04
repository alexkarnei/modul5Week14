var nam = document.getElementById("name");
var message = document.getElementById("text");
var currentDate = new Date();
var date = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" +
    currentDate.getSeconds() + "  " + currentDate.getDate() + "." + currentDate.getMonth() + "." +
    currentDate.getFullYear();

function btnOnclick() {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = nam.value +" "+ date+ "<br>" + "<br>" + message.value;
    var f = document.getElementById("ex1");
    f.appendChild(newDiv);
    f.style.display = "block";
    nam.value = "";
    message.value = "";
}

