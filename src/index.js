const fetch = require("node-fetch");

module.exports = {
    getSiteData: () => fetch("https://discordemoji.com/api?request=stats").then(d => d.json()),
    getEmojis: async (category = "all", map = "none") => {
        category = resolver.resolveCategory(category);
        map = resolver.resolveMapType(map);
        return fetch("https://discordemoji.com/api/").then(async x => (await x.json()).filter(y => category.some(z => y.category === z)).map(r => map === "none" ? r : (r[map] || r));
    }
};
