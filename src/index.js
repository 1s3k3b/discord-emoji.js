const fetch = require("node-fetch");
const Emoji = require("./Emoji.js");
const resolver = require("./resolver.js");
const util = require("./util.js");

module.exports = {
    urls: {
        stats: "https://discordemoji.com/api?request=stats",
        allEmojis: "https://discordemoji.com/api/",
        categories: "https://discordemoji.com/api?request=categories",
        packs: "https://discordemoji.com/api/packs"
    },
    util,
    getSiteData: () => fetch(module.exports.urls.stats).then(d => d.json()),
    getEmojis: async (category = "all", map) => {
        category = resolver.resolveCategories(category);
        map = map ? String(map).toLowerCase().trim() : undefined;
        return (await (await fetch(module.exports.urls.allEmojis).then(async x => (await x.json()).filter(y => category.some(z => y.category === z)).map(r => !map ? r : (r[map] || r))))).map(x => new Emoji(x));
    },
    findEmoji: async name => (await module.exports.getEmojis()).find(x => util.findStr(name, x.name)),
    getEmoji: async id => (await module.exports.getEmojis()).find(x => x.id === Number(String(id).replace(/\W/g, ""))),
    getAuthorEmojis: async name => (await module.exports.getEmojis()).filter(x => util.findStr(name, x.author))
};
