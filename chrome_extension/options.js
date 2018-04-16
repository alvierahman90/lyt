function save_options() {
	var player_command = document.getElementById('player').value;
	chrome.storage.sync.set({player_command: player_command},function(){
		var status = document.getElementById('status');
		status.textContent = 'Saved.';
	});
}

function restore_options() {
	 chrome.storage.sync.get({player_command: 'mpv --force-seekable=yes'},
		function(items) {
			document.getElementById('player').value = items.player_command;
		});
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
