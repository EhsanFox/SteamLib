# Client Class Inputs
  - Steam64 ID | Use [steamid.xyz](https://steamid.xyz/)
  - Steam API Key | Can be Found in [Here](https://steamcommunity.com/dev/apikey)
  - Options | an object

 ## Options
 an object that control fetching friendList or GameList
  - `games` : a Boolean to cache the Game data that userId owns
  - `friends` : a Boolean to cache the FriendList data that userId has

 ## Properties
 - `user` : Returns a User Object
 - `friends` : Returns a Collection of User Objects (it would exist if it's enabled on Client Options)
 - `games` : Returns a Collection of Game Objects (it would exist if it's enabled on Client Options)

 ## Events
 at the moment, Client has only one `ready` event and that would be triggered when all the data is loaded and ready to use, trying to get the data before the event would be `undefined`

# findApp
Find steam apps name with their id/name or even with a RegExp
 ## Inputs
 - `searchKey`: can be String, Number or even RegExp
 - `Token` : the Steam Api Key `[String]`

 ## Result
 the output would be a string that contains the app Name.

# Game Object
a Collection of Games that userId is owned(More information about Collections on [examples](https://github.com/EhsanFox/SteamLib/tree/main/examples))
 ## Properties
 - `name` : Game/App name
 - `id` : Steam App ID
 - `playtime` : playtimes from every platforms, [HOURS:MINS]
    - `total` : Total playtime of that game on every Platform
    - `windows` : Total playtime of that game on Windows Platform
    - `mac` : Total playtime of that game on Mac Platform
    - `linux` : Total playtime of that game on Linux Platform

# User Object
a Collection of Friends that userId has(More information about Collections on [examples](https://github.com/EhsanFox/SteamLib/tree/main/examples))
 ## Properties
 - `name` : user nickname `[String]`
 - `realname` : Full/Real name `[String]`
 - `url` : Profile URL `[String|URL]`
 - `avatars` : an Object Contains avatar urls `[Object]`
    - `small` : a small size of avatar picture `[String|URL]`
    - `medium` : a medium size of avatar picture `[String|URL]`
    - `large` : a full size of avatar picture `[String|URL]`
    - `hash` : hash Code of avatar picture `[String]`
 - `locale` : an Object Contains user Country information `[Object]` 
    - `country` : Country Name `[String]`
    - `flag` : Flag picture url `[String|URL]`
    - `state` : User State Code `[String]`
