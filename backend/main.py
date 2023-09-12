from flask import Flask, render_template, request
import os
from backend.lib import send_message, get_guilds, get_message, get_channels, get_dms

app = Flask(__name__, static_folder="./static")


@app.route("/")
def about():
    return render_template(os.path.join("../frontend/build/index.html"))


@app.route(r"/<guild>/<int:server>/", methods=["POST", "GET"])
def channels(server, guild):
    if "send" in request.form.keys():
        key, message = request.form["token"], request.form["message"]
        send_message(server, key, message)
        guilds, message = get_guilds(key), get_message(server, key)
    else:
        key = request.form["token"]
        message = False
        guilds = get_guilds(key)
        if guild == "channel":
            snav = get_channels(server, key)
        elif guild == "dm":
            snav = get_dms(key)
        else:
            snav = get_dms(key)
            message = get_message(server, key)
    return render_template(
        "index.html",
        key=key,
        guild_check=guild,
        messages=message,
        guilds=guilds,
        snav=snav,
    )


if __name__ == "__main__":
    app.run(
        debug=True,
    )
