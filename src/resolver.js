const util = require("./util.js");
const categories = {
    "1": "Original Style",
    "2": "TV / Movie",
    "3": "Meme",
    "4": "Anime",
    "5": "Celebrity",
    "6": "Blobs",
    "7": "Thinking",
    "8": "Animated",
    "9": "NSFW",
    "10": "Gaming",
    "11": "Letters",
    "12": "Other",
    "13": "Pepe",
    "14": "Logos",
    "15": "Cute",
    "16": "Utility",
    "17": "Animals",
    "18": "Recolors"
};

module.exports = {
    resolveCategory: obj => {
        if (obj instanceof Number && !isNaN(Number(obj))) {
            const num = Number(obj);
            if (num >= 1 && num <= 18) return num;
            return void console.warn("Invalid category number " + num);
        }
        if (obj instanceof String) {
            const str = obj.trim().toLowerCase();
            const found = util.search(str, categories);
            if (found) return 
        }
    },
    resolveCategories: obj => Array.from(new Set((obj === "all" ? Object.values(categories) : obj instanceof Array ? obj : [obj]).map(resolveCategory)));
};
