// this file keep tracking the time and show disktop notifications

chrome.runtime.onStartup.addListener(function () {

    
    var myfunc = setInterval(function () {
    if (window.localStorage.getItem("notifications_on") == "1"){
        for (j = 0; j < Number(window.localStorage.getItem("count")) + 6; j++){
            if(Number(window.localStorage.key(j))%3 == 0){
                if ((window.localStorage.getItem(`${(String(Number(window.localStorage.key(j)) + 2))}`)) != "") {
                    limit = new Date(window.localStorage.getItem(`${(String(Number(window.localStorage.key(j)) + 2))}`))
                    date = new Date();
                    diff = limit - date
                    diff = diff - Number(window.localStorage.getItem("reminder_time"));
                    

                    if (diff <= 30000 && diff > -29999){
                        function showNotification() {
                            const notification = new Notification("Alert!", {
                                body: `The task "${window.localStorage.getItem(`${String(Number(window.localStorage.key(j)))}`)}" is running out of time.`,
                                icon: "logo.png"
                            })
                        }
                        if (Notification.permission === "granted") {
                            showNotification();
                        }
                        else if (Notification.permission !== "denied") {
                            Notification.requestPermission().then(permission => {
                                if (permission === "granted") {
                                    showNotification();
                                }
                            })
                        }

                    }
                } 
            }
            
        } 
    }
    }, 60000)
})

