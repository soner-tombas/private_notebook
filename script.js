function addNote() {
    var noteInput = document.getElementById("noteInput");
    var noteList = document.getElementById("noteList");

    if (noteInput.value.trim() !== "") {
        var now = new Date();
        var timestamp = now.toLocaleString();

        var li = document.createElement("li");
        li.innerHTML = `
            <span>${noteInput.value}</span>
            <span class="timestamp">${timestamp}</span>
            <button class="delete-button" onclick="deleteNote(this)">Sil</button>
        `;
        noteList.appendChild(li);
        noteInput.value = "";
    }
}

function deleteNote(button) {
    var listItem = button.parentElement;
    listItem.remove();
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Hata';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1; // Months are zero-based
    var year = now.getFullYear();

    // Format single digits with leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    var currentTime = hours + ":" + minutes + ":" + seconds;
    var currentDate = year + "-" + month + "-" + day;

    document.getElementById("clock").innerHTML = currentDate + "<br>" + currentTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
