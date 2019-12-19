const fetch = require("node-fetch");
const resolver = require("./resolver.js");

module.exports = {
    urls: {
        stats: "https://discordemoji.com/api?request=stats",
        allEmojis: "https://discordemoji.com/api/"
    },
    getSiteData: () => fetch(this.urls.stats).then(d => d.json()),
    getEmojis: async (category = "all", map) => {
        category = resolver.resolveCategories(category);
        map = map ? String(map).toLowerCase().trim() : undefined;
        return (await (await fetch(this.urls.allEmojis).then(async x => (await x.json()).filter(y => category.some(z => y.category === z)).map(r => !map ? r : (r[map] || r)))));
    },
    findEmoji: async name => (await this.getEmojis("all", "name")).find(x => util.findStr(name, x))
};
