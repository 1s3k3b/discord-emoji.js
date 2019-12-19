const fetch = require("node-fetch");

module.exports = {
    urls: {
        stats: "https://discordemoji.com/api?request=stats",
        allEmojis: "https://discordemoji.com/api/"
    },
    getSiteData: () => fetch(this.urls.stats).then(d => d.json()),
    getEmojis: async (category = "all", map) => {
        category = resolver.resolveCategories(category);
        map = map ? String(map).toLowerCase().trim() : undefined;
        return fetch(this.urls.allEmojis).then(async x => (await x.json()).filter(y => category.some(z => y.category === z)).map(r => !map ? r : (r[map] || r));
    }
};
