const SteamHelper = require("../Steam/index");
const events_1 = require("events");
class Client extends events_1.EventEmitter {

    #Key;
    #User;
    #Options;
    user;
    games;
    friends;

    constructor(userId, steamKey, options)
    {
        super();
        if(!userId) throw new Error('userId is Required for Creating a Client.');
        if(typeof userId !== "string") throw new Error('userId can be only String.');
        if(!steamKey) throw new Error('steamApiKey is Required for Creating Connections.');
        if(typeof steamKey !== "string") throw new Error('steamApiKey can be only string.');
        if(options && typeof options !== "object") throw new Error('options can be only Object.');

        this.#User = userId;
        this.#Key = steamKey;
        this.#Options = options ? options : { games: false, friends: false };

        (async () => {
            this.user = await SteamHelper.getUser(this.#User, this.#Key, this.#Options);
            if(this.#Options.games)
                this.games = await SteamHelper.getGames(this.#User, this.#Key);
            if(this.#Options.friends)
                this.friends = await SteamHelper.getFriendlist(this.#User, this.#Key);
            console.log('its ready');
            this.emit('ready');
        })();
    } 
    
}
module.exports = Client;