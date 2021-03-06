<img align="left" width="100" height="100" src="https://raw.githubusercontent.com/Hazuki-san/Aoba-RPC/master/ext/icons/youtube-128.png">

# Aoba-RPC

Share your videos and preferences on YouTube seemlessly with your friends on Discord thanks to this Discord RPC addon.

### Download & Setup
- **Discord.JS RPC (Requires Node.JS):** [Download from GitHub](https://github.com/Hazuki-san/Discord-RPC)
- **Tampermonkey:** [Install Tampermonkey from Chrome Webstore](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Install Tampermonkey from Firefox Add-ons store.](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- **Aoba-RPC:** [Download from GitHub](https://github.com/Jinzulen/Mangadex-RPC/blob/master/src/Aoba-RPC.js)

**- How to use:**
1. **Launch DPS**
    - Linux/macOS/Windows: Run the following command on CMD/CLI `node index.js` or run it with launch.bat.
    - Once successfully launched, it should return the following message: `[+] Your RPC is now displaying with buttons!`
2. **Add the userscript to your prefered injector**
    - Following userscript installation, make sure it is enabled.
3. **Enable game activity on Discord**
    - Go to Discord settings.
    - On the left-hand menu, find Game Activity.
    - Enable "Display currently running game as a status message".
4. **Navigate to [YouTube](https://youtube.com/) and open a video, any video. (refresh it if it's not loading)**
    - Once you open a chapter, a browser notification should appear (after prompting you to allow notifications) to notify you that a WebSocket connection has been established for that manga.

**Note #1:** Your status on Discord must not be set to invisible/offline, otherwise the Rich Presence won't appear.

**Note #2:** If the Rich Presence doesn't appear even though your status isn't set to invisible/offline, then reload Discord/Website.

### FAQ
> Firefox is giving me a "Security Error: The operation is insecure." error?
- Firefox does not allow, by default, going from a secure endpoint (https://) to a non-secure one (ws://). This can be disabled by going to `about:config` and changing `network.websocket.allowInsecureFromHTTPS` to `true`.

> I don't really like Tampermonkey, can't I use GM or VM?
- You can use whichever injector you're most comfortable with, I just tend to prefer working with TM.
