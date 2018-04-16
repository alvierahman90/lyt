#!/usr/bin/env python3

import subprocess
import flask
import os
import asyncio
from flask import Flask
from flask import request

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)

def play(url, player_command):
    command = "youtube-dl -o - {0} | {1} - ".format(url,player_command)
    subprocess.run(["sh","-c",command], stdout=None, stdin=None,stderr=None,)

@app.route("/play")
def get_play():
    url=request.args.get("url")
    player_command=request.args.get("player_command")

    if not player_command:
        return "400 Bad request: No player command", 400
    play(url, player_command)
    return "200 Ok", 200

if __name__ == "__main__":
    app.debug = True
    app.run()
