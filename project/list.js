
document.getElementById("textbox").hidden = true

// for local storage "count"
let count = Number(window.localStorage.getItem("count"));
if (!count) {
    window.localStorage.setItem("count", "0"); 
    document.getElementById("textbox").hidden = false
} 
if (window.localStorage.getItem("count") == "0") {
    
}

// set some "default" values in local storage in case they were deleted or something
if(!window.localStorage.getItem("details_text_key")){
window.localStorage.setItem("details_text_key", "");
window.localStorage.setItem("details_text","");
}
mainSpan = document.getElementById("li_container");
if((window.localStorage.getItem("expired_label_on") == null)){
    window.localStorage.setItem("expired_label_on", "1");
    window.localStorage.setItem("notifications_on", "1");
    window.localStorage.setItem("reminder_time", "0");
}

// the lists i used to make sorting and such things work properly
listo = ["2"];
listo_item = [];
for (j = 0; j < (count)+6; j++) {
    if ((window.localStorage.key([j]) != "count") && (window.localStorage.key([j]) != "expired_label_on") && (window.localStorage.key([j]) != "reminder_time") && (window.localStorage.key([j]) != "notifications_on") && (window.localStorage.key([j]) != "details_text") && (window.localStorage.key([j]) != "details_text_key")) {
        listo.push(window.localStorage.key([j]))       
    }
}
listo.sort(function (a, b) { return b - a })

for(k in listo){
    if (Number(listo[k]) % 3 == 0) {
        listo_item.push(window.localStorage.getItem(`${listo[k]}`))
}
}
function check(){
    document.getElementById("expired_off").checked = true;
}
function uncheck() {
    document.getElementById("expired_off").checked = false;
}

// create task elements functions, for normal and time gated and expired ones
function createTask(input) {
    let li_container = document.createElement("span");
    let li = document.createElement("li");
    let text = document.createElement("span");
    let div = document.createElement("div");
    let buttons_hide = document.createElement("span");
    let expired_small = document.createElement("span");
    let Delete = document.createElement("button");
    let trash = document.createElement("img");
    let edit = document.createElement("button");
    let edit_img = document.createElement("img");
    let time_remaining = document.createElement("span");


    li.setAttribute("title", "");
    li.setAttribute("class", "");
    li.setAttribute("title", input);
    text.id = "text";
    div.id = "buttons";
    buttons_hide.id = "buttons_hide";
    expired_small.id = "hidden";
    Delete.id = "delete";

    Delete.setAttribute("title", "Delete")
    trash.setAttribute("src", "trash.png");
    trash.setAttribute("alt", "Delete/Done");
    trash.id = "trash"
    edit.id = "edit";
    edit.setAttribute("title", "Edit/Details")
    edit_img.setAttribute("src", "edit.png");
    edit_img.setAttribute("alt", "Edit");
    edit_img.id = "edit_img"
    time_remaining.id = "hidden";

    let xText = document.createTextNode(input);

    mainSpan.appendChild(li);

    li.appendChild(text);
    li.appendChild(div);
    text.appendChild(xText);
    div.appendChild(buttons_hide);
    div.appendChild(time_remaining);
    time_remaining.innerHTML = "🕑 53 Minutes Remaining"
    buttons_hide.appendChild(expired_small);
    expired_small.innerHTML = "⚠ Expired";
    buttons_hide.appendChild(Delete);
    Delete.appendChild(trash);
    buttons_hide.appendChild(edit);
    edit.appendChild(edit_img);



    document.getElementById("li_container").appendChild(li);
}



