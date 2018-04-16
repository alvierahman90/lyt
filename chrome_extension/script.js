var url = "http://";
function clickhandler(info)
{
	var xmlHttp = new XMLHttpRequest();
	url = "http://";
	url += "127.0.0.1:5000";
	url += "/play?";
	url += "player=" + "mpv";
	url += "&player_options=" + "--force-seekable=yes";
	url += "&url=" + encodeURIComponent(info.linkUrl);

	console.log(url)

	xmlHttp.open( "GET", url, true);
	xmlHttp.send();
}

chrome.contextMenus.create({"title": "Play video via lyt","onclick":clickhandler,"contexts":["link"]});
