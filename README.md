# lyt - local youtube
A program to open video from the web directly into a media player.

## dependencies
You need the following:
- python 3
- flask
- youtube-dl

## installation
1. Install the chrome extension
	> From https://developer.chrome.com/extensions
	> 1. Navigate to `chrome://extensions` in your browser. You can also access this page by clicking on the Chrome menu on the top right side of the Omnibox, hovering over **More Tools** and selecting **Extensions**.
	> 2. Check the box next to **Developer Mode**.
	> 3. Click **Load Unpacked Extension** and select the directory for [the] extension.
2. Run `server_install.sh` 

## usage
1. Start the server
	`repo_location/server/lyt.py`
2. Right click on a video link and press "Play video via lyt"
