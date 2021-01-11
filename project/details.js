if (window.localStorage.getItem((Number(window.localStorage.details_text_key) + 1)) == "") {
    window.localStorage.setItem((Number(window.localStorage.details_text_key) + 1), true)
}
// datetime-local : min max and value
d = new Date();
d.setHours(8760);
h = new Date();
h.setHours(24);
x = Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())
document.getElementById("datetime-local").setAttribute("min", ((new Date(x.toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0].split('T'))[0]) + "T00:00")
document.getElementById("datetime-local").setAttribute("max", (new Date(d.toString().split('GMT')[0] + ' UTC').toISOString().split('.')[0]))
if (document.getElementById("datetime-local").getAttribute("value") == "") {
    document.getElementById("datetime-local").setAttribute("value", window.localStorage.getItem(Number(window.localStorage.details_text_key) + 2))
}


document.getElementById('task_details').innerHTML = window.localStorage.getItem("details_text")
let to_be_changed = document.getElementById('task_details').innerHTML
let to_be_changed_key = window.localStorage.getItem("details_text_key")

if (window.localStorage.getItem(Number(window.localStorage.details_text_key) + 1) == "true") {
    document.getElementById("enable_time").checked = true;
}
else {
    document.getElementById("enable_time").checked = false;
}

var checkbox = document.querySelector("input[name=enable_time]");
// checkbox
checkbox.addEventListener('change', function () {
    let label;
    if (this.checked) {
        label = true
    } else {
        label = false
    }
    if (window.localStorage.getItem("details_text_key") != "") {
        window.localStorage.setItem((Number(window.localStorage.details_text_key) + 1), label);
    }
});

// save button

function saveButton() {
    if (window.localStorage.getItem("details_text_key") != "") {
        let yes = ""
        for(i=0 ; i <Number(window.localStorage.getItem("count"))+6 ;i++){
            if(window.localStorage.key(i)%3 == 0){
                if (document.getElementById('task_details').value == window.localStorage.getItem(window.localStorage.key(i))){
                    yes = "1"
                }
            }
        }
        if (yes != "1" && document.getElementById('task_details').value != "" || (document.getElementById('task_details').value == window.localStorage.getItem("details_text") && (window.localStorage.getItem(`${Number(window.localStorage.details_text_key) + 2}`)) != document.getElementById('datetime-local').value)){
        window.localStorage.setItem(window.localStorage.details_text_key, document.getElementById('task_details').value)
        window.localStorage.setItem((Number(window.localStorage.details_text_key) + 2), document.getElementById('datetime-local').value)
        window.open("list.html", "_self")
        }
    }
}

document.getElementById('save').addEventListener("click", saveButton)


window.onbeforeunload = function (event) {
    window.localStorage.setItem("details_text", "")
    window.localStorage.setItem("details_text_key", "")
}
