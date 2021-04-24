const SteamLib = require("../src/index"); // or SteamLib
const Client = new SteamLib.Client('<YOUR_STEAM_ID>', '<YOUR_STEAM_API_KEY>', { friends: true });

Client.on('ready', () => { //Whenever is Data ready to use, This event will be triggered.

    Client.friends.get('<STEAM_ID>'); 
    Client.friends.find(user => user.name === "<FRIEND_NAME>");

    // * Returns undefined if it doesn't exist...!

    Client.friends.get('total') //Returns Total of Friend counts that userId Has (Number)

});