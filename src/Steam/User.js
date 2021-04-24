const { fetchData } = require("../Utils/util");
const Apis = require("../Utils/Apis");



module.exports = async function(userid, Token, options)
{
    if(!Token || !userid) return new Error('UserID and Token is required.');
    const SummeriesData = await fetchData(`${Apis.PlayerSummeries}?key=${Token}&steamids=${userid}`);
    const UserData = SummeriesData.response.players[0];
    const CountryData = await fetchData(`${Apis.CountryData}${UserData.loccountrycode}?fields=name;flag`);
    const result = {
        realname: UserData.realname,
        name: UserData.personaname,
        id: UserData.steamid,
        url: UserData.profileurl,
        avatars: {
            small: UserData.avatar,
            medium: UserData.avatarmedium,
            large: UserData.avatarfull,
            hash: UserData.avatarhash
        },
        locale: {
            country: CountryData.name,
            flag: CountryData.flag,
            state: UserData.locstatecode,
        }
    };
    if(options && options.games)
    {
        const getGames = require("./Games");
        result.games = await getGames(userid, Token);
    }
    if(options && options.friends)
    {
        const getFriends = require("./Friends");
        result.friends = await getFriends(userid, Token);
    }

    return result;
};