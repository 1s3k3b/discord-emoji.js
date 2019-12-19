const fetch = require("node-fetch");

module.exports = {
    urls: {
        stats: "https://discordemoji.com/api?request=stats",
        allEmojis: "https://discordemoji.com/api/"
    },
    getSiteData: () => fetch(this.urls.stats).then(d => d.json()),
    getEmojis: async (category = "all", map = "none") => {
        category = resolver.resolveCategory(category);
        map = resolver.resolveMapType(map);
        return fetch(this.urls.allEmojis).then(async x => (await x.json()).filter(y => category.some(z => y.category === z)).map(r => map === "none" ? r : (r[map] || r));
    }
};
