// The context menu script

// Saving the player_command into a div is probably not the best way to do it
// but it works
function get_player()
{
	chrome.storage.sync.get({player_command: 'mpv --force-seekable=yes'},
		function(items){
			document.getElementById('player_command').innerHTML = items.player_command;
		});

	return document.getElementById('player_command').innerHTML;
}

function clickhandler(info)
{
	var xmlHttp = new XMLHttpRequest();
	var url = "http://";
	var player = get_player();
	url = "http://";
	url += "127.0.0.1:5000";
	url += "/play?";
	url += "player_command=" + player;
	url += "&url=" + encodeURIComponent(info.linkUrl);

	console.log(url)

	xmlHttp.open( "GET", url, true);
	xmlHttp.send();
}

if (!document.getElementById('player_command')){
	var div = document.createElement("div");  
	div.setAttribute('id','player_command');
	document.getElementsByTagName('body')[0].appendChild(div);
	get_player();
}

chrome.contextMenus.create(
	{
		"title": "Play video via lyt"
		, "onclick": clickhandler
		, "contexts": ["link"]
	}
);
