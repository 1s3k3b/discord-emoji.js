const fetch = require("node-fetch");

module.exports = {
    getSiteData: () => fetch("https://discordemoji.com/api?request=stats").then(d => d.json()),
    getEmojis: (category = "all") => fetch()
};
