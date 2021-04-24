const SteamLib = require("../src/index"); // or SteamLib
const Client = new SteamLib.Client('<YOUR_STEAM_ID>', '<YOUR_STEAM_API_KEY>', { games: true });

Client.on('ready', () => { //Whenever is Data ready to use, This event will be triggered.

    Client.games.get(`<APP_ID>`);
    Client.games.find(game => game.name === "<GAME_NAME>");

    // * Returns undefined if it doesn't exist...!

    Client.games.get('total') //Returns Total of Game counts that userId owns (Number)

});