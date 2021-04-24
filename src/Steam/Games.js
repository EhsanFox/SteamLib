const { fetchData, findApp, minToDate } = require("../Utils/util");
const Collection = require("@discordjs/collection");
const Apis = require("../Utils/Apis");

module.exports = async function(userId, Token)
    {
        if(!Token || !userId) return new Error('UserID and Token is required.');
        const userGames = new Collection();
        
        const UserGamesData = await fetchData(`${Apis.OwnedGames}?key=${Token}&steamid=${userId}`);
        userGames.set('total', UserGamesData.response.game_count);
        const UserGames = UserGamesData.response.games;
        for await (const game of UserGames)
        {
            const AppName = await findApp(game.appid, Token);
            const obj2Save = {
                name: AppName,
                id: game.appid,
                playtime: {
                    total: minToDate(game.playtime_forever),
                    windows: minToDate(game.playtime_windows_forever),
                    mac: minToDate(game.playtime_mac_forever),
                    linux: minToDate(game.playtime_linux_forever)
                }
            };

            userGames.set(game.appid, obj2Save);
        }
        return userGames;
    };