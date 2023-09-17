// logs user out by removing token
const logOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.open("/", "_self");
}

// get list of servres you are  apart of
const getGuilds =  async () => {
    let guilds = await fetch('https://discordapp.com/api/users/@me/guilds', {
        headers: {
            'Authorization': document.cookie.slice(6)
        }
    }).then(data => data.json())
    console.log(guilds)
    return guilds;

}

// get list of people you are dming
const getDMs =  async () => {
    let dms = await fetch(
        "https://discord.com/api/users/@me/channels", {
        headers: {
            'Authorization': document.cookie.slice(6)
        }
    }).then(data => data.json())
    console.log(dms)
    return dms
}


// used to get messages from channel w/ the specified id
const getMessages = async(id) => {
    let content = await fetch(
        `https://discord.com/api/v9/channels/${id}/messages`, {
            headers: { 'Authorization': document.cookie.slice(6) }
        }
    ).then(data => data.json())
    console.log(content)
    return content;
}

const getChannels = async(guild_id) => {
    let data =  await fetch(`https://discordapp.com/api/guilds/${guild_id}/active-channels`, {
        headers: {
            'Authorization': document.cookie.slice(6)
        }
    }).then(data => data.json())
    console.log(data)
    return data;
}

export {getDMs, getGuilds, logOut, getMessages, getChannels}