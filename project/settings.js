if ((window.localStorage.getItem("expired_label_on") == null)) {
    window.localStorage.setItem("expired_label_on", "1");
    window.localStorage.setItem("notifications_on", "1");
    window.localStorage.setItem("reminder_time", "0");
}




if (window.localStorage.getItem("expired_label_on") == "1"){
    document.getElementById("expired_on").checked = true;
}
else{
    document.getElementById("expired_on").checked = false;
}

if (window.localStorage.getItem("notifications_on") == "1"){
    document.getElementById("notification_on").checked = true;
}
else{
    document.getElementById("notification_on").checked = false;
}


var checkbox = document.querySelector("input[name=first]");

checkbox.addEventListener('change', function () {
    let label1 ="";
    if (this.checked) {
        label1 = "1"
    } else {
        label1 = "0"
    }
    window.localStorage.setItem("expired_label_on", label1);
});

var checkbox = document.querySelector("input[name=second]");

checkbox.addEventListener('change', function () {
    let label2;
    if (this.checked) {
        label2 = "1"
    } else {
        label2 = "0"
    }
    window.localStorage.setItem("notifications_on" , label2);
});
function select() {
    
    window.localStorage.setItem("reminder_time",document.getElementById("reminder_time").value);
}

document.getElementById('reminder_time').onchange = function () {
    localStorage.setItem('reminder_time', document.getElementById('reminder_time').value);
};

if (localStorage.getItem('reminder_time')) {
    document.getElementById('select_' + localStorage.getItem('reminder_time')).selected = true;
} 

function delete_all(){
    
    if (confirm("WARNING: This will completely remove all tasks and will return settings to their default values.")){
        window.localStorage.clear();
    }
}

document.getElementById("delete_all").addEventListener("click" , delete_all)