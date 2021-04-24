const fetch = require("node-fetch");
module.exports = {

    fetchData: async function(url)
    {
        const Headers = {
            method: 'GET'
        };
        const res = await fetch(url, Headers);
        const jsonRes = await res.json();
        return jsonRes;
    },

    minToDate: function(min)
    {
        if(min == 0)
            return "0";
        const hours = Math.floor(min / 60);
        const newMin = Math.floor(min - (hours * 60));

        return hours + ":" + newMin;
    },

    findApp: async function(searchKey, Token)
    {
        if(!searchKey || !Token) return new Error('an Input and Token is Required. [searchKey == RegEx/ID/String]');
        const url = `https://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=${Token}`
        const AppDatas = await module.exports.fetchData(url);
        const appList = AppDatas.applist.apps;
        let result;
        switch(input.constructor.name)
        {
            case "String":
                result = appList.filter(e => e.name === searchKey)[0].name;
                if(result)
                    return result;
                else return null;
            break;
    
            case "Number":
                result =  appList.filter(e => e.appid === searchKey)[0];
                if(result)
                    return result.name;
                else return null;
            break;
    
            case "RegExp":
                result =  appList.filter(e => e.name.match(searchKey))[0].name;
                if(result)
                    return result;
                else return null;
            break;
    
            default:
            break;
        }
    }
}