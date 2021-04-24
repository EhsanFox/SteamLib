# Client Class Inputs
  - Steam64 ID | Use [steamid.xyz](https://steamid.xyz/)
  - Steam API Key | Can be Found in [Here](https://steamcommunity.com/dev/apikey)
  - Options | an object

 ## Options
 an object that control fetching friendList or GameList
  - `games` : a Boolean to cache the Game data that userId owns
  - `friends` : a Boolean to cache the FriendList data that userId has

 ## Properties
 - `user` : Contains information about userId
 - `friends` : a Collection of FriendList of userId (it would exist if it's enabled on Client Options)
 - `games` : a Collection of Games that userId owns (it would exist if it's enabled on Client Options)

 ## Events
 at the moment, Client has only one `ready` event and that would be triggered when all the data is loaded and ready to use, trying to get the data before the event would be `undefined`

# findApp
Find steam apps name with their id/name or even with a RegExp
 ## Inputs
 - `searchKey`: can be String, Number or even RegExp
 - `Token` : the Steam Api Key

 ## Result
 the output would be a string that contains the app Name.

# GameList
a Collection of Games that userId is owned(More information about Collections on [examples]())
 ## Properties
 - `name` : Game/App name
 - `id` : Steam App ID
 - `playtime` : playtimes from every platforms, [HOURS:MINS]
    - `total` : Total playtime of that game on every Platform
    - `windows` : Total playtime of that game on Windows Platform
    - `mac` : Total playtime of that game on Mac Platform
    - `linux` : Total playtime of that game on Linux Platform