function createTimedTask(input , time){
    let li = document.createElement("li");
    let text = document.createElement("span");
    let div = document.createElement("div");
    let buttons_hide = document.createElement("span");
    let expired_small = document.createElement("span");
    let Delete = document.createElement("button");
    let trash = document.createElement("img");
    let edit = document.createElement("button");
    let edit_img = document.createElement("img");
    let time_remaining = document.createElement("span");

    li.setAttribute("title","");
    li.setAttribute("class", "");
    li.setAttribute("title", input);
    text.id = "text";
    div.id = "buttons";
    buttons_hide.id = "buttons_hide";
    expired_small.id ="hidden";
    Delete.id = "delete";
    
    Delete.setAttribute("title","Delete")
    trash.setAttribute("src", "trash.png");
    trash.setAttribute("alt", "Delete/Done");
    trash.id = "trash"
    edit.id = "edit";
    edit.setAttribute("title", "Edit/Details")
    edit_img.setAttribute("src","edit.png");
    edit_img.setAttribute("alt", "Edit");
    edit_img.id = "edit_img"
    time_remaining.id = "time_remaining";

    let xText = document.createTextNode(input);
    
    mainSpan.appendChild(li);
    
    li.appendChild(text);
    li.appendChild(div);
    text.appendChild(xText);
    div.appendChild(buttons_hide);
    div.appendChild(time_remaining);
    time_remaining.innerHTML = time;
    buttons_hide.appendChild(expired_small);
    expired_small.innerHTML = "⚠ Expired";
    buttons_hide.appendChild(Delete);
    Delete.appendChild(trash);
    buttons_hide.appendChild(edit);
    edit.appendChild(edit_img);

    

    document.getElementById("li_container").appendChild(li);
}

function createExpiredTask(input) {
    let li_container = document.createElement("span");
    let li = document.createElement("li");
    let text = document.createElement("span");
    let div = document.createElement("div");
    let buttons_hide = document.createElement("span");
    let expired_small = document.createElement("span");
    let Delete = document.createElement("button");
    let trash = document.createElement("img");
    let edit = document.createElement("button");
    let edit_img = document.createElement("img");
    let time_remaining = document.createElement("span");

    li.setAttribute("title", "");
    li.setAttribute("class", "red_background");
    li.setAttribute("title", input);
    text.id = "text";
    div.id = "buttons";
    buttons_hide.id = "buttons_hide";
    expired_small.id = "expired_small";
    Delete.id = "delete";

    Delete.setAttribute("title", "Delete")
    trash.setAttribute("src", "trash.png");
    trash.setAttribute("alt", "Delete/Done");
    trash.id = "trash"
    edit.id = "edit";
    edit.setAttribute("title", "Edit/Details")
    edit_img.setAttribute("src", "edit.png");
    edit_img.setAttribute("alt", "Edit");
    edit_img.id = "edit_img"
    time_remaining.id = "hidden";

    let xText = document.createTextNode(input);

    mainSpan.appendChild(li);

    li.appendChild(text);
    li.appendChild(div);
    text.appendChild(xText);
    div.appendChild(buttons_hide);
    div.appendChild(time_remaining);
    time_remaining.innerHTML = "🕑 53 Minutes Remaining"
    buttons_hide.appendChild(expired_small);
    expired_small.innerHTML = "⚠ Expired";
    buttons_hide.appendChild(Delete);
    Delete.appendChild(trash);
    buttons_hide.appendChild(edit);
    edit.appendChild(edit_img);



    document.getElementById("li_container").appendChild(li);
}

// the function that takes the inputs and store them in local storage

function createFromInput(e){
    e.preventDefault();
    let input = document.getElementById("new_task").value;
    document.getElementById("new_task").value = "";

    count = count + 3
    window.localStorage.setItem("count", count);
    
    var x = 0;
    z = input;
    while (listo_item.find(el => el === input)){  
        x = x + 1;
        input = z + " (" + x + ")";
    }
     
    window.localStorage.setItem(String(Number(listo[0]) + 1),input);
    window.localStorage.setItem(String(Number(listo[0]) + 2), "");
    window.localStorage.setItem(String(Number(listo[0]) + 3), "")

    

    document.getElementById("textbox").hidden = false;
    
    createTask(input);
    location.reload()
                            }

