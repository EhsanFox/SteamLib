const { fetchData } = require("../Utils/util");
const Collection = require("@discordjs/collection");
const Apis = require("../Utils/Apis");
const GetUser = require("./User");

module.exports = async function(userId, Token)
    {
        if(!Token || !userId) return new Error('UserID and Token is required.');
        const userFriends = new Collection();
        const FriendListData = await fetchData(`${Apis.FriendList}?key=${Token}&steamid=${userId}`);
        const FriendList = FriendListData.friendslist.friends;
        userFriends.set('total', FriendList.length);

        for await (const Friend of FriendList)
        {
            const userInfo = await GetUser(Friend.steamid, Token);
            userFriends.set(Friend.steamid, userInfo);
        }
        return userFriends;
    };