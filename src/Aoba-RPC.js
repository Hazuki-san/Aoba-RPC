// ==UserScript==
// @name     Aoba-RPC
// @version  1
// @author   Aoba Suzukaze
// @icon     https://raw.githubusercontent.com/Hazuki-san/Aoba-RPC/master/ext/icons/youtube-512.png
//
// @grant       GM_notification
// @run-at      document-start
//
// @include     *://*.youtube.com/watch?v=*
// ==/UserScript==

(function() {
    "use strict";

    // Establish DPS Connection.
    // WARNING: Having 2 readers open on different
    //          tabs confuses the RPC while having it
    //          altnerate between the two.
    var Socket = new WebSocket("ws://127.0.0.1:40510");

    var interval = 1000;

    window.addEventListener('load', function () {
    var Execution = setInterval(() => {
        Socket.send(JSON.stringify(
        {
                details: document.title.replace(" - YouTube", ""), //get only actual title
                state: document.querySelector("#text-container").innerText, //poor way to get username  lmfao
                assets: {
                    large_image : "yt_lg",
                    large_text : "Are you peeking me? owo"
                },
                buttons: [
                {
                    label: "Play Ainu!",
                    url: "https://ainu.pw"
                },
                {
                    label: "Watch Video with me~ ❤",
                    url: document.URL
                }]}
        ));
    }, interval);
    })

    Socket.onerror = function (Error)
    {
        console.error ("# [Aoba-RPC] Error: " + Error);
    };

    Socket.onclose = function (Error)
    {
        console.error ("# [Aoba-RPC] Error: " + Error);

        if (Error.code != "1000")
        {
            notifyUser("WebSocket Error", "It seems like the WebSocket is not running on port 40510.");
        }
    };

    Socket.onopen = function ()
    {
        notifyUser("[Aoba-RPC]", "Established WebSocket connection!");
    };
})();

function notifyUser(Title, Message, Icon)
{
    Icon = "https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png";

    if (GM_info.scriptHandler === "Tampermonkey")
    {
        GM_notification(Message, Title, Icon);
    }

    if (GM_info.scriptHandler === "Greasemonkey")
    {
        if (!("Notification" in window))
        {
            console.log ("# [Aoba-RPC] Error: This browser does not support desktop notifications.");
        }

        if (Notification.permission !== "denied")
        {
            Notification.requestPermission().then(function (Permission) {
                if (Permission === "granted")
                {
                    new Notification(Title, {
                        icon: Icon,
                        body: Message
                    });
                }
            });
        }
    }
};