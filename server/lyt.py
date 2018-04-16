#!/usr/bin/env python3

import subprocess
import flask
import os
import asyncio
from flask import Flask
from flask import request

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)

def play(url, player, player_options=""):
    command = "youtube-dl -o - {0} | {1} - ".format(url,player)
    command += player_options
    subprocess.run(["sh","-c",command], stdout=None, stdin=None,stderr=None,)

@app.route("/play")
def get_play():
    url=request.args.get("url")
    player=request.args.get("player")
    player_options=request.args.get("player_options")

    if not player:
        return "400 Bad request: No player specified", 400
    play(url, player, player_options=player_options)
    return "200 Ok", 200

if __name__ == "__main__":
    app.debug = True
    app.run()