// function that removes the tasks
function removeList(e){
    if(e.target.id == "delete" || e.target.id == "trash"){
        if(e.target.id == "delete"){
        o = e.target.firstChild
        }
        else{
        o = e.target
        }
        
        if (confirm(`Are You sure want to delete "${o.parentElement.parentElement.parentElement.parentElement.firstChild.innerText}" ?`)){
            let li = o.parentElement.parentElement.parentElement.parentElement;
        mainSpan.appendChild(li);
        mainSpan.removeChild(li);

        for(let i in listo) {
            if ((Number(listo[i]) % 3 == 0) && (window.localStorage.getItem(listo[i]) == o.parentElement.parentElement.parentElement.parentElement.firstChild.innerText)) {
                window.localStorage.removeItem(listo[i]);
                window.localStorage.removeItem(listo[i-1]);
                window.localStorage.removeItem(listo[i - 2]);
                count = count - 3;
                window.localStorage.setItem("count", count);
                
        }
    }
    }



        
}
    

      
}                            
function showTextArea(e){
    e.preventDefault();
    document.getElementById("textbox").hidden = false;
}
function hideTextArea(e){
    e.preventDefault();
    document.getElementById("textbox").hidden = true;
}
// the function that store some values in local storage temporarily so another js file can use them, 
//i had to use this way since im using local storage only.
function detailsWindow(e){
    for (let i in listo) {
        if ((Number(listo[i]) % 3 == 0) && (window.localStorage.getItem(listo[i]) == e.target.parentElement.parentElement.parentElement.parentElement.firstChild.innerText)) {
            window.localStorage.setItem("details_text_key", listo[i])
        }
    }
    if (e.target.id == "edit" || e.target.id == "edit_img") {
        window.open("details.html" , "_self");
        window.localStorage.setItem("details_text",e.target.parentElement.parentElement.parentElement.parentElement.firstChild.innerText);
}
}

document.getElementById('li_container').addEventListener("click", detailsWindow);
document.getElementById('new').addEventListener("submit", createFromInput, false);
document.getElementById('x').addEventListener("click", hideTextArea, false); 
document.getElementById('add').addEventListener("click", showTextArea, false);



// the loop that prints out all tasks, in ordered way ofcourse
for (let i in listo){
    if (listo[i]%3 == 0){
        let input = window.localStorage.getItem(listo[i]);
        var date_later = new Date(window.localStorage.getItem(listo[i - 2]));
        var date_now = new Date()
        
        dif = date_later.getTime() - date_now.getTime()
        
        if ((window.localStorage.getItem(listo[i - 1])) != "true" || (window.localStorage.getItem("expired_label_on")) == "0"){
            createTask(input)
        }

        else if (dif / 86400000 >= 30){ //months+days
            createTimedTask(input, (`${Math.floor(dif / (86400000 * 30))} Months , ${Math.floor(((dif / (86400000 * 30)) - (Math.floor(dif / (86400000 * 30)))) * 30)} Days.`))
            
        }
        else if (dif / 86400000 >= 1){ // days+hrs
            createTimedTask(input, (`${Math.floor(dif / (86400000))} Days , ${Math.floor(((dif / (86400000)) - (Math.floor(dif / (86400000)))) * 24)} Hours.`))

        }
        else if (dif / 3600000  > 1){ // hrs+mins
            createTimedTask(input, (`${Math.floor(dif / (3600000))} Hours , ${Math.floor(((dif / (3600000)) - (Math.floor(dif / (3600000)))) * 60)} Minutes.`))
        }
        else if (dif > 0){ //mins only
            createTimedTask(input, (`${Math.floor(dif / (60000))} Minutes.`))
        }
        else if (dif <= 0){
            createExpiredTask(input)
        }
        else{
        createTask(input);
        }
    }
}

document.getElementById('li_container').addEventListener("click", removeList);